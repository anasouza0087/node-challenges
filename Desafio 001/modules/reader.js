const fs = require("fs/promises");
const path = require("path");

const readFile = async () => {
  const pathFile = path.resolve(__dirname, "../files", "input.txt");
  const content = await fs.readFile(pathFile, "utf-8");
  return content;
};

module.exports = readFile;
