let fs = require('fs')
let zlib = require('zlib');

let i =0 ;
let myRead = fs.createReadStream('large.txt' , 'utf8')
let myWrite = fs.createWriteStream('copy_large.txt' , "utf-8")
myRead.on('data' , (chunk)=>{
    console.log('we recived some of data ________________________  ' + i)
    console.log(chunk)
    i++
    myWrite.write(chunk + ' ' + i )
}).pipe(zlib.createGzip()).pipe(fs.createWriteStream('copy_large.gz'))

