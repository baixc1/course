import 点将小助手
点将小助手.show_menu()
while True:
    user_action = input("请输入操作")
    if user_action == "1":
        点将小助手.add_stu()
    elif user_action == "2":
        点将小助手.show_all()
    elif user_action == "3":
        点将小助手.query_stu()
    elif user_action == "0":
        break
    else:
        print("输入不合法，请重新输入")