import fs from "fs";
import dotenv from "dotenv";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { generateEmbedding } from "../lib/embeddings.js";
import { upsertVector } from "../lib/vector.js";

dotenv.config({ path: ".env.local" });

async function extractTextFromPDF(path) {
  const data = new Uint8Array(fs.readFileSync(path));
  const pdf = await pdfjsLib.getDocument({ data }).promise;

  let fullText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullText += strings.join(" ") + "\n";
  }

  return fullText;
}

async function run() {
  try {
    const text = await extractTextFromPDF("./public/resume.pdf");

    const chunks = text.match(/.{1,500}/g) || [];

    for (let i = 0; i < chunks.length; i++) {
      const embedding = await generateEmbedding(chunks[i]);
      await upsertVector(`resume-${i}`, embedding, chunks[i]);
      console.log(`Indexed chunk ${i}`);
    }

    console.log("Resume indexed successfully");
  } catch (err) {
    console.error("Error indexing resume:", err);
  }
}

run();