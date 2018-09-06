Page({
  data: {
    value: 2  //?no effect
  },
  onChange(e) {
    console.log(e.detail.value);
    this.setData({
      value: e.detail.value,
    });
  },
  //?no effect
  add(){
    let val = this.data.value
    if(++val > 8){
      val = 0
    }
    this.setData({
      value: val,
    });
  }
});
