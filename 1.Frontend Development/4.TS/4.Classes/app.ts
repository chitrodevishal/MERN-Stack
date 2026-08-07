// Here we create a class
class person {
    name:string
    age:number
    gender:string

    constructor(n1:string, n2:number, n3:string){
        this.name = n1
        this.age = n2
        this.gender = n3
    }
}

// Here we create an object of class
let person1 = new person("John", 30, "Male")
console.log(person1)