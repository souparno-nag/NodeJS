const {readFileSync, writeFileSync} = require('fs');
const { start } = require('repl');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a'}
)
console.log('done with the task');
console.log('starting the next one');
