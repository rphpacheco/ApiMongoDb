const http = require('http')
const MongoClient = require('mongodb').MongoClient
const url = require(process.cwd()+'/config/database').uri

module.exports = function(app) {

	var api = {}

	api.list = function(req, res, next) {

		var skip = Number(req.headers.skip || 0)
		var limit = Number(req.headers.limit || 1)
		var max = 10000

		if (limit > max) {
			res.send('The limit per page is ' + max + ' records!');
			next()
		} else {
			MongoClient.connect(url, function(error, db) {
			if (error) throw error

			var query = {} // Inclua aqui seus parâmetros para consulta

			db.collection("metadata_document")
				.find(query)
				.skip(skip)
				.limit(limit)
				.toArray(function(error, result) {
					if (error) throw error
						res.status(200).json({data: result, count: result.length})
						db.close()
				})
			})
		}

	}

	return api
}