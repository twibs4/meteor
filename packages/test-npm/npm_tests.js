Tinytest.add('gcd', function (test) {
  // xcxc don't use bootstrap
  console.log(__dirname);
  var gcd = __meteor_bootstrap__.require('../app/packages/test-npm/node_modules/gcd');
  test.equal(gcd(4, 6), 2);
});
