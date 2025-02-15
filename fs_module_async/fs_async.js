const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', (err, result) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(result);
})
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err);
        return;
    }
    const first = result;
    console.log('done with the task');
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-sync.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err){
                    console.log(err);
                    return;
                }
                console.log(result);
                
            }
        )
    })
})
    
console.log('starting the next one');