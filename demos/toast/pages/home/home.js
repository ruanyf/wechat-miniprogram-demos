Page({
  data: {
    name: '张三'
  },
  buttonTapHandler: function(event) {
    this.setData({
      name: '李四'
    }, function () {
      wx.showToast({
        title: '点击完成',
        duration: 700
      });
    });
  }
});