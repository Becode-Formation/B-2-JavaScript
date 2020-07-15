// 06-dom/06-mini-carousel/script.js - 6.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let button = document.getElementById("next")
    let img = document.getElementsByTagName('img')[0]
    let n =  0
        button.addEventListener("click", () => {
            if(n === 5) {
                n = 0
            }
            img.setAttribute('src', (gallery[n++]))
            console.log(n)
            
        })
})();
