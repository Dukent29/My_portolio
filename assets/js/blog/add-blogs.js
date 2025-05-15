const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.resolve(__dirname, "../../../blogs.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask questions one by one
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function main() {
  const title = await askQuestion("Title: ");
  const description = await askQuestion("Description: ");
  const techInput = await askQuestion("Tech (comma-separated): ");
  const github_link = await askQuestion("GitHub/GitLab Link: ");

  const tech = techInput.split(",").map(t => t.trim());

  const newBlog = { title, description, tech, github_link };

  // Read existing blogs
  let blogs = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    blogs = JSON.parse(data);
  }

  blogs.push(newBlog);

  fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), "utf-8");

  console.log("✅ Blog added successfully to blog.json!");

  rl.close();
}

main();
