const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.resolve(__dirname, "../../../projects.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function main() {
  const title = await askQuestion("Title: ");
  const description = await askQuestion("Description: ");
  const techInput = await askQuestion("Tech (comma-separated): ");
  const imageFilename = await askQuestion("Image filename (e.g. my-image.jpg): ");
  const github_link = await askQuestion("GitHub/GitLab Link: ");

  const tech = techInput.split(",").map(t => t.trim());
  const image = `images/${imageFilename.trim()}`;

  const newProject = { title, description, tech, image, github_link };

  let projects = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    projects = JSON.parse(data);
  }

  projects.push(newProject);

  fs.writeFileSync(filePath, JSON.stringify(projects, null, 2), "utf-8");

  console.log("✅ Project added successfully to projects.json!");

  rl.close();
}

main();
