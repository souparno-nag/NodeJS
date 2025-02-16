const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8'})

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))

// fs.readFile:
// Reads the entire file into memory at once.
// This can lead to high memory consumption, especially with large files, as the entire content is loaded into a single buffer.
// createReadStream:
// Reads the file in smaller chunks (streams) rather than loading the entire file into memory.
// This is more memory-efficient, as it only keeps a portion of the file in memory at any given time.