Component({
  properties: {
    type: String,
  },
  attached(){
    this.setData({
      type: '/images/components/' + this.properties.type + '.png'
    })
  },
})