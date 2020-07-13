// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    
    document.getElementById("run").addEventListener("click", () => {
        let animals = [];
        for(i = 0; i < 5; i ++) {
            animals.push([keys[i], values[i]])
        }

        const ALLANIMALS = Object.fromEntries(animals)
        console.log(ALLANIMALS)
    })
})();
