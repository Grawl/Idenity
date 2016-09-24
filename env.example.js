// copy this file to env.js
module.exports = {
	browsersync: {
		proxy: "localhost:3000"
	},
	ftp: {
		destServe: "",
		destProduction: "",
		options: {
			host: "",
			user: "",
			password: "",
			parallel: ""
		}
	},
	githubPages: {
		options: {
			remoteUrl: "",
			origin: "",
			branch: "",
			cacheDir: "",
			push: "",
			force: "",
			message: ""
		}
	},
	surge: {
		options: {
			project: "",
			domain: ""
		}
	}
}
