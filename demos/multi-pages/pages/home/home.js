Page({
  data: {
    name: '张三'
  },
  forward: function(event) {
    wx.redirectTo({
      url: '../second/second'
    });
  }
});