Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    curIndex: 0,
    curList: [],
    menu: {}  
  },
  onLoad: function () {
    // 加载的使用进行网络访问，把需要的数据设置到data数据对象  
    var that = this
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          navLeftItems: res.data,
          list: res.data[that.data.curIndex].tree.nodes[0].tree.nodes,
          navRightItems: res.data
        })
      }
    })
    wx.request({
      url: 'http://127.0.0.1:8081/process_get',
      success(res){
         that.setData({
           menu: res.data
         })
      }
    })
  },

  //事件处理函数  
  switchRightTab: function (e) {
    var index = e.target.dataset.index
    // 计算激活项下标与数据
    this.setData({
      curIndex: index,        
      list: this.data.navRightItems[index].tree.nodes[0].tree.nodes   
    })
  }

})  