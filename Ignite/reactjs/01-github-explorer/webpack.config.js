const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'eval-source-map' : 'source-map',
	//aqui pode alterar o caminho do novo arquivo de entrada
	//entry: './src/index.js',
	//ou
	entry: path.resolve(__dirname, 'src', 'index.jsx'),

	//Aqui pode alterar o caminho de saída
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js',
	},

	//ou
	/*output: { 
		path: path.resolve(__dirname, 'dist'), 
		filename: 'bundle.js' 
	},*/

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	devServer: {
		static: path.resolve(__dirname, 'public'),
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
	],

	module: {
		// Aplique as seguintes regras
		rules: [
			{
				// Nos arquivos que terminam ($) com .js
				test: /\.jsx?$/,
				// Não procure nada em node_modules
				exclude: /node_modules/,
				// Use o seguinte:
				use: {
					// Babel
					loader: 'babel-loader',
					//*********************************
					// Com as opções padrões para JavaScript  COM REACT
					//options: {
					//	presets: ['@babel/preset-react'],
					//},
				},
			},
			{
				// Nos arquivos que terminam ($) com .css
				test: /\.s?css$/,
				// Não procure nada em node_modules
				exclude: /node_modules/,
				// Use o seguinte:
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
