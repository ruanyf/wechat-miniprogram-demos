Page({
  data: {
    name: '张三'
  },
  onLoad: function () {
    wx.request({
      url: 'http://localhost:3000/posts', 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    })
  }
});