//非页面data数据
let screenWidth = 0     //屏幕宽
let screenRate = 1      //屏幕宽比标准宽(375px)
let pageImgMaxHeight = 0 //页面展示图片的最大高度（375屏幕下的px值，需转化）
let moveObj = null     //移动对象位置信息
let moveViewWidth = 0  //滑块宽度，单位px
let moveViewHeight = 0
let moveViewLeft = 0    //移动对象的左侧最小值
let moveViewTop = 0
let moveViewBottom = 0 //最大滑动高度
let moveViewRight = 0   //最大滑动宽度
let isSettingData = false     //是否正在setData数据

Page({
  data: {
    url: 'https://img.alicdn.com/tfs/TB1GvVMj2BNTKJjy0FdXXcPpVXa-520-280.jpg',  //被修改的图片
    url1: '/images/1.png',
    url2: '/images/2.png',
    showImgWidth: 0,    //显示图片的宽
    showImgHeight: 0,
    moveViewWidthRpx: 100,    //滑块宽，单位rpx
    moveViewHeightRpx: 100,
    rotateAngle: 0,       //旋转角度
    zoomMul: 1,           //缩放倍数
    translateX: 0,      //偏移
    translateY: 0,
    originX: 0,       //transform基点
    originY: 0,
  },
  onLoad(){
    this.getPhoneInfo()
  },
  //获取手机信息
  getPhoneInfo(){
    let d = this.data
    dd.getSystemInfo({
      success: (res) => {
          screenWidth = res.screenWidth
          screenRate = screenWidth / 750
          pageImgMaxHeight = 460 * screenRate
          moveViewWidth = d.moveViewWidthRpx * screenRate * d.zoomMul
          moveViewHeight = d.moveViewHeightRpx * screenRate * d.zoomMul
      }
    })
  },
  // 拖动文字-触摸动作开始
  touchStart(){
    moveObj = null        //清空触摸位置
  },
  //滑块平移、缩放、旋转
  touchMove(e){
    if(isSettingData){
      return
    }
    let d = this.data
    let translateX = d.translateX               
    let translateY = d.translateY
    let curMoveObj = e.changedTouches[0]        //当前滑动对象信息
    let moveType = e.target.dataset.moveType    //滑动对象，'arrow'-箭头 ，'view'-滑块
    
    if(this.isWithinArea(curMoveObj)){
      if(!moveObj){
        moveObj = curMoveObj
      }else{
        if(moveType == 'view'){
          translateX += curMoveObj.clientX - moveObj.clientX    //x偏移
          translateY += curMoveObj.clientY - moveObj.clientY
    
          isSettingData = true
          this.setData({
            translateX: translateX,
            translateY: translateY,
            originX: translateX + moveViewWidth / 2,
            originY: translateY + moveViewHeight / 2,
          },()=>{
            isSettingData = false
            moveObj = curMoveObj
          })
        } else {
          let referX = translateX + moveViewWidth/2     //参照点x坐标（滑块中心点），点A
          let referY = translateY + moveViewHeight/2
          let clientX = moveObj.clientX           //点B
          let clientY = moveObj.clientY
          let curClientX = curMoveObj.clientX     //点C
          let curClientY = curMoveObj.clientY

          //计算图片缩放倍数
          let x1 = clientX - referX   //A、B点x轴差
          let y1 = clientY -referY
          let d1 = Math.sqrt(x1*x1 + y1*y1)   //A、B点距离
          let angle1 = this.calAngle(x1, y1)     //A、B连线与水平向右的线的夹角

          let x2 = curClientX - referX  //A、C
          let y2 = curClientY - referY
          let d2 = Math.sqrt(x2*x2 + y2*y2)
          let angle2 = this.calAngle(x2, y2)

          let zoomMul = d.zoomMul * d2 / d1  //缩放倍数
          let rotateAngle = d.rotateAngle + (angle2 - angle1) * 180 / Math.PI   //旋转角度，单位deg

          isSettingData = true
          this.setData({
            zoomMul: zoomMul,
            rotateAngle: rotateAngle
          },()=>{
            moveObj = curMoveObj
            isSettingData = false
          })
        }
      }
    }
  },
  //根据两点坐标差计算角度
  calAngle(x,y) {
    let PI = Math.PI
    if(x == 0){
      if(y > 0) {
        return PI / 2
      } else {
        return 3 * PI / 2
      }
    } else {
      let angle = Math.atan(y/x)
      
      if(x < 0) {   //三，二
        return angle + PI
      } else {
        if(y > 0) {   //一
          return angle
        } else if(y < 0) {   //第四象限
          return angle + 2 * PI
        } 
      } 
    }
  },
  //计算元素是否在area内
  isWithinArea(curMoveObj){
    let [x1,y1,x2,y2,x,y] = [moveViewLeft,moveViewTop,moveViewRight,moveViewBottom,curMoveObj.clientX,curMoveObj.clientY]
    return x1 <= x && x <= x2 && y1 <= y && y <= y2
  },
  //需加字的图片加载完成
  modifyImgLoad(e){
    let detail = e.detail
    let originalImgWidth = detail.width     //原图宽，单位px
    let originalImgHeight = detail.height

    let originalRate = originalImgWidth / originalImgHeight   //原始图片宽高比
    let wrapRate = screenWidth / pageImgMaxHeight         //屏幕宽比230px的对应值

    let showImgWidth = 0      //页面展示的图片宽度
    let showImgHeight = 0
    if (originalRate > wrapRate) {    //长图
      showImgWidth = screenWidth
      showImgHeight = screenWidth / originalRate
    } else {      //宽图
      showImgWidth = pageImgMaxHeight * originalRate
      showImgHeight = pageImgMaxHeight
    }
    
    moveViewLeft = (screenWidth - showImgWidth) / 2
    moveViewTop = (pageImgMaxHeight - showImgHeight) /2
    moveViewBottom = showImgHeight + moveViewTop
    moveViewRight = showImgWidth + moveViewLeft
  
    this.setData({
      translateX: moveViewLeft,
      translateY: moveViewTop,
      originX: moveViewLeft + moveViewWidth / 2,
      originY: moveViewTop + moveViewHeight / 2,
      showImgWidth: showImgWidth,
      showImgHeight: showImgHeight
    })
  },
  //生成图片
  generate(){
    let d = this.data
    let url = d.url
    let context = dd.createCanvasContext('myCanvas')
    let imgRateKuang = 0.8
    let kuangBorder = 0.1

    context.drawImage(url,0,0,d.showImgWidth,d.showImgHeight)

    context.save()
    let newOriginX = d.originX - moveViewLeft   //画布旋转中心
    let newOriginY = d.originY - moveViewTop

    context.translate(newOriginX,newOriginY)    //旋转中心
    context.scale(d.zoomMul * 0.8,d.zoomMul * 0.8)
    context.rotate(d.rotateAngle * Math.PI / 180)
    context.drawImage(d.url1,d.translateX - moveViewLeft - newOriginX,d.translateY-moveViewTop-newOriginY,moveViewWidth,moveViewHeight)

    context.restore()
    context.draw()
    setTimeout(()=>{
      context.toTempFilePath({
        success(res){
          console.log(res)
          return
          dd.previewImage({
            urls: [res.apFilePath]
          })
          dd.saveImage({
            url: res.apFilePath,
            success(){
              
            },
            complete(data){
              console.log(data)
              // dd.alert({
              //   title: JSON.stringify(data)
              // })
            }
          })
        }
      })
    },100)
    
  },
});
