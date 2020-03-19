"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg); // it.next(undefined)
        var value = info.value;
    } catch(error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else { // co
        Promise.resolve(value).then(_next, _throw);
    }
}

function _asyncToGenerator(fn) {
    return function() {
        var self = this,
        args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

function read() {
    return _read.apply(this, arguments);
}
// generator 部分执行代码 通过死循环 把函数拆分成多段，并且每次执行一段后 将指针后移动
function _read() {
    _read = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
        var age;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return readFile('./name.txt1', 'utf8');

                case 3:
                    age = _context.sent;
                    return _context.abrupt("return", age);

                case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    console.log('e', _context.t0);

                case 10:
                case "end":
                    return _context.stop();
                }
            }
        },
        _callee, null, [[0, 7]]);
    }));
    return _read.apply(this, arguments);
}

// 动画