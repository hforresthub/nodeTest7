const fs = require('fs')

fs.readFile('./file.json', (err, data) => {
	if (err) {
		// error handling
		console.log(err);
		return
	}

	// handle data normally if no errors
	console.log(JSON.parse(data).favGames);
})

let done = false

const isComplete = new Promise((resolve, reject) => {
	if (done) {
		const workDone = "The work has completed"
		resolve(workDone)
	}
	else {
		const why = "The work has not yet completed"
		reject(why)
	}
})

const checkCompleteness = () => {
	isComplete
		.then(ok => {
			console.log(ok);
		})
		.catch(err => {
			console.error(err);
		})
}

checkCompleteness()

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

getFile('./file.json')
	.then(data => console.log(JSON.parse(data)))
	.catch(err => console.error(err))