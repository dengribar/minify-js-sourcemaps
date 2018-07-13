Package.describe({
  name: 'zodern:standard-minifier-js',
  version: '2.6.0',
  summary: 'Javascript minifier that creates production sourcemap',
  documentation: '../readme.md',
  git: 'https://github.com/zodern/minify-js-sourcemaps.git'
});

Package.registerBuildPlugin({
  name: 'minifyStdJS',
  use: [
    'zodern:minifier-js@2.5.0',
    'babel-compiler@6.18.2 || 7.0.0',
    'ecmascript@0.8.0'
  ],
  sources: [
    'plugin/minify-js.js',
    'plugin/stats.js',
    'plugin/visitor.js',
    'plugin/utils.js',
  ],
  npmDependencies: {
    'concat-with-sourcemaps': '1.0.4'
  }
});

Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});