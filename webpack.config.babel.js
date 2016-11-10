import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const PRODUCTION = process.env.NODE_ENV === 'production'
const EXTRACT_CSS = new ExtractTextPlugin('css/app.css')

const CONFIG = {
	entry: {
		app: __dirname + '/resources/assets/js/app.js',
		vendor: ['vue', 'vue-resource', 'vue-router', 'vuex', 'hammerjs']
	},
	output: {
		path: __dirname + '/public',
		publicPath: 'http://localhost:8080/'
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
		EXTRACT_CSS,
		new webpack.optimize.CommonsChunkPlugin({
			name: [ 'vendor', 'manifest' ]
		})
	],
	devServer: {
		historyApiFallback: true
	}
}

if (PRODUCTION) {
	// CONFIG.output.filename = `js/[chunkhash].[name].js`
	CONFIG.output.filename = `js/[name].js`
	CONFIG.devtool = '#cheap-module-source-map'
	CONFIG.output.publicPath = '/'
	CONFIG.module.loaders = (CONFIG.module.loaders || []).concat([
		{
			test: /\.scss$/,
			loader: EXTRACT_CSS.extract({
				fallbackLoader: 'style',
				loader: 'css!postcss!sass'
			})
		}
	])
	CONFIG.plugins = (CONFIG.plugins || []).concat([
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
		new webpack.optimize.DedupePlugin(),
		new BundleAnalyzerPlugin({
			generateStatsFile: true
		})
	])
}
else {
	CONFIG.output.filename = `js/[name].js`
	CONFIG.devtool = '#cheap-module-eval-source-map'
	CONFIG.module.loaders = (CONFIG.module.loaders || []).concat([
		{
			test: /\.scss$/,
			loader: EXTRACT_CSS.extract({
				fallbackLoader: 'style',
				loader: 'css?sourceMap!postcss?sourceMap!sass?sourceMap'
			})
		}
	])
}

export default CONFIG
