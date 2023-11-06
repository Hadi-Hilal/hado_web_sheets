let crypt = require('crypto')


let hash = crypt.createHash('sha1')
console.log(hash.update('hi').digest('hex'))