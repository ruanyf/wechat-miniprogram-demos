Page({
  data: {
    name: ''
  },
  buttonHandler(event) {
    if (!event.detail.userInfo) return;
    this.setData({
      name: event.detail.userInfo.nickName
    });
  }
});