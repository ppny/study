var mysql  = require('mysql');  

var connection = mysql.createConnection({     
 host     : 'localhost',       
 user     : 'root',              
 password : 'wangyn',       
 port: '3306',                   
 database: 'test', 
}); 

connection.connect();

var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(9,?,?,?,?)';
var  addSqlParams = ['小鸣单车222', 'https://c.runoob.com','234536', 'CNs'];
//增
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

connection.end();