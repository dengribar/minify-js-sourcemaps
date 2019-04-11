Package.describe({
  name: 'zodern:standard-minifier-js',
  version: '4.0.0-beta.1',
  summary: 'Javascript minifier that creates production sourcemap',
  documentation: '../readme.md',
  git: 'https://github.com/zodern/minify-js-sourcemaps.git'
});

Package.registerBuildPlugin({
  name: 'minifyStdJS',
  use: [
    'zodern:minifier-js@3.0.0',
    'babel-compiler@6.18.2 || 7.0.0',
    'ecmascript@0.7.0',
    'zodern:caching-minifier@0.1.0'
  ],
  sources: [
    'plugin/minify-js.js',
    'plugin/stats.js',
    'plugin/visitor.js',
    'plugin/utils.js',
  ],
  npmDependencies: {
    'concat-with-sourcemaps': '1.0.4',
  }
});

Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});
