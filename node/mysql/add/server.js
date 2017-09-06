var express = require('express');
var app = express();
var mysql  = require('mysql');  

var connection = mysql.createConnection({     
 host     : 'localhost',       
 user     : 'root',              
 password : 'wangyn',       
 port: '3306',                   
 database: 'test', 
}); 

connection.connect();
app.use(express.static('public'));
app.get('/index.html',function(req,res){
    //res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/process_get',function(req,res){
    var response = {
        "name":req.query.name,
        "url":req.query.url,
        "country":req.query.country,
        "alexa":req.query.alexa,
    };
    var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
    var  addSqlParams = ['小鸣单车999', 'https://c.runoob.com','234536', 'CNs'];

    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
    });

    console.log(response)
    res.end(JSON.stringify(response));
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port

   console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

