Page({
  data: {
    name: '张三'
  },
  forward: function(event) {
    wx.navigateTo({
      url: '../second/second'
    });
  }
});