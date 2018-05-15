Page({
  data: {
    list: [ {
      text: 'temp+userInfo', url: '../temp/temp'
    }, {
        text: 'loadmore+swiper', url: '../request/request'
    }, {
      text: 'components', url: '../components/components'
    },  {
      text: 'fragment', url: '../fragment/fragment'
    }]
    
  },
  changePage: function(e){
    wx.navigateTo({url:e.target.dataset.url})
  }
}) 