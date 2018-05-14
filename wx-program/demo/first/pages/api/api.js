Page({
  data: {
    list: [{
      text: 'userInfo', url: '../userInfo/userInfo'
    }]
  },
  changePage: function (e) {
    wx.navigateTo({ url: e.target.dataset.url })
  },
}) 