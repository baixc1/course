var mysql      = require('mysql');
var connection = mysql.createConnection({
  user     : 'root',
  database : 'test'		//数据库
});
 
connection.connect();

//connection.query('CREATE TABLE shops(descs varchar(255),imgUrls varchar(255))');


//增
/*
var  addSql = 'INSERT INTO shops(descs,imgUrls) VALUES';
var response = {
			imgUrls: [
				'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
				'http://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar',
				'http://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar',
				'http://gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar',
				'http://gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar',
				'http://img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png',
				'http://gw.alicdn.com/tps/i3/TB1Ewu2KVXXXXXkapXXN4ls0XXX-183-129.png',
				'http://gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar',
				'http://img.alicdn.com/tps/TB1caopLVXXXXaDaXXXXXXXXXXX-183-129.png',
				'http://gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar'
			  ],
			descs: [
				'聚划算',
				'天猫',
				'天猫国际',
				'外卖',
				'天猫超市',
				'充值中心',
				'阿里旅行',
				'领金币',
				'到家',
				'分类'
			]
		};
for(var i=0; i< response.descs.length; i++){
	addSql += '("' + response.descs[i] + '","' + response.imgUrls[i] + '")';
	addSql += i == response.descs.length-1 ? ';' : ',';
}

connection.query(addSql,function (err, result) {
	if(err){
		console.log('[INSERT ERROR] - ',err.message);
		return;
	}        

	console.log('--------------------------INSERT----------------------------');
	console.log('INSERT ID:',result);        
	console.log('-----------------------------------------------------------------\n\n');  
});*/

//改
/*var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['Hello World',9,8];
connection.query(modSql,modSqlParams,function (err, result) {
   if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
   }        
  console.log('--------------------------UPDATE----------------------------');
  console.log('UPDATE affectedRows',result.affectedRows);
  console.log('-----------------------------------------------------------------\n\n');
});*/
 

//删
/*var delSql = 'DELETE FROM websites where id=7';
connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});*/

//查

var sql = 'SELECT * FROM shops';
connection.query(sql,function (err, result) {
	if(err){
	  console.log('[SELECT ERROR] - ',err.message);
	  return;
	}
	console.log(result);
});

connection.end();
