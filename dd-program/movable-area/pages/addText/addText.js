//非页面data数据
let originalImgWidth = 0    //原图宽，单位px
let originalImgHeight = 0 
let pageImgWidth = 0      //页面展示图片的宽
let pageImgHeight = 0
let screenWidth = 0     //屏幕宽
let screenRate = 1      //屏幕宽比标准宽(375px)
let pageImgMaxHeight = 0 //页面展示图片的最大高度（375屏幕下的px值，需转化）
let moveObj = null     //移动对象位置信息
let moveViewWidth = 100  //移动对象的宽，单位px
let moveViewHeight = 40
let moveViewLeft = 0    //移动对象的左侧最小值
let moveViewTop = 0
let top = 0           //滑块左上角坐标
let left = 0
let moveViewMaxHeight  //最大滑动高度
let moveViewMaxWidth    //最大滑动宽度
let inputValue       //input组件值

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
    url: 'https://img.alicdn.com/tfs/TB1GvVMj2BNTKJjy0FdXXcPpVXa-520-280.jpg',  //被修改的图片
    left: 0,
    top: 0,
    showImgWidth: 0,    //显示图片的宽
    showImgHeight: 0,
    focus: false,   //是否获取了焦点
    isShowInput: true,    //隐藏输入框
    textValue: '请输入文字',    //text组件值
    inputValue: '',       //input值（页面显示）
  },
  // 拖动文字-触摸动作开始
  touchStart(){
    moveObj = null        //清空触摸位置
  },
  //拖动文字-触摸后移动
  touchMove(e){
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
      if(d.top >= moveViewTop && d.top <= moveViewMaxHeight){    //纵坐标范围
        if(top > moveViewMaxHeight){
          top = moveViewMaxHeight
        }
        if(top < moveViewTop){
          top = moveViewTop
        }
        this.setData({
          top: top,
        })
        moveObj.clientY = curMoveObj.clientY
      }
      if(d.left >= moveViewLeft && d.left <= moveViewMaxWidth){   //实际横坐标范围
        if(left > moveViewMaxWidth){
          left = moveViewMaxWidth
        }
        if(left < moveViewLeft){
          left = moveViewLeft
        }
        this.setData({
          left: left
        })
        moveObj.clientX = curMoveObj.clientX
      }
    }
  },
  //需加字的图片加载完成
  modifyImgLoad(e){
    let detail = e.detail
    originalImgWidth = detail.width
    originalImgHeight = detail.height

    let originalRate = originalImgWidth / originalImgHeight   //原始图片宽高比
    screenRate = screenWidth / pageImgMaxHeight         //屏幕宽比230px的对应值

    let showImgWidth = 0      //页面展示的图片宽度
    let showImgHeight = 0
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
      top: moveViewTop,
      showImgWidth: showImgWidth,
      showImgHeight: showImgHeight
    })

    left = moveViewLeft
    top = moveViewTop

    moveViewMaxHeight = showImgHeight + moveViewTop - moveViewHeight
    moveViewMaxWidth = showImgWidth + moveViewLeft - moveViewWidth
  },
  //input失去焦点
  bindBlur(){
    let textValue = inputValue || '请输入文字'
    this.setData({
      isShowInput: false,
      textValue: textValue,
      inputValue: inputValue,
      focus: false
    }) 
  },
  //点击文字
  bindTextTap(){
    this.setData({
      isShowInput: true
    },()=>{
      this.setData({
        focus: true
      })
    })
  },
  //input输入
  bindInput(e){
    inputValue = e.detail.value //输入值
  },
  //生成图片
  generate(){
    let d = this.data
    let url = d.url
    let context = dd.createCanvasContext('myCanvas')
    context.drawImage(url,0,0,d.showImgWidth,d.showImgHeight)

    context.setFontSize(20)
    context.setTextBaseline('top')
    context.fillText(inputValue,0,0)

    context.draw()
    setTimeout(()=>{
      context.toTempFilePath({
        success(res){
          console.log(res)
          dd.previewImage({
            urls: [res.apFilePath]
          })
          dd.saveImage({
            url: res.apFilePath,
            success(){
              
            },
            complete(data){
              console.log(data)
              dd.alert({
                title: JSON.stringify(data)
              })
            }
          })
        }
      })
    },100)
    
  },
});
