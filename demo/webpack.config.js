const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const parts = require("./webpack.parts");

const commonConfig = merge({
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack demo"
		})
	]
});

const productionConfig = merge(
	parts.extractCSS({
		use: "css-loader"
	})
);

const developmentConfig = merge(parts.devServer(), parts.loadCSS());

module.exports = mode => {
	if (mode === "production") {
		return merge(commonConfig, productionConfig, { mode: "none" });
	}

	return merge(commonConfig, developmentConfig, { mode });
};
