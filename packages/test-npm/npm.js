var exec = __meteor_bootstrap__.require('child_process').exec;
var Future = __meteor_bootstrap__.require('fibers/future');

// a variant of exec that can be used with `Future.wrap`
var exec2 = function(cmd, cb) {
  exec(cmd, function (err, stdout, stderr) {
    cb(err, {stdout: stdout, stderr: stderr});
  });
};

var res = Future.wrap(exec2)("pwd").wait();
