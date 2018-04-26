***常识***
1、命令大写
区分变量和数据库语句, 提高可读性





***命令***
SHOW COLUMN FROM table;				显示表字段结构
SELECT * FROM 'table' WHERE id=''...;	检索特殊行


WHERE子句	SELECT field1,field2,... FROM table1,table2,...	WHERE condition1 [AND/OR] condition2...
			condition: a=b,a like 'x%'
排序		SELECT field1,field2,... FROM table1,table2,... ORDER BY field1,field2...[ASC [DESC]]
多表连接	INNER JOIN...(ON...=...)...
