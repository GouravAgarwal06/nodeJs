const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
//sync way of creating the file
fs.writeFileSync(filePath, "Hello from node js");
console.log("file created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File content:", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is a new line added to that file");
console.log("new file content added");

//async way of creating the file
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello from node js", (err) => {
    if(err) throw err;
    console.log("file created successfully");

    fs.readFile(asyncFilePath, "utf8", (err, data) => {
        if(err) throw err;
        console.log("File content:", data);

        fs.appendFile(asyncFilePath, "\nThis is a new line added to that file", (err) => {
            if(err) throw err;
            console.log("new file content added");

            fs.readFile(asyncFilePath, "utf8", (err, data) => {
                if(err) throw err;
                console.log("File content after appending:", data);
            })
        })
    })
})
