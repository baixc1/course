Page({
  data: {
    list: [],
    left: 0
  },
  onLoad(){
    setTimeout(()=>{
      this.setData({
        list: ['red','green','blue','yellow'],
        left: 200
      })
    },1000)
  }
})