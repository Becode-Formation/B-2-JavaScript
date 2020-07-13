// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([  // le set() permet de n'avoir qu'une seule fois l'argument
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        fruits.delete("apple", "cerise")
        fruits.add('banana').add("kiwi")
        console.log(fruits)
    })
})();
