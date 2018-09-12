list_stu = []
dict_title = {"name": "name", "age": "age", "class": "class"}

def add_stu():
    print("新增操作")
    dict_stu = {
        "name": input("姓名"),
        "age": input("age"),
        "class": input("class")
    }
    list_stu.append(dict_stu)

def show_all():
    print("查看全部")
    print("%(name)s\t\t%(age)s\t\t%(class)s" % dict_title)
    for item in list_stu:
        print("%(name)s\t\t%(age)s\t\t%(class)s" % item)
        break
    else:
        print("请注册")

def query_stu():
    print("查询操作")
    name_item = input("请输入查询姓名")
    print("%(name)s\t\t%(age)s\t\t%(class)s" % dict_title)
    for x in list_stu:
        if x["name"] == name_item:
            print("%(name)s\t\t%(age)s\t\t%(class)s"%x)
            user_input = input("请输入操作： 1.删除 2.修改 3.返回")
            if user_input == "1":
                list_stu.remove(x)
            elif user_input == "2":
                x["name"] = input("name") or x["name"]
                x["age"] = input("age") or x["age"]
                x["class"] = input("class") or x["class"]
            break
    else:
        print("查无此人")

def show_menu():
    print("="*50)
    print(
        """
        0. 退朝
        1. 武将招募
        2. 部队集合
        3. 武将查询
        """
    )
    print("="*50)