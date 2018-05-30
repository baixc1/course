Component({
  properties: {
    title: String,
    type: String,
    bg: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: 'jinhao'
    }
  },
  methods:{
    more(){
      this.triggerEvent('more',{a:1})
    }
  }
})