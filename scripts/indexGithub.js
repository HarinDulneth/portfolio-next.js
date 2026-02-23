import axios from "axios";
import { generateEmbedding } from "../lib/embeddings";
import { upsertVector } from "../lib/vector";

const username = process.env.GITHUB_USERNAME;

const repos = await axios.get(
    `https://api.github.com/users/${username}/repos`,
    {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
    }
)

for (const repo of repos.data) {
    const content = `
    Repo: ${repo.name}
    Description: ${repo.description}
    Language: ${repo.language}
    Stars: ${repo.stargazers_count}
    `;

    const embedding = await generateEmbedding(content);
    await upsertVector(`repo-${repo.id}`, embedding, content);
}

console.log("Github indexed successfully");