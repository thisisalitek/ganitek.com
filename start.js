var serve = require('serve')
var path = require('path')

serve(path.resolve(process.cwd(), __dirname),
{
	port: 5200,
	ignore: ['node_modules']
})
