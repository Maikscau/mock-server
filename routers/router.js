const address = require('../mocks/user/address')
const static = require('../mocks/static/static')

module.exports = function (app) {
	app.get('/wx/sys/addresses/getByOpenId', address.getByOpenId)
	app.post('/wx/sys/addresses/save', address.save)
	app.get('/wx/sys/images/*', static.getImg)
}