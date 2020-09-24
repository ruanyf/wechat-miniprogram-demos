
$ npx json-server ./server/db.json

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