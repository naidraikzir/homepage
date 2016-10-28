var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: __dirname + '/resources/assets/js/app.js',
	output: {
		path: __dirname + '/public',
		publicPath: 'http://localhost:8080/',
		filename: 'js/app.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
			{ test: /\.vue$/, loader: 'vue' },
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: 'images/[name].[ext]?[hash]'
				}
			},
			{ test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=fonts/[name].[ext]' }
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.scss'],
		modules: [ __dirname + '/resources/assets/', 'node_modules' ]
	},
	plugins: [
		new ExtractTextPlugin('css/app.css'),
	],
	devServer: {
		historyApiFallback: true
	}
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#cheap-module-source-map'
	module.exports.output.publicPath = '/'
	module.exports.module.loaders = (module.exports.module.loaders || []).concat([
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style',
				loader: 'css!sass'
			})
		}
	])
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.DedupePlugin()
	])
}
// process.env.NODE_ENV === 'development'
else {
	module.exports.devtool = '#cheap-module-eval-source-map'
	module.exports.module.loaders = (module.exports.module.loaders || []).concat([
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader?sourceMap!sass-loader?sourceMap'
			})
		}
	])
}
