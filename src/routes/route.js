module.exports = function(app) {
	
	var api = app.api.apiData

	app.route('/v1/api')
		.get(api.list)

};