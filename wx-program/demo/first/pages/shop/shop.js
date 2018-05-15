Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    curIndex: 0,
    curList: [],
    menu: {
      imgUrls: [
        'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1PlmNLVXXXXXEXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1RN0HMFXXXXXNXpXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://gw.alicdn.com/tps/TB1exaOLVXXXXXeXFXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://img.alicdn.com/tps/TB1GzMJLXXXXXXoXXXXXXXXXXXX-183-129.png',
        'http://gw.alicdn.com/tps/i3/TB1Ewu2KVXXXXXkapXXN4ls0XXX-183-129.png',
        'http://gw.alicdn.com/tps/TB1cniBJpXXXXataXXXXXXXXXXX-183-129.png?imgtag=avatar',
        'http://img.alicdn.com/tps/TB1caopLVXXXXaDaXXXXXXXXXXX-183-129.png',
        'http://gw.alicdn.com/tps/i1/TB1c1FMIpXXXXawXpXXN4ls0XXX-183-129.png?imgtag=avatar'
      ],
      descs: [
        '聚划算',
        '天猫',
        '天猫国际',
        '外卖',
        '天猫超市',
        '充值中心',
        '阿里旅行',
        '领金币',
        '到家',
        '分类'
      ]
    }  
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
        console.log(res)
        that.setData({
          navLeftItems: res.data,
          list: res.data[that.data.curIndex].tree.nodes[0].tree.nodes,
          navRightItems: res.data
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