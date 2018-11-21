const pageData = {};

for (let i = 1; i < 5; ++i) {
  pageData[`slider${i}change`] = (e) => {
    console.log('slider' + i + '发生change事件，携带值为', e.detail.value);
  };
}
Page(pageData);
