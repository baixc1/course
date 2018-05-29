Component({
  properties: {
    bigImg: String,
    text: String,
    index: Number,
    tag: String
  },
  data:{
    tagDict: {
      'nvshen': '女神',
      'nanshen': '男神'
    }
  },
  methods: {
    go(e){
      this.triggerEvent('go',e)
    },
    close(e) {
      this.triggerEvent('close', {index: this.data.index})
    },
  }
})