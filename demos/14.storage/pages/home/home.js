Page({
  data: {
    items: [],
    inputValue: ''
  },
  inputHandler(event) {
    this.setData({
      inputValue: event.detail.value || ''
    });
  },
  buttonHandler(event) {
    const newItem = this.data.inputValue.trim();
    if (!newItem) return;
    const itemArr = [...this.data.items, newItem];
    wx.setStorageSync('items', itemArr);
    this.setData({ items: itemArr });
  },
  onLoad() {
    const itemArr = wx.getStorageSync('items') || [];
    this.setData({ items: itemArr });
  }
});