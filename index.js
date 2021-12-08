const fs = require('fs')

const getFile = (filename) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, (err, data) => {
			if (err) {
				// error handling
				console.log("custom error");
				reject(err)
				return
			}

			// handle data normally if no errors
			resolve(data)
		})
	})
}

const status = response => {
	if (response) {
		console.log('We got a non null response', response);
		return Promise.resolve(response)
	}
	console.log('We did not get a non null response');
	return Promise.reject(new Error(response))
}

const json = ((data) => {
	try {
		const jsonData = JSON.parse(data)
		console.log('We parsed the data', jsonData);
		return jsonData
	} catch (err) {
		console.log('The data couldnt be parsed');
		return false
	}
})

const loggit = ((responseData) => {
	console.log('Here is the data from the file: ', responseData)
})

getFile('./file.json')
	.then(status)
	.then(json)
	.then(loggit)
	.catch(err => console.error(err))