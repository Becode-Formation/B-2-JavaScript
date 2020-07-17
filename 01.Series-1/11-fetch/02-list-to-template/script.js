
(() => {
    // your code here
    let target = document.getElementById("target")
    let tpl = document.getElementsByID("tpl-hero")
    document.getElementById("run").addEventListener("click", () => {
        target.appendChild(tpl)
        fetch("http://localhost:3000/heroes/")
        .then(res =>  res.json())
        .then(data => {
            data.forEach(element => {
                //Copier le template dans target
                //Metttre Name dans class=name
                //Mettre alter-ego dans alter ego
                //Mettre powers dans powers
                
            })
        })
    })
})();
