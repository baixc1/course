Page({
  data: {
    list: [{
      text: 'shop', url: '../shop/shop'
    }]

  },
  changePage: function (e) {
    wx.navigateTo({ url: e.target.dataset.url })
  }
}) 