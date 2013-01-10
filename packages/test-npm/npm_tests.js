Tinytest.add('gcd', function (test) {
  // xcxc don't use bootstrap
  var gcd = __meteor_bootstrap__.require('gcd');
  test.equal(gcd(4, 6), 2);
});
