const todoArray = [];

function getStorage(pageObj) {
  wx.getStorage({
    key: 'todos',
    complete: res => {
      console.log(res);
      if (!res.data) {
        pageObj.setData({todos: ['起床', '洗脸', '早餐']});
        return;
      }
      pageObj.setData({todos: res.data});
    }
  })
}

Page({
  data: {
    todos: [],
    todoInput: ''
  },
  onLoad: function () {
    getStorage(this);
  },
  inputHandler: function(event){
    this.setData({
      todoInput: event.detail.value || ''
    })
  },
  createItem: function (event) {
    const newTodo = this.data.todoInput.trim();
    if (!newTodo) return;
    const todoArray = [...this.data.todos, newTodo];
    wx.setStorage({
      key: 'todos',
      data: todoArray,
      success: () => {
        getStorage(this);
      },
      fail: (res) => {
        console.log(res)
      }
    });
  }
});