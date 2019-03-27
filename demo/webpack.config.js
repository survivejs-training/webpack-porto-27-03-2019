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

const productionConfig = merge({});

const developmentConfig = merge(parts.devServer());

module.exports = mode => {
	if (mode === "production") {
		return merge(commonConfig, productionConfig);
	}

	return merge(commonConfig, developmentConfig);
};
