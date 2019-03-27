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
	}),
	{
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: input => {
							return input.resource && input.resource.includes("node_modules");
						}, // /[\\/]node_modules[\\/]/,
						name: "vendor",
						chunks: "initial"
					}
				}
			}
		}
	}
);

const developmentConfig = merge(parts.devServer(), parts.loadCSS());

module.exports = mode => {
	if (mode === "production") {
		return merge(commonConfig, productionConfig, { mode });
	}

	return merge(commonConfig, developmentConfig, { mode });
};
