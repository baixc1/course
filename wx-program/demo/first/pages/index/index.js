Page({
  data: {
    list: [{
      text: 'tabs', url: '../tabs/tabs'
    }, {
      text: 'temp', url: '../temp/temp'
    }, {
      text: 'loadmore and refresh', url: '../request/request'
    }]
    
  },
  changePage: function(e){
    wx.navigateTo({url:e.target.dataset.url})
  }
}) 