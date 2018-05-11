var util = require('../../utils/util.js')
Page({
  data: {
    slider: [],
    swiperCurrent: 0
  },
  onLoad: function () {
    var that = this;
    //网络访问，获取轮播图的图片  
    util.getSlideshow(function (data) {
      that.setData({
        slider: data.data.slider
      })
    });
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  }
})  