Component({
  properties: {
    title: String,
    bg: {
      type: String,
      value: ''
    },
    leftIcon: {
      type: String,
      value: ''
    },
    rightIcon: {
      type: String,
      value: ''
    }
  },
  methods:{
    more(){
      this.triggerEvent('more',{a:1})
    }
  }
})