const fs = require('fs')
const path = require('path')

// 静态资源请求
const getImg = (req, res) => {
	// 获取请求的文件名
	const tem = req.url.split('/')
	const filename = tem[tem.length - 1]
	// 请求的文件在服务器的路径
	const filePath = path.resolve(__dirname, `../../static/images/${filename}`)
	try {
		// 判断文件是否存在
		fs.statSync(filePath)
		// 创建文件可读流
		const cs = fs.createReadStream(filePath)
		cs.on('data', chunk => {
				res.write(chunk)
		})
		cs.on('end', () => {
				res.status(200)
				res.end()
		})
	} catch (e) {
		res.status(404).json('Not Found')
	}
}

module.exports = {
	getImg
}