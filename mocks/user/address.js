const Mock = require('mockjs')
const Random = Mock.Random
const handleRespond = require('../../utils/handleRespond')

// 扩展 Mock 模板
let hasDefault = false
Random.extend({
	// 规则：默认地址只有一个
	setDefault: function () {
		let selected = 0
		if (!hasDefault) {
			const values = [1, 0]
			selected = this.pick(values)
			if (selected === 1) {
				hasDefault = true
			}
		}
		return selected
	}
})

// 地址列表查询接口
const getByOpenId = (req, res) => {
	// 获取请求参数
	const { openId, pageNum, pageSize } = req.query
	// 模拟的数据集
	const list = []
	// 模拟总条数
	const count = 20
	// 生成列表数据
	for (let i = 0; i < count; i++) {
		list.push(
			Mock.mock({
				id: '@increment',
				openId: 'oUaHd4rKL4LcI22KvyBfXfc1ObcQ',
				province: '@province',
				city: '@city',
				county: '@county',
				detail: '某街某巷12号9楼506室',
				setDefault: '@setDefault',
				name: '麦某某',
				tel: '13800000000',
				notes: null,
				company: '中国宇宙银行有限公司',
			})
		)
	}
	// 分页
	const start = (pageNum - 1) * pageSize
	const end = pageNum * pageSize
	const pageList = list.slice(start, end)

	handleRespond.successJson(res, pageList)
}

// 新增地址
const save = (req, res) => {
	// 获取请求参数
	const {
		province,
		city,
		county,
		detail,
		openId,
		set_default,
		name,
		tel,
		company
	} = req.body

	// 模拟请求忽略参数校验，可自行添加

	// 模拟身份验证
	if (!openId || openId.length < 6) {
		handleRespond.failJson(res, 401, '验证未通过！')
		return
	}

	// 返回成功
	handleRespond.successJson(res)
}

module.exports = {
	getByOpenId,
	save
}
