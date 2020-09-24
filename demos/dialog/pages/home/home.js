Page({
  data: {
    dialogShow: false,
    buttons: [{text: '取消'}, {text: '确定'}],
    response: ''
  },
  tapDialogButton(e) {
    const item = e.detail.item;
    console.log(item);
    if (item.text === '取消') {
      this.setData({
        dialogShow: false,
        response: '操作已取消'
      })
    } else {
      this.setData({
        dialogShow: false,
        response: '已确认操作'
      })
    }

  },
  buttonTapHandler: function(event) {
    this.setData({
      dialogShow: true
    });
  }
});