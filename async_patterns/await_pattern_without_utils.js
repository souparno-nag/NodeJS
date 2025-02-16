const {readFile, writeFile} = require('fs').promises

const start = async () => {
    try{
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        console.log(first, second)
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: 'a' } // Appends instead of overwriting
          )
    } catch(error) {
        console.log(error)
        
    }
}

start()