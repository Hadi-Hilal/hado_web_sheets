
let http = require('http')
let url = require('url')
let queryStrings = require('querystring')

let form = `
<html>
<head>
<title> form</title>
</head>
<body>
<form method="POST">
<input type="text" name="username">
<button type="submit">Submit</button>
</form>
</body>
</html>

`


 http.createServer(function (req, res) {

    res.writeHead(200)
    res.write(form)
    res.end()

    var body = ''
    req.on('data' , function (data) {
        body = body + data;
        
    })
    
    req.on('end' , function () {
        var post = queryStrings.parse(body)
        console.log(post.username)
    })
}).listen(8888)

console.log('we listen http://127.0.0.1:8888')