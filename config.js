const fs = require('fs');

const config = {
	maxFileSize: '50mb',
	apiVersion: 'v1',
	serverPort: 5000,
	dataBaseName: 'VideoClub',

	dir: {
		logs: 'logs',
		publicAccess: 'assets',
		view: 'view'
	},

	counterId: {
		user: 'userCode',
		movie: 'movieId',
	},

	appCodes: {
		user: 'demoUser',
		movie: 'demoMovie',
	},
};

function init() {
	for(let prop in config.dir) {
		if (!fs.existsSync(config.dir[prop])){
	    fs.mkdirSync(config.dir[prop]);
		}

		config.dir[prop] = `${__dirname}/${config.dir[prop]}`;
	}

	config.dir.project = __dirname;
}


init();

module.exports = config;
