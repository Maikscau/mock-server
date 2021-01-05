const address = require('../mocks/user/address')

module.exports = function (app) {
	app.get('/wx/sys/addresses/getByOpenId', address.getByOpenId)
	app.post('/wx/sys/addresses/save', address.save)
}