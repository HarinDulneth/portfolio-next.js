import axios from "axios";
import { generateEmbedding } from "../../../lib/embeddings";
import { queryVector } from "../../../lib/vector";
import { getRecent, pushRecent } from "../../../lib/memory";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

async function summerize(text) {
    const res = await axios.post(
        GROQ_URL,
        {
            model: "llama-3.1-8b-instant",
            messages: [
                { role: "system", content: "Summarize the following conversation briefly." },
                { role: "user", content: text },
            ],
            max_tokens: 300,
            temperature: 0.6,
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json",
            },
        }
    );

    return res.data.choices[0].message.content;
}

export async function POST(req) {
    try {
        const { sessionId, message } = await req.json();

        // 1. Generate embedding for RAG
        let context = "";
        try {
            const embedding = await generateEmbedding(message);
            const matches = await queryVector(embedding);
            context = matches.map(m => m.metadata.text).join("\n");
        } catch (err) {
            console.error("RAG error (continuing without context):", err.message);
        }

        // 2. Get conversation memory
        let memoryText = "";
        try {
            const recent = await getRecent(sessionId);
            memoryText = recent.join("\n");
        } catch (err) {
            console.error("Memory error (continuing without memory):", err.message);
        }

        // 3. Build messages for Groq
        const messages = [
            {
                role: "system",
                content: `You are Harin's professional AI assistant.

Use the following knowledge to answer accurately.

Context:
${context}

Previous Conversation:
${memoryText}`.trim()
            },
            {
                role: "user",
                content: message
            }
        ];

        // 4. Call Groq
        const response = await axios.post(
            GROQ_URL,
            {
                model: "llama-3.1-8b-instant",
                messages,
                max_tokens: 300,
                temperature: 0.6
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const reply = response.data.choices[0].message.content;

        // 5. Save to memory
        try {
            await pushRecent(sessionId, `User: ${message}`);
            await pushRecent(sessionId, `Assistant: ${reply}`);

            const recent = await getRecent(sessionId);
            if (recent.length > 8) {
                const summary = await summerize(memoryText);
                await pushRecent(sessionId, `Summary: ${summary}`);
            }
        } catch (err) {
            console.error("Memory save error:", err.message);
        }

        return Response.json({ reply });
    } catch (error) {
        console.error("Chat API error:", error?.response?.status, JSON.stringify(error?.response?.data));
        return Response.json(
            { reply: "Sorry, I'm having trouble responding right now. Please try again." },
            { status: 500 }
        );
    }
}