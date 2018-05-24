Page({
  data: {
    list: [{
      text: 'shop', url: '../shop/shop'
    }],
    url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3135827843,825304513&fm=27&gp=0.jpg'
  },
  changePage: function (e) {
    wx.navigateTo({ url: e.target.dataset.url })
  },
  //转发
  onShareAppMessage(e) {
    wx.showShareMenu({
      // 要求小程序返回分享目标信息
      withShareTicket: true
    });
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
  },
  makeImg(){
    var me = this,
        d = me.data;
    wx.downloadFile({
      url: d.url,
      success(res){
        console.log(res)
        me.drawImage(res.tempFilePath);
      },
      fail(res){
        console.log(res)
      }
    })
  },
  drawImage(img){
    const ctx = wx.createCanvasContext('myCanvas')
    var bgPath = '../../../images/ss.png'
    var w = wx.getSystemInfoSync().windowWidth  
    var scale = 1.6
    //绘制背景图片
    ctx.drawImage(bgPath, 0, 0, w, scale * w)
    ctx.arc(w / 2, 0.32 * w, 0.15 * w, 0, 2 * Math.PI)
    ctx.clip()

    //绘制二维码
    ctx.save()
    ctx.drawImage(img, 0.64 * w / 2, 0.75 * w, 0.36 * w, 0.36 * w)

    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: w,
      height: w * scale,
      destWidth: w * 4,
      destHeight: w * 4 * scale,
      canvasId: 'myCanvas',
      success: function (res) {
        console.log('朋友圈分享图生成成功:' + res.tempFilePath)
        wx.previewImage({
          current: res.tempFilePath, // 当前显示图片的http链接
          urls: [res.tempFilePath] // 需要预览的图片http链接列表
        })
      },
      fail: function (err) {
        console.log('失败')
        console.log(err)
      }
    })
  }
}) 
