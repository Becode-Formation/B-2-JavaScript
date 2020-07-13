//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person  {
        constructor(firstname, lastname) {
            this.firstname = firstname
            this.lastname = lastname
        }

        sayHello() {
            return `Hello, ${this.firstname} ${this.lastname}`
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let p1 = new Person("Roger", "Polo")
        console.log(p1)
        console.log(p1.sayHello())

        let p2 = new Person("Miguel", "Gonzales")
        console.log(p2)
        console.log(p2.sayHello())
    })
})();
