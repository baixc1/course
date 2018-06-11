Page({
  data: {
    list: [{
      text: 'shop', url: '../shop/shop'
    }, {
      text: '转发群/单聊', type: 1
      }, {
      text: 'canvas', url: '../moments/moments'
    }, {
        text: 'frame', url: '../frame/frame'
    }],
    url: '../../images/ewm.png',
    a: '1',
  },
  onLoad(){
    this.setData({
      a: 2
    })
  },
  changePage: function (e) {
    wx.navigateTo({ url: e.target.dataset.url })
  },
  //转发
  onShareAppMessage(e) {
    // wx.showShareMenu({
    //   // 要求小程序返回分享目标信息
    //   withShareTicket: true
    // });
    return {
      success(res){
        if (res.shareTickets) {
          // 获取转发详细信息
          wx.getShareInfo({
            shareTicket: res.shareTickets[0],
            success(res) {
              console.log(res)
            }
          });
        }
      },
      title: '自定义转发标题',
      path: '/pages/advance/advace',
      imageUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3135827843,825304513&fm=27&gp=0.jpg'
    }
  }
}) 
