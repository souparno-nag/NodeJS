const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText('../content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))


// readFile('../content/first.txt', 'utf8', (err, data) => {
//     if (err){
//         return;
//     } else {
//         console.log(data)
//     }
// })


// Async promise
const start = async () => {
    try{
        const first = await getText('../content/first.txt')
        const second = await getText('../content/first.txt')
        console.log(first, second)
    } catch(error) {
        console.log(error)
        
    }
}

start()