// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    
    document.getElementById("run").addEventListener("click", () => {
       let temp = []
       let duplicates = []

        //SI le tableau Temporaire contient l'element
            //Mettre l'élement dans le tableau duplicant
        // SINON mettre dans le tableau temporaire

        fruits.forEach(elt => {
            if(temp.includes(elt)) {
                duplicates.push(elt)
            } else {
                temp.push(elt)
            }
        })
        console.log(duplicates)
    })
})();
