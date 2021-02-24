var serve = require('serve')
var path = require('path')
serve(path.resolve(process.cwd(), '.'),
{
	port: 5500,
	ignore: ['node_modules']
})
