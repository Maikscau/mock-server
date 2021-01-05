const fs = require('fs')
const path = require('path')

const getImg = (req, res) => {
	// 获取请求的文件名
	const tem = req.url.split('/')
	const filename = tem[tem.length - 1]

	const filePath = path.resolve(__dirname, `../../static/images/${filename}`)
	
	// 给客户端返回一个文件流

	//格式必须为 binary，否则会出错
	// 创建文件可读流
	const cs = fs.createReadStream(filePath);
	cs.on("data", chunk => {
			res.write(chunk);
	})
	cs.on("end", () => {
			res.status(200);
			res.end();
	})

}

module.exports = {
	getImg
}