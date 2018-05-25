// pages/moments/moments.js
Page({
  data: {
    list: ['intro','gradients'],
    activeIndex: 0,
    x: 0,
    y: 0,
  },
  //点击tab事件
  change(e) {
    this.setData({
      activeIndex: e.target.dataset.index
    })
    this.draw()
  },
  draw(){
    var me = this.data
    var index = me.activeIndex
    const ctx = wx.createCanvasContext('myCanvas')

    if(index == 0){
      ctx.setFillStyle('red')
    }else if (index == 1) { // Create linear gradient
      //const grd = ctx.createLinearGradient(0, 0, 200, 0)
      const grd = ctx.createCircularGradient(75, 75, 20)  
      grd.addColorStop(0, 'red')
      grd.addColorStop(1, 'white')
      ctx.setFillStyle(grd)
    }
    ctx.fillRect(10, 10, 150, 75)
    ctx.draw()
  },
  move: function (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
})