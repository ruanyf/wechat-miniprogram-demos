Page({
  data: {
    name: '张三'
  },
  buttonTapHandler: function(event) {
    this.setData({
      name: '李四'
    });
  }
});