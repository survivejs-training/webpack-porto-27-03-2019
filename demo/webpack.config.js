const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const parts = require("./webpack.parts");
const path = require("path");

const PATHS = {
	app: path.join(__dirname, "src")
};

const commonConfig = merge(
	{
		plugins: [
			new HtmlWebpackPlugin({
				title: "Webpack demo"
			})
		]
	},
	parts.loadJavaScript({ include: PATHS.app })
);

const productionConfig = merge(
	parts.extractCSS({
		use: "css-loader"
	})
);

const developmentConfig = merge(parts.devServer(), parts.loadCSS());

module.exports = mode => {
	if (mode === "production") {
		return merge(commonConfig, productionConfig, { mode });
	}

	return merge(commonConfig, developmentConfig, { mode });
};
