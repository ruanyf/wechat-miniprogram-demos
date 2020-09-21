Page({
  data: {
    name: '张三'
  },
  back: function (event) {
    wx.redirectTo({
      url: '../home/home'
    });
  }
});