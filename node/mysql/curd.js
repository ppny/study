var mysql  = require('mysql');  

var connection = mysql.createConnection({     
 host     : 'localhost',       
 user     : 'root',              
 password : 'wangyn',       
 port: '3306',                   
 database: 'test', 
}); 

connection.connect();

//将websites表导入数据库test 命令
/* 从外部文件导入数据到数据库中：
从e:\mysql\mydb2.sql中将文件中的SQL语句导入数据库中：
1.从命令行进入mysql，然后用命令CREATE DATABASE mydb2;创建数据库mydb2。
2.退出mysql 可以输入命令exit；或者quit；
3.在CMD中输入下列命令：
c:\>mysql -h localhost -u root -p test < e:\work2\studySpace\node\mysql\websites.sql */
var  sql = 'SELECT * FROM websites';
//查
connection.query(sql,function (err, result) {
       if(err){
         console.log('[SELECT ERROR] - ',err.message);
         return;
       }

      console.log('--------------------------SELECT----------------------------');
      console.log(result);
      console.log('------------------------------------------------------------\n\n');  
});

connection.end();