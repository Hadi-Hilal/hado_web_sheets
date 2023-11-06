var fs = require('fs')

function read(path) {
    var data = fs.readFileSync(path);
    return  console.log(data.toString())
}

module.exports= {
    read
}
