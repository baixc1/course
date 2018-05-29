Component({
  properties: {
    title: String,
    type: String,
  },
  methods:{
    more(){
      this.triggerEvent('more',{a:1})
    }
  }
})