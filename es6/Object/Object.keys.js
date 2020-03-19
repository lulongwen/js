/**
 * Object.keys({})
 */


Object.keys( {one: 1, two: 2, three: 3} );
// ['one', 'two', 'three']

Object.keys( {one: 1, two: 2, three: 3} ).length;
// 3


// Object.assign()
  function Foo() {
    this.c = 3;
  }
  function Bar() {
    this.e = 5;
  }

  Foo.prototype.d = 4;
  Bar.prototype.f = 6;

  var result = Object.assign({}, new Foo, new Bar);
  // {c: 3, e: 5}