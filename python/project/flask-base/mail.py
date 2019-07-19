from flask_mail import Mail, Message
from flask import Flask

my_mail_name = '863562441@qq.com'
my_mail_pwd = 'itanhorabqtvbced'
you_mail_name = '1329328174@qq.com'

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.qq.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = my_mail_name
app.config['MAIL_PASSWORD'] = my_mail_pwd
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)


@app.route("/a")
def index():
    msg = Message('Hello', sender=my_mail_name,
                  recipients=[my_mail_name])
    msg.body = "This is the email body"
    mail.send(msg)
    return "Sent"


if __name__ == '__main__':
    app.run(debug=True)
