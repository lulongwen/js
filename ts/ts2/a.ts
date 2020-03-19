// :string 类型注解
let a:string = 'hello world'
console.log('a', a)

function person (user: string) {
  return `good ${user}`
}

let user = person('小明')
console.log('user', user)


// interface 接口
interface Person {
  firstname: string,
  lastname: string
}
function People(person: Person) {
  const {firstname, lastname } = person
  return `hello ${firstname}-${lastname}`
}



// class 类
class User {
  // public 类型
  fullname: string
  firstname: string
  lastname: string
  
  constructor (firstname: string, lastname: string) {
    this.firstname = firstname
    this.lastname = lastname
    this.fullname = `${firstname} ${lastname}`
  }
}
















