var util = require('../../utils/util.js')
Page({
  data:{
    list: [],
    page: 1,
    pageNum: 15,
    state: true,
    refresh: true,
    slider: [],
    swiperCurrent: 0
  },
  onLoad(){
    this.loadData()   //加载更多或刷新
    var that = this;
    util.getSlideshow(function (data) {//获取轮播图的图片  
      that.setData({
        slider: data.data.slider
      })
    });
  },
  swiperChange: function (e) {    //轮播图滑动事件
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  chuangEvent: function (e) {     //点击小圆点，切花轮播图
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  loadData(){                 //pull down or up
    var d = this.data
    if(!d.state) return       //no data
    var me = this
    util.getSearchMusic('search1', d.page, d.pageNum, function (res) {
      var data = res.data.song      //Pending data  
      var sum = data.curnum + (data.curpage - 1) * d.pageNum
      if (sum <= data.totalnum) {     //Data is not empty
        var list = [];
        data.list.forEach(function (obj) {    //data reconstitution
          list.push(obj.albumid)
        })
        if(!d.refresh){
          list = d.list.concat(list)
        }
        me.setData({
          list: list
        })
        if(sum == data.totalnum){   //no data
          me.setData({
            state: false
          })
        }
      }else{
        me.setData({
          state: false
        })
      }
    })
  },
  onPullDownRefresh(){      //pull down
    this.data.state = true
    wx.showNavigationBarLoading()
    this.data.page = 1;
    this.data.refresh = true;
    this.loadData()
    wx.hideNavigationBarLoading()  
  },
  onReachBottom(){        //pull up
    if (this.data.state) {
      this.setData({
        page: this.data.page + 1,  // 每次触发上拉事件，把pageNum+1  
      });
      this.data.refresh = false;
      this.loadData();
    }  
  }
})