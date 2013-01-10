Tinytest.add('gcd', function (test) {
  var gcd = requireNpm('gcd');
  test.equal(gcd(4, 6), 2);
});
