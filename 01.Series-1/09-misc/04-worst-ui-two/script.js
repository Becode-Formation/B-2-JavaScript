// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let target = document.getElementById("target")
    let b1 = document.getElementById("part-one")
    b1.innerHTML = 460
    let b2 = document.getElementById("part-two")
    b2.innerHTML = "0" +0
    let b3 = document.getElementById("part-three")
    b3.innerHTML = "0" + 0
    let b4 = document.getElementById("part-four")
    b4.innerHTML = "0" + 0

    
    let getNum = (button, min, max) => {
        button.addEventListener("click", () => {
            button.innerHTML ++
            if(button.innerHTML < 10 || button.innerHTML === 0){
                button.innerHTML = `0${button.innerHTML}`
            }
            if(button.innerHTML > max){
                button.innerHTML = min
            }
        target.innerHTML = "+" + b1.innerHTML + b2.innerHTML 
                                        + b3.innerHTML + b4.innerHTML
         })     
    }

    getNum(b1, 460, 499)
    getNum(b2, 00, 99)
    getNum(b3, 00, 99)
    getNum(b4, 00, 99)

})();
