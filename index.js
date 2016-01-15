'use strict';

// var EventEmitter = require('events');
// var Promise = require('bluebird');

// =============================================================================

// var EventEmitter = require('events');
// var Promise = require('bluebird');

// var eventEmitter = new EventEmitter();
//
// eventEmitter.on('test', function() { console.log('testing'); });
// eventEmitter.emit('test');

// =============================================================================

// var EventEmitter = require('events');
// var Promise = require('bluebird');

// var ee = new EventEmitter();
//
// var doSomething = function() {
//   return {
//     then: function(callback) {
//       var value = 42;
//       callback(value);
//     }
//   };
// };
//
// doSomething()
// .then(function(value) {
//   console.log(value);
// });

// =============================================================================

// var EventEmitter = require('events');
// var Promise = require('bluebird');

// var t1 = function() {
//   return {
//     then: function(callback) {
//       var value = 'value: t1';
//       callback(value);
//     }
//   };
// };
//
// var t2 = function() {
//   return {
//     then: function(callback) {
//       var value = 'value: t2';
//       callback(value);
//     }
//   };
// };
//
// t1()
// .then(function(value) {
//   console.log(value);
//   t2()
//   .then(function(value) {
//     console.log(value);
//   });
// });

// =============================================================================

// var EventEmitter = require('events');

// callhttp(url1, data1).then(function(result1) {
//      // result1 is available here
//      return callhttp(url2, data2);
// }).then(function(result2) {
//      // only result2 is available here
//      return callhttp(url3, data3);
// }).then(function(result3) {
//      // all three are done now, final result is in result3
// });

// var data1 = 1;
//
//
// var t1 = function(data) {
//   return {
//     then: function(callback) {
//       data++;
//       console.log(data);
//       callback();
//     }
//   };
// };
//
// console.log(data1);
// t1(data1).then(function(result1) {
//   console.log(result1);
//   return t1(data1);
// }).then(function(result2) {
//   console.log(result2);
//   return t1(data1);
// }).then(function(result3) {
//   console.log(result3);
// });
// console.log(data1);

// =============================================================================

// var EventEmitter = require('events');

// var p1 = new Promise(function(resolve, reject) {
//   resolve("Success!");
//   // or
//   // reject ("Error!");
// });
//
// p1.then(function(value) {
//   console.log(value); // Success!
// }, function(reason) {
//   console.log(reason); // Error!
// });

// =============================================================================

// var EventEmitter = require('events');

// var ee = new EventEmitter();
// var final;
//
// var p1 = new Promise(function(resolve, reject) {
//   resolve(1);
// });
//
// p1.then(function(value) {
//   console.log(value); // 1
//   return value + 1;
// }).then(function(value) {
//   console.log(value); // 2
// });
//
// p1.then(function(value) {
//   console.log(value); // 1
// });
//
// p1.then(function(value) {
//   console.log(value); // 1
//   return value + 1;
// }).then(function(value) {
//   console.log(value); // 2
//   return value + 1;
// }).then(function(value) {
//   console.log(value); // 3
//   return value + 1;
// }).then(function(value) {
//   console.log(value); // 4
//   final = value;
//   ee.emit('BAM');
// });
//
// ee.on('BAM', function() { console.log('final: ' + final); });

// =============================================================================

// var EventEmitter = require('events');

// var ee = new EventEmitter();
// var info = undefined;
//
// var p1 = new Promise(function(resolve, reject) {
//   // resolve(1);
//   reject('error');
// });
//
// p1.then(function(value) {
//   console.log(value);
// }, function(reason) {
//   console.log(reason); // Error!
// });

// =============================================================================

// var EventEmitter = require('events');

// var ee = new EventEmitter();
// var final;
//
// var res = function(value) {
//   console.log('value: ', value);
//   return value + 1;
// };
//
// var rej = function(reason) {
//   console.log('reason: ', reason);
// };
//
// var p1 = new Promise(function(resolve, reject) {
//   // resolve(1);
//   reject('error');
// });
//
//
// p1
// .then(res, rej)
// .then(res, rej)
// .then(res, rej);

// =============================================================================

// var EventEmitter = require('events');

