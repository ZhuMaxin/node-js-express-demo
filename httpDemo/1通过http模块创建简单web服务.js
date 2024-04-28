// import http from 'http';
var http = require('http')

var app = http.createServer((req,res)=>{
  res.writeHead(200,{"ContentType":"text/plain"})
  res.end('XXXXXXXXXXX')
})

// 监听端口启动服务
app.listen(6455,"localhost")
console.log('http://localhost:6455');