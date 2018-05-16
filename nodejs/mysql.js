1、安装驱动并引入mysql模块
2、创建连接			//mysql.createConnection()
3、连接				//connection.connect()      connection.end() - 结束连接
4、mysql操作(CURD)
	connection.query("use " + DATABASE);	//使用数据库
	connection.query(sql,[arr,]fun)		//sql-mysql命令
	connection.query('CREATE TABLE shops(id int...)');		//建表
	
	中文变为?			//pypMyadmin新建table的key设置格式utf-8
	sql:
	'SELECT * FROM websites'		//Retrieve
	'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)'			//Update/Insert
	'UPDATE websites SET name = ?,url = ? WHERE Id = ?'			//Update
	'DELETE FROM websites where id=6'		//Delete
	