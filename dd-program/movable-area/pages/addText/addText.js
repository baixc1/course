//非页面data数据
let isMoving = false    //是否正在拖动文字
let originalImgWidth = 0    //原图宽，单位px
let originalImgHeight = 0 
let pageImgWidth = 0      //页面展示图片的宽
let pageImgHeight = 0
let screenWidth = 0     //屏幕宽
let screenRate = 1      //屏幕宽比标准宽(375px)
let showImgWidth = 0      //页面展示的图片宽度
let showImgHeight = 0
let pageImgMaxHeight = 0 //页面展示图片的最大高度（375屏幕下的px值，需转化）
let moveObj = null     //移动对象位置信息
let moveViewWidth = 100  //移动对象的宽，单位px
let moveViewHeight = 100
let moveViewLeft = 0    //移动对象的左侧最小值
let moveViewTop = 0
let top = 0           //滑块左上角坐标
let left = 0

//获取系统信息-宽
dd.getSystemInfo({
  success: (res) => {
      screenWidth = res.screenWidth
      screenRate = screenWidth / 375
      pageImgMaxHeight = 230 * screenRate
  }
})

Page({
  data: {
    url: 'https://news.static.dongtu.com/toutiao/gif-sina-com-cn/1530038611/430439.lossy.gif',  //被修改的图片
    left: 0,
    top: 0,
  },
  //拖动文字-触摸动作开始
  touchStart(){
    isMoving = true
  },
  //拖动文字-触摸后移动
  touchMove(e){
    dd.stopPullDownRefresh()
    let d = this.data
    let curMoveObj = e.changedTouches[0]
    if(!moveObj){
      moveObj = curMoveObj
    }else{
      let clientX = moveObj.clientX
      let clientY = moveObj.clientY
      let curClientX = curMoveObj.clientX
      let curClientY = curMoveObj.clientY

      let moveX = curClientX - clientX
      let moveY = curClientY - clientY

      left += moveX
      top += moveY
      if(d.top >= moveViewTop && d.top <= showImgHeight + moveViewTop - moveViewHeight){    //纵坐标范围
        while(top < moveViewTop){    //newLeft和left可能相差过大
          top += 1
        }
        while(top > showImgHeight + moveViewTop - moveViewHeight){
          top -= 1
        }
        this.setData({
          top: top,
        })
        moveObj.clientY = curMoveObj.clientY
      }
      if(d.left >= moveViewLeft && d.left <= showImgWidth + moveViewLeft - moveViewWidth){   //实际横坐标范围
        while(left < moveViewLeft){    //newLeft和left可能相差过大
          left += 1
        }
        while(left > showImgWidth + moveViewLeft - moveViewWidth){
          left -= 1
        }
        this.setData({
          left: left
        })
        moveObj.clientX = curMoveObj.clientX
      }
      // this.setData({
      //   top: newTop,
      //     left: newLeft
      // })
      // moveObj = curMoveObj
    }
  },
  //拖动文字-触摸动作结束
  touchEnd(){
    isMoving = false
  },
  //拖动文字-触摸动作被打断，如来电提醒，弹窗
  touchCancel(){
    this.touchEnd()
  },
  //需加字的图片加载完成
  modifyImgLoad(e){
    let detail = e.detail
    originalImgWidth = detail.width
    originalImgHeight = detail.height

    let originalRate = originalImgWidth / originalImgHeight   //原始图片宽高比
    screenRate = screenWidth / pageImgMaxHeight         //屏幕宽比230px的对应值

    if (originalRate > screenRate) {    //长图
      showImgWidth = screenWidth
      showImgHeight = screenWidth / originalRate
    } else {      //宽图
      showImgWidth = pageImgMaxHeight * originalRate
      showImgHeight = pageImgMaxHeight
    }
    
    moveViewLeft = (screenWidth - showImgWidth) / 2
    moveViewTop = (pageImgMaxHeight - showImgHeight) /2
    this.setData({
      left: moveViewLeft,
      top: moveViewTop
    })
    left = moveViewLeft
    top = moveViewTop
  }
});
