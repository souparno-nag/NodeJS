const path = require("path");
const fs = require("fs");

// printing directory and filename
console.log("Directory name:", path.dirname(__filename));
console.log("File name:", path.basename( __filename));

// asynchnonous read and write
const directoryPath = __dirname;
const asyncfilePath = path.join(directoryPath, "test.txt");

fs.readFile(asyncfilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async file content:\n", data); 
    
    fs.appendFile(asyncfilePath, "\nShe had never experienced such a thing before.", (err) => {
        if (err) throw err;
        console.log("New file content added");
        
        fs.readFile(asyncfilePath, "utf8", (err, data) => {
            if (err) throw err;
            const fileContents = data;

            const outputPath = path.join(directoryPath, "output.txt");

            fs.writeFile(outputPath, fileContents.toUpperCase(), (err) => {
                if (err) throw err;
                console.log(path.basename(outputPath), "created successfully");                
            });
        });
    });
});
