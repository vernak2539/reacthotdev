const express = require('express');
const path = require('path');

const app = express();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const serveStatic = require('serve-static');

app.use(require('morgan')('short'));

app.use(serveStatic(path.resolve(__dirname, 'node_modules', '@salesforce-ux', 'design-system')));

app.use(
	require('webpack-dev-middleware')(compiler, {
		hot: true,
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	})
);

app.use(
	require('webpack-hot-middleware')(compiler, {
		log: console.log,
		path: '/__webpack_hmr',
		heartbeat: 2000
	})
);
app.get('/sample.json', (req, res) => {
	res.json({
		data: [{ id: 1 }, { id: 2 }]
	});
});

app.get('/', (req, res) => {
	res.sendFile(path.join(`${__dirname}/index.html`));
});

app.listen(4000, () => console.log('started on 4000'));
