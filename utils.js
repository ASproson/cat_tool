const fs = require("fs");
const readline = require("readline");

/**
 * Reads contents of file from the passed file path and prints them out
 * @param {*} filePath
 */
function readFromFile(filePath) {
  readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
  });
}

/**
 * Accepts an array of file paths and concatenates the result
 * @param {*} filePaths
 */
function concatenateFiles(filePaths) {
  filePaths.forEach((path) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file from path: ", err);
        return;
      }
      console.log(data);
    });
  });
}

/**
 * Output file at filepath with numbered lines
 * @param {*} filePath
 */
function numberLines(filePath, includeBlankLines) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading file: ", err);
      return;
    }
    const lines = data.split("\n");
    let lineNumber = 1;
    lines.forEach((line) => {
      if (line.trim() !== "" || includeBlankLines) {
        console.log(`${lineNumber} ${line}`);
        lineNumber++;
      } else {
        console.log();
      }
    });
  });
}

module.exports = { readFromFile, concatenateFiles, numberLines };
