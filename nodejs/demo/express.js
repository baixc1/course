var express = require('express');
var mysql      = require('mysql');
var app = express();
 

app.get('/process_get', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	
	// 输出 JSON 格式
	var connection = mysql.createConnection({
	  user     : 'root',
	  database : 'test'		//数据库
	});
	connection.connect();	
	var sql = 'SELECT * FROM shops';
	connection.query(sql,function (err, result) {
		if(err){
		  console.log('[SELECT ERROR] - ',err.message);
		  return;
		}
		console.log(result);
		res.end(JSON.stringify(result));
	});
	connection.end();
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})