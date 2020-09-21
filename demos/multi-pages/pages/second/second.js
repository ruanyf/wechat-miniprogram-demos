Page({
  data: {
    name: '张三'
  },
  back: function (event) {
    wx.navigateBack({
      url: '../home/home'
    });
  }
});