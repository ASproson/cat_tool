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

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Usage: node main.js <command> [file]");
    process.exit(1);
  }

  const command = args[0];
  const filePaths = args.slice(1);

  switch (command) {
    case "cat":
      if (filePaths.length === 0) {
        console.error("File path is requried for cat command");
        process.exit(1);
      }
      concatenateFiles(filePaths);
      break;
    case "readline":
      if (filePaths.length === 0) {
        console.error("File path is required for 'readline' command");
        process.exit(1);
      }
      readFromFile(filePaths[0]);
      break;
    case "number":
      if (filePaths.length === 0) {
        console.error("File path is requried for number command");
        process.exit(1);
      }
      numberLines(filePaths[0], args.includes("-b"));
      break;
    default:
      console.error(
        "Invalid command. Available commands: 'cat', 'readline', 'number'"
      );
      process.exit(1);
  }
}

main();

module.exports = { readFromFile, concatenateFiles, numberLines };

// node main.js readline test.txt
// node main.js cat test.txt test2.txt
// node main.js cat test.txt | head -n3
// node main.js number test.txt
// node main.js number test.txt -b
// node main.js number test.txt | head -n3
// sed G test3.txt | node main.js number test3.txt -b | head -n4
// sed G test3.txt | node main.js number test3.txt | head -n4
