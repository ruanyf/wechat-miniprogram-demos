## 请求数据

```javascript
wx.request({
url :’http: //localhost ’,
data: {} ,
method :’GET ’, //II OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
II header ：｛｝，／／设置请求的header
success: function (res) {
console .log(res.data +’ success ’)
fail: function () {
console .l og (’ fail ’)
complete: function () {
console.log (’ complete ’) }
)
```

## 生命周期函数

显示消息提示框

wx .showToast

## 页面跳转

```javascript
//index.js
／／获取应用实例
var app = getApp ()
Page ( {
data : {
motto : ’ 欢迎’，
userlnfo: {}
／／事件处理函数
bindViewTap: function() {
  wx.navigateTo({
  url : ’.. /logs/logs ’
})
onLoad: function () {
  console.log ( ’ onLoad ’)
  var that = this
  ／／调用应用实例的方法获取全局数据
  app.getUserlnfo(function(userlnfo) {
     ／／更新数据
     that . setData({
     userlnfo:userlnfo
    })
   }) }
)
```

## 客户端数据储存

```javascript
//logs .js
var util =require ( ’.. I .. /utils/util. j s ’)
Page ( {
data : {
logs : []
onLoad : function () {
this.setData({
logs: (wx.getStorageSync (’ logs ’) I I []) . map (function (log) {
return util.formatTime(new Date(log))
})
}) }
)
```

## 官方UI库

https://github.com/Tencent/weui-wxss

## 官方组件库

https://developers.weixin.qq.com/miniprogram/dev/extended/weui/

## 微信登录

```javascript
loc : function () {
wx. login ( {
success: function(res) {
／／发起网络请求
wx . request({
url ： ’ https : //www . meim 工chao.com/bee/login ’ ，
data: {
code : res.code }
) }
}
)
```


https : //api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE
&grant_type=authorization_code

## 获取用户信息

```javascript
loc: function () {
wx. login ( {
success: function(res) {
console.log （” wx . login 接口生成的code code : ” +res . code) ;
／／发起网络请求
wx.request({
url : ’ https : //www . meimichao.com/bee/login ’,
data: {
code: res . code
success : function(res) {
wx.getUserinfo({
success: function(res) {
console.log （”用户信息：”＋ JSON.stringify(res));
fail: function(res) {
console.log （ ”用户信息fail ：川JSON . stringify(res)) ;
complete: function() {
II complete
})
157
```