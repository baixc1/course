let moveObj = null
let isSettingData = false

Page({
  data: {
    x: -1100,
    list: [
      'https://static.biaoqingmm.com/news/2018062128260680753511e8975900163e12fd0e.gif',
      'https://news.static.dongtu.com/netpic/201806041114285YYX0KL64NX37D50_m_mc.gif',
      'https://news.static.dongtu.com/netpic/20180627164701EVMKIHLAAHZW46XV_m_mc.gif',
      'https://news.static.dongtu.com/netpic/201806271643187U8D6TW8XQWV83ZB_m_mc.gif',
      'https://news.static.dongtu.com/netpic/20180627164310X9G3YL7P9FRKL3KG_m_mc.gif',
    ],
    startX: -5,
    duration: 0,
    listLen: 0,
  },
  onLoad(){
    let list = this.data.list
    let len = list.length
    list = list.concat(list).concat(list)
    this.setData({
      list: list,
      listLen: len
    })
  },
  //触摸动作开始
  touchstart(){
    moveObj = null
  },
  //触摸后移动
  touchmove(e){
    let d = this.data
    let curMoveObj = e.touches[0]
    if(!moveObj){
      moveObj = curMoveObj
    } else {
      if(isSettingData){
        return 
      }
      isSettingData = true
      this.setData({
        x: d.x + curMoveObj.clientX - moveObj.clientX
      },()=>{
        isSettingData = false
        moveObj = curMoveObj
      })
    }
  },
  //触摸动作结束
  touchend(){
    let d = this.data
    this.calX()
    this.setData({
      x: d.startX * 220,
      duration: 0.3
    },()=>{
      if(d.startX ==  -2 * d.listLen || d.startX == 0){
        this.setData({
          x: -1100,
          startX: -5,
          duration: 0
        })
      } else {
        this.setData({
          duration: 0
        })
      }
    })

  },
  calX(){

    let d = this.data
    let base = 220
    let x = d.x - d.startX * base
    let offsetX = x/base
    console.log('offsetX:',offsetX)

    if(offsetX > 1){
      offsetX = 1
    }else if(offsetX < -1) {
      offsetX = -1
    } else if(offsetX > 1/3 || (offsetX < 0 && offsetX > -1/3)){
      offsetX = Math.ceil(offsetX) 
    } else {
      offsetX = Math.floor(offsetX)
    }
    d.startX += offsetX
    console.log(d.startX)
  }

})