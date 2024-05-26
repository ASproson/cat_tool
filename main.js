import fs from "fs";

async function readData() {
  fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file: ", err);
      return;
    }
    console.log(data);
  });
}

readData();
