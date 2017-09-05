//Express提供了内置的中间件express.static来设置静态文件如：图片、css、JavaScript等。
//使用express.static来设置静态文件路径

var express = require("express")
var app = express()

app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('hello world')
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})