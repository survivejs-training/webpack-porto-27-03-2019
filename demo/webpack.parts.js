const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.extractCSS = ({ include, exclude, use = [] }) => {
	// Output extracted CSS to a file
	const plugin = new MiniCssExtractPlugin({
		filename: "[name].css"
	});

	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include,
					exclude,

					use: [MiniCssExtractPlugin.loader].concat(use)
				}
			]
		},
		plugins: [plugin]
	};
};

exports.devServer = ({ host, port } = {}) => ({
	devServer: {
		stats: "errors-only",
		host, // Defaults to `localhost`
		port, // Defaults to 8080
		overlay: true
	}
});

exports.loadCSS = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				include,
				exclude,

				use: ["style-loader", "css-loader"]
			}
		]
	}
});
