const axios = require('axios');

//curl 'https://api.dialogflow.com/v1/query?v=20170712&query=hello&lang=en&sessionId=f771ac2c-85ab-0aa0-d05e-cf2c7cfed6cd&timezone=Europe/Vienna' -H 'Authorization:Bearer 86e4be9d61454f1ba520e224736a793f'

module.exports = {
	parse: function(query) {
		return axios({
			method: 'POST',
			url: process.env.DIALOGFLOW_API_URL + 'query?v=20170712',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			headers: {
				Authorization: `Bearer ${process.env.DIALOGFLOW_CLIENT_ACCESS_TOKEN}`,
			},
			data: {
				query: query,
				lang: 'en-US',
				sessionId: 'splat-tim',
			},
		})
			.then(response => {
				return response.data.result.fulfillment.speech;
			})
			.catch(error => {
				console.log(error);
				throw error;
			});
	},
};
