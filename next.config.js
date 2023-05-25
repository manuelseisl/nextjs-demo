const path = require("path");

const nextConfig = {
	webpack: (config, options) => {
		config.resolve.alias["@theme"] = path.join(__dirname, "./sass/_theme.scss");
		// config.resolve.alias["@utils"] = "@micado-digital/react-ui/sass/_utils.scss";

		return config;
	}
};

module.exports = nextConfig;
