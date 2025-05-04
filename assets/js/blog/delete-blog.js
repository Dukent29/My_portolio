const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.resolve(__dirname, "../../../blog.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function main() {
  if (!fs.existsSync(filePath)) {
    console.log("❌ blog.json not found.");
    rl.close();
    return;
  }

  const data = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(data);

  if (blogs.length === 0) {
    console.log("No blogs to delete.");
    rl.close();
    return;
  }

  console.log("\n📋 Blogs:");
  blogs.forEach((b, index) => {
    console.log(`${index + 1}. ${b.title}`);
  });

  const answer = await askQuestion("\nWhich blog number to delete? ");

  const index = parseInt(answer) - 1;

  if (isNaN(index) || index < 0 || index >= blogs.length) {
    console.log("❌ Invalid number.");
    rl.close();
    return;
  }

  const removed = blogs.splice(index, 1);
  fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), "utf-8");

  console.log(`✅ Deleted blog: ${removed[0].title}`);
  rl.close();
}

main();
