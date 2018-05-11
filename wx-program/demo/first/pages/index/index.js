Page({
  data: {
    list: [{
      text: 'tabs', url: '../tabs/tabs'
    }, {
      text: 'temp', url: '../temp/temp'
    }, {
      text: 'loadmore and refresh', url: '../request/request'
    }, {
      text: 'components', url: '../components/components'
    }, {
      text: 'slideshow', url: '../slideshow/slideshow'
    }, {
      text: 'fragment', url: '../fragment/fragment'
    }, {
        text: 'embed', url: '../embed/embed'
    }]
    
  },
  changePage: function(e){
    wx.navigateTo({url:e.target.dataset.url})
  }
}) 