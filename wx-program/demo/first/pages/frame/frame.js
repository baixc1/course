Page({
  data:{
    subject: {
      list: [{
        text: '什么都挡不住',
        bigImg: '/images/components/dog.png',
        tag: 'nvshen'
      }, {
        text: '2',
        bigImg: '/images/components/dog.png',
        tag: 'nanshen'
      }, {
        text: '3',
        bigImg: '/images/components/dog.png',
        tag: 'nvshen'
      }, {
        text: '4',
        bigImg: '/images/components/dog.png',
        tag: 'nvshen'
      }],
      title: '搞笑萌宠秀',
      tag: '萌宠'
    },
    cList: ['c1', 'icon', 'c2', 'title1', 'hotImg', 'c3'],
    activeIndex: 4,
    tiyuList: []
  },
  onLoad(){
    this.calTiyu()
  },
  calTiyu(){
    var list = []
    var i = 6, j = 0
    while (j++ < i) {
      list.push({
        url: '/images/components/tiyu' + j + '.png'
      })
    }
    var me = this
   // list = list.concat(list).concat(list);   //制造重复数据
    setTimeout(function () {    //延时测试
      me.setData({
        tiyuList: list
      })
    }, 500)
  },
  change(e){
    var index = e.target.dataset.index;
    this.setData({
      activeIndex: index
    })
  },
  go(e){
    console.log(e.detail.target.dataset)
  },
  close(e) {
    console.log(e)
  },
  more(e) {
    console.log(e)
  }
})