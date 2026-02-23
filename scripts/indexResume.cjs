const fs = require("fs");
const pdf = require("pdf-parse");
const axios = require("axios");



const MODEL = "sentence-transformers/all-MiniLM-L6-v2";

async function generateEmbedding(text) {
    const res = await axios.post(
        `https://router.huggingface.co/hf-inference/models/${MODEL}/pipeline/feature-extraction`,
        { inputs: text },
        {
            headers: {
                Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            },
        }
    );
    return res.data;
}

async function upsertVector(id, vector, text) {
    await axios.post(
        `${process.env.UPSTASH_VECTOR_REST_URL}/upsert`,
        [{ id, vector, metadata: { text } }],
        {
            headers: {
                Authorization: `Bearer ${process.env.UPSTASH_VECTOR_REST_TOKEN}`,
            },
        }
    );
}

async function main() {
    const buffer = fs.readFileSync("./public/resume.pdf");
    const data = await pdf(buffer);

    const chunks = data.text.match(/.{1,500}/g);
    console.log(`Found ${chunks.length} chunks to index`);

    for (let i = 0; i < chunks.length; i++) {
        const embedding = await generateEmbedding(chunks[i]);
        await upsertVector(`resume-${i}`, embedding, chunks[i]);
        console.log(`Indexed chunk ${i + 1}/${chunks.length}`);
    }

    console.log("Resume indexed successfully");
}

main().catch(console.error);
