
function create (parentProto) {
  function Fn() {}
  Fn.isPrototypeOf = parentProto
  return new Fn()
}

// Object.create(Child.prototype, Parent.prototype)