// var ee = new EventEmitter();
// var final;
//
// var res = function(value) {
//   console.log('value: ', value);
//   return value + 1;
// };
//
// var rej = function(reason) {
//   console.log('reason: ', reason);
// };
//
// var p1 = new Promise(function(resolve, reject) {
//   resolve(1);
//   // reject('error');
// });
//
//
// p1
// .then(res)
// .then(res)
// .then(res)
// .catch(rej);

// =============================================================================

// var EventEmitter = require('events');

// var ee = new EventEmitter();
// var final;
//
// var res = function(value) {
//   console.log('value: ', value);
//   value.p2()
//   .then(function(stuff) { console.log(stuff); })
//   .catch(function(reason) { console.log('reason: ' + reason); });
//   return value;
// };
//
// var p1 = new Promise(function(resolve, reject) {
//   var c = {
//     p2: function() {
//       return new Promise(function(resolve, reject) {
//         // resolve('test');
//         reject('inner error');
//       });
//     }
//   };
//
//   resolve(c);
//   // reject('error');
// });
//
// p1
// .then(res)
// .then(res)
// .then(res)
// .catch(function(reason) {
//   console.log(reason);
// });

// =============================================================================

// var EventEmitter = require('events').EventEmitter;
// var ee = new EventEmitter();
//
// ee.on('test-on', function() { console.log('test on'); });
// ee.on('test-off', function() { console.log('test off'); });
//
// ee.emit('test-on');
// ee.emit('test-off');

// =============================================================================

// var EventEmitter = require('events').EventEmitter;
//
// var ee = new EventEmitter();
// var final;
//
// var res = function(value) {
//   console.log('value: ', value);
//   value.p2()
//   .then(function(stuff) { console.log(stuff); })
//   .catch(function(reason) { console.log('reason: ' + reason); });
//   return value;
// };
//
// var p1 = new Promise(function(resolve, reject) {
//   var c = {
//     p2: function() {
//       return new Promise(function(resolve, reject) {
//         ee.on('inner-resolve', function() { resolve('inner resolve'); });
//         ee.on('inner-reject', function() { reject('inner reject'); });
//       });
//     }
//   };
//
//   ee.on('outer-resolve', function() { resolve(c); });
//   ee.on('outer-reject', function() { reject('outer reject'); });
// });
//
// p1
// .then(res)
// .then(res)
// .then(res)
// .catch(function(reason) {
//   console.log(reason);
// });
//
// setTimeout(function() {
//   ee.emit('outer-resolve');
//   // ee.emit('outer-reject');
// }, 1000);
//
// setTimeout(function() {
//   ee.emit('inner-resolve');
//   // ee.emit('inner-reject');
// }, 2000);

// =============================================================================

var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();
var final;

var res = function(value) {
  console.log('value: ', value);
  value.p2()
  .then(function(stuff) {
    console.log('stuff: ', stuff);
    stuff.p3()
    .then(function(things) { console.log(things); })
    .catch(function(reason) {console.log('reason: ' + reason); });
  })
  .catch(function(reason) { console.log('reason: ' + reason); });
  return value;
};

var p1 = new Promise(function(resolve, reject) {
  var c = {
    p2: function() {
      return new Promise(function(resolve, reject) {
        var z = {
          p3: function() {
            return new Promise(function(resolve, reject) {
              ee.on('z-resolve', function() { resolve('z resolve'); });
              ee.on('z-reject', function() { reject('z reject'); });
            });
          }
        };

        ee.on('inner-resolve', function() { resolve(z); });
        ee.on('inner-reject', function() { reject('inner reject'); });
      });
    }
  };

  ee.on('outer-resolve', function() { resolve(c); });
  ee.on('outer-reject', function() { reject('outer reject'); });
});

p1
.then(res)
.then(res)
.then(res)
.catch(function(reason) {
  console.log(reason);
});

setTimeout(function() {
  ee.emit('outer-resolve');
  // ee.emit('outer-reject');
}, 1000);

setTimeout(function() {
  ee.emit('inner-resolve');
  // ee.emit('inner-reject');
}, 2000);

setTimeout(function() {
  ee.emit('z-resolve');
  // ee.emit('z-reject');
}, 3000);

// =============================================================================
