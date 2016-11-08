import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const config = {
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
		extensions: [ '.js', '.vue', '.scss' ],
		modules: [ 'node_modules', __dirname + '/resources/assets/' ]
	},
	plugins: [
		new ExtractTextPlugin('css/app.css'),
	],
	devServer: {
		historyApiFallback: true
	}
}

if (process.env.NODE_ENV === 'production') {
	config.devtool = '#cheap-module-source-map'
	config.output.publicPath = '/'
	config.module.loaders = (config.module.loaders || []).concat([
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style',
				loader: 'css!sass'
			})
		}
	])
	// http://vue-loader.vuejs.org/en/workflow/production.html
	config.plugins = (config.plugins || []).concat([
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
		new webpack.optimize.DedupePlugin(),
		new BundleAnalyzerPlugin({
			generateStatsFile: true
		})
	])
}
// process.env.NODE_ENV === 'development'
else {
	config.devtool = '#cheap-module-eval-source-map'
	config.module.loaders = (config.module.loaders || []).concat([
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader?sourceMap!sass-loader?sourceMap'
			})
		}
	])
}

export default config
