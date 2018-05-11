// pages/components/components.js
Page({
  data: {
    navbar: ['view', 'scroller-view', 'swipe', 'icon', 'progress', 'video', 'switch', 'slider', 'radio', 'selector', 'input', 'checkbox', 'button'],
    currentTab: 8,
    views: [{ text: 'flex-direction: row', style: 'flex-direction:row' }, { text: 'flex-direction: column', style: 'height: 300px;flex-direction:column' }, { text: 'justify-content: flex-start', style: 'flex-direction:row;justify-content: flex-start' }, { text: 'justify-content: flex-end', style: 'flex-direction:row;justify-content: flex-end' }, { text: 'justify-content: center', style: 'justify-content: center' }, { text: 'justify-content: space-between', style: 'justify-content: space-between' }, { text: 'justify-content: space-around', style: 'justify-content: space-around' }, { text: 'align-items: flex-end', style: 'height: 200px;align-items: flex-end' }, { text: 'align-items: center', style: 'height: 200px;align-items: center' }, { text: 'align-items: flex-start', style: 'height: 200px;align-items: flex-start' }],
    colors: ['background: red', 'background: green', 'background: blue', 'background: yellow'],
    colors3: ['background: red', 'background: green', 'background: blue'],
    icons: [{ type: "success", size: "40" }, { type: "success_no_circle", size: "30" }, { type: "safe_success", size: "20" }, { type: "info", size: "30" }, { type: "info_circle", size: "40" }],
    radios: [{ name: 'Jave', value: 'Android', checked: 'true' }, { name: 'Object-C', value: 'IOS' }, { name: 'jsx', value: 'ReactNative' }, { name: 'js', value: 'WeChat' }, { name: 'Python', value: 'Web' }],
    selects: {
      list: ['Android', 'IOS', 'ReactNativ', 'WeChat', 'Web'],
      index: 0,
      time: '08:30',
      date: '2016-09-26',
    },
    phone: '',
    password: '',
    checkboxs: [
      { name: 'JAVA', value: 'Android', checked: 'true' },
      { name: 'Object-C', value: 'IOS' },
      { name: 'JSX', value: 'ReactNative' },
      { name: 'JS', value: 'wechat' },
      { name: 'Python', value: 'Web' }
    ]
  },
  onLoad(){
    this.setData({
      currentTab: this.data.navbar.length - 1
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  listenSwiper: function (e) {
    //console.log(e)
  },
  listenerSwitch: function (e) {
    console.log('switch类型开关当前状态-----', e.detail.value);
  },
  listenerCheckboxSwitch: function (e) {
    console.log('checkbox类型开关当前状态-----', e.detail.value)
  },
  listenerSlider: function (e) {
    console.log(e.detail.value);
  },
  listenerRadioGroup: function (e) {
    console.log(e);
  },
  listenerPickerSelected: function (e) {
    var index = 'selects.index'
    this.setData({
      [index]: e.detail.value
    })
  },
  listenerTimePickerSelected: function (e) {
    this.setData({
      'selects.time': e.detail.value,
    })
  },
  listenerDatePickerSelected: function (e) {
    this.setData({
      'selects.date': e.detail.value
    })
  },
  listenerPhoneInput: function (e) {
    this.data.phone = e.detail.value;

  },
  listenerPasswordInput: function (e) {
    this.data.password = e.detail.value;
  },
  listenerLogin: function () {
    console.log('手机号为: ', this.data.phone);
    console.log('密码为: ', this.data.password);
  },
  listenCheckboxChange: function (e) {
    console.log(e);
  },
})