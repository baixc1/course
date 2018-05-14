Page({
  onLoad() {
    wx.getUserInfo({
      success: function (res) {   //用户基本信息  nickName,avatarUrl,gender,province,city,country
        console.log('getUserInfo')
        console.log(res.userInfo)

      }
    })
    wx.getSystemInfo({        //系统信息 model,pixelRatio,screenWidth,windowWidth,language,system,platform,version..
      success: function (res) {
        console.log('getSystemInfo')
        console.log(res)
      }
    })
    wx.login({              //获取openId (用户唯一标识)和session_key 
      success: function (res) {   //登录凭证（code）
        console.log('login')
        console.log(res)

        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=?&secret=?&grant_type=authorization_code&js_code=' + res.code,
            success(res) {
              console.log(res)
            }
          })
        }
      }
    });
  }
})