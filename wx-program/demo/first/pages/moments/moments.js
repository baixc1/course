// pages/moments/moments.js
Page({
  data: {
    list: ['intro','gradients','getImg','drawImg'],
    activeIndex: 0,
    x: 0,
    y: 0,
    scale: 1.6,
  },
  onLoad(){
    this.draw()
    wx.getSystemInfo(
      { success(res) { console.log(res) } }
    )
  },
  //点击tab事件
  change(e) {
    var index = e.target.dataset.index
    this.setData({
      activeIndex: index
    })
    this.draw()
  },
  draw(){
    var me = this.data
    var that = this
    var index = me.activeIndex
    const ctx = wx.createCanvasContext('myCanvas')

    if (index == 1) { // Create linear gradient
      //const grd = ctx.createLinearGradient(0, 0, 200, 0)
      const grd = ctx.createCircularGradient(75, 75, 20)  
      grd.addColorStop(0, 'red')
      grd.addColorStop(1, 'white')
      ctx.setFillStyle(grd)
      ctx.fillRect(0, 0, 100, 100)
    }else if (index == 3 || index == 2) {
      ctx.setFillStyle('#ffffff')   //背景色
      ctx.fillRect(0, 0, 300, 30)
      ctx.setFillStyle('#000000')   //文字色
      ctx.setFontSize(20)
      ctx.fillText('邀请你一起来领券抢红包啦~', 20, 20)
      ctx.drawImage('../../images/ewm.jpg', 0, 30, 581 / 2, 300 / 2)
    } else if (index == 0) {
      ctx.setFillStyle('red')
      ctx.fillRect(0, 0, 100, 100)
    }
    
    ctx.draw(false, function () {    //version>=1.7.0
      if (index == 2) {
        that.getImg()
      }
    })
  },
  move: function (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  getImg(){
    var scale = this.data.scale
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 581/2,
      height: 300/2+30,
      destWidth: 581,
      destHeight: 300+60,
      canvasId: 'myCanvas',
      success: function (res) {
        wx.previewImage({
          current: res.tempFilePath, // 当前显示图片的http链接
          urls: [res.tempFilePath] // 需要预览的图片http链接列表
        })
      }
    })
  },
})