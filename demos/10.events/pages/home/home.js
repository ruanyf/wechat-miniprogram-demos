Page({
  data: {
    name: '张三'
  },
  buttonHandler(event) {
    this.setData({
      name: '李四'
    });
  }
});