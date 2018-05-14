Page({
  data: {
    list: [ {
      text: 'temp', url: '../temp/temp'
    }, {
      text: 'loadmore and refresh', url: '../request/request'
    }, {
      text: 'components', url: '../components/components'
    }, {
      text: 'slideshow', url: '../slideshow/slideshow'
    }, {
      text: 'fragment', url: '../fragment/fragment'
    }]
    
  },
  changePage: function(e){
    wx.navigateTo({url:e.target.dataset.url})
  }
}) 