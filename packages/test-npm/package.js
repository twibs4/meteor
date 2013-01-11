Package.describe({
  summary: "Use NPM modules"
});

Package.on_use(function (api, where) {
  api.add_files('npm.js', 'server');
  api.useNpm({gcd: '0.0.0', tar: '0.1.8'});
});

Package.on_test(function (api) {
  api.use('test-npm', 'server');
  api.use('tinytest');
  api.add_files('npm_tests.js', 'server');
});
