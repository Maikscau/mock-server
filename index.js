const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// 解析请求体中间件
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 设置静态资源托管
app.use(express.static('static'))

// 引入路由文件
require('./routers/router')(app)

// 指定端口
const PORT = 8083

app.listen(PORT, () => {
  console.log(`服务器启动，运行为http://localhost:${PORT}`)
})

