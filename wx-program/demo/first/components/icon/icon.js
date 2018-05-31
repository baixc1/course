Component({
  properties: {
    type: String,
  },
  data:{
    url: ''
  },
  attached(){
    this.setData({
      url: '/images/components/' + this.properties.type + '.png'
    })
  },
})