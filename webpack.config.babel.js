import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const PRODUCTION = process.env.NODE_ENV === 'production'
const DEFINE_PRODUCTION = new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' }})
const EXTRACT_CSS = new ExtractTextPlugin('css/app.css')
const COMMONS_CHUNK = new webpack.optimize.CommonsChunkPlugin({ name: [ 'vendor', 'manifest' ] })
const UGLIFY = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, output: { comments: false }})
const STATS_ANALYZER = new BundleAnalyzerPlugin({ generateStatsFile: true })

const CONFIG = {
	entry: {
		app: __dirname + '/resources/assets/js/app.js',
		vendor: ['vue', 'vue-resource', 'vue-router', 'vuex', 'hammerjs', 'marked']
	},
	output: {
		path: __dirname + '/public',
		publicPath: 'http://localhost:8088/'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.json$/, loader: 'json-loader' },
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: 'images/[name].[ext]?[hash]'
				}
			},
			{ test: /\.(eot|otf|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]' }
		]
	},
	resolve: {
		extensions: [ '.js', '.vue', '.scss' ],
		modules: [ 'node_modules', __dirname + '/resources/assets/' ]
	},
	plugins: [
		COMMONS_CHUNK
	],
	devServer: {
		historyApiFallback: true
	}
}

if (PRODUCTION) {
	CONFIG.output.filename = `js/[name].js`
	CONFIG.devtool = '#cheap-module-source-map'
	CONFIG.output.publicPath = '/'
	CONFIG.module.loaders = (CONFIG.module.loaders || []).concat([
		{
			test: /\.scss$/,
			loader: EXTRACT_CSS.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader!postcss-loader!sass-loader'
			})
		}
	])
	CONFIG.plugins = (CONFIG.plugins || []).concat([
		DEFINE_PRODUCTION,
		EXTRACT_CSS,
		UGLIFY,
		STATS_ANALYZER
	])
}
else {
	CONFIG.output.filename = `js/[name].js`
	CONFIG.devtool = '#cheap-module-eval-source-map'
	CONFIG.module.loaders = (CONFIG.module.loaders || []).concat([
		{
			test: /\.scss$/,
			loader: 'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap'
		}
	])
}

export default CONFIG
