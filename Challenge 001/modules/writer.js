const path = require("path");
const fs = require("fs");

const pathNewfile = path.resolve(__dirname, "../files", "output.txt");

const fileWriter = (resp) => {
  return new Promise((resolve, reject) => {
    const parsedResp = resp.toUpperCase();
    fs.writeFile(pathNewfile, parsedResp, (error) => {
      if (!error) {
        resolve(console.log("file created with success!"));
      } else {
        reject(error);
      }
    });
  });
};

module.exports = fileWriter;
