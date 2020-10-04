Page({
  data: {
    name: '张三'
  },
  buttonHandler(event) {
    this.setData({
      name: '李四'
    }, function () {
      wx.showToast({
        title: '操作完成',
        duration: 700
      });
    });
  }
});