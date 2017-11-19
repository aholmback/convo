'use strict';

const fractal = module.exports = require('@frctl/fractal').create();

fractal.set('project.title', 'Convo Component Library');
fractal.components.set('path', __dirname + '/components');
fractal.docs.set('path', __dirname + '/docs');
fractal.web.set('static.path', __dirname + '/public');
