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
  if (!fs.existsSync(filePath)) {
    console.log("❌ projects.json not found.");
    rl.close();
    return;
  }

  const data = fs.readFileSync(filePath, "utf-8");
  const projects = JSON.parse(data);

  if (projects.length === 0) {
    console.log("No projects to delete.");
    rl.close();
    return;
  }

  console.log("\n📋 Projects:");
  projects.forEach((p, index) => {
    console.log(`${index + 1}. ${p.title}`);
  });

  const answer = await askQuestion("\nWhich project number to delete? ");

  const index = parseInt(answer) - 1;

  if (isNaN(index) || index < 0 || index >= projects.length) {
    console.log("❌ Invalid number.");
    rl.close();
    return;
  }

  const removed = projects.splice(index, 1);
  fs.writeFileSync(filePath, JSON.stringify(projects, null, 2), "utf-8");

  console.log(`✅ Deleted project: ${removed[0].title}`);
  rl.close();
}

main();
