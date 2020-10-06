Page({
  data: { items: [] },
  onLoad() {
    const that = this;
    wx.request({
      url: 'http://localhost:3000/items',
      success(res) {
        that.setData({ items: res.data });
      }
    });
  }
});