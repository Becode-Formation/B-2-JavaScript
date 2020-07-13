// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
     
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Cat extends Animal {
        constructor(name) {
         super() //Sinon ne fonctionne pas ! 
         this.name = name
        }
        static greeting = "Miaou"
    }

    class Dog extends Animal {
        static greeting = "Wouaf"
        constructor(name) {
            super() // Sinon fonctionne pas ! 
            this.name = name
           }
    }
    
    document.getElementById("run").addEventListener("click", () => {
        
        let cat = new Cat("Billy")
        let dog = new Dog("MIk")
        console.log(cat.sayHello())
        console.log(dog.sayHello())
    })
})();
