// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // let getRandBird = () => {
    //     return 
    // }

    let getRandAdj = () => {
        let randBird = Math.floor(Math.random() * birds.length)
        let bird = birds[randBird]
        const adjs = Array.from(adjectives)
    
        let adjNum = Math.floor(Math.random() * adjs.length)
        let adj = adjs[adjNum]
        //    let adj = adjectives[Math.floor(Math.random() * adjectives.size + 1)]
        if(bird.fem){
            adj += "e"
            target = `La ${bird.name} ${adj}.`
            return target
        } else {
            target = `Le ${bird.name} ${adj}.`
            return target
        }
    }

    document.getElementById("run").addEventListener("click", () =>  {
          let target = getRandAdj()
        console.log(target)
        document.getElementById("target").innerText = target
    })
    // your code here
})();
