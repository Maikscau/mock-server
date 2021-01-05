// 返回成功json数据
const successJson = (res, data = null) => {
	let count = 0
	if (data instanceof Array) {
		count = data.length
	}
	const result = {
		code: 0,
		count,
    data,
		i18nCode: null,
		msg: null,
		status: true,
  }

	res.status(200).json(result)
}

// 返回失败json数据
const failJson = (res, code, msg) => {
	const result = {
		code: 0,
		count: 0,
    data: null,
		i18nCode: null,
		msg,
		status: true,
  }

	res.status(code).json(result)
}

module.exports = {
	successJson,
	failJson
}