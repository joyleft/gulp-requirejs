var router = require('koa-router')();

router.get('/', function *(next) {
	yield this.render('index', {
		content: 'requirejs nodejs sass jade'
	})
})