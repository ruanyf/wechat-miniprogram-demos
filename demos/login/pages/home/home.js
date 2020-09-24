Page({
  data: {
    name: '张三'
  },

  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      },
      fail: res => {
        console.log('未授权');
      }
    })
  },
  bindGetUserInfo: function(e) {
    console.log(e.detail)
  },
  buttonTapHandler: function (event) {
    wx.login({
      success: res => {
        console.log(res.code);
        wx.getUserInfo({
  
          success: res => {
            console.log(res);
            this.setData({
              name: res.userInfo.nickName
            });
          }
        });
      },
      // withCredentials: true
        
    });

  }
});