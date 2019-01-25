Page({
  data: {
    src: 'https://news.static.dongtu.com/toutiao/gif-sina-com-cn/1530044016/424227.lossy.gif',
    src1: ''
  },
  changePage(){
    wx.navigateTo({ url: '../circle2/circle2'})
  },
  onShow(){
    setTimeout(()=>{
      this.setData({
        src: ''
      })
    },2000);
  }
})