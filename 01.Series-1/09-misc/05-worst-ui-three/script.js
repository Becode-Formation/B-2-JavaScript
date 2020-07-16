// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let target = document.getElementById("target")

    let v1 = document.getElementById("part-one")
    let b1 = document.getElementById("fix-part-one")


    let v2 = document.getElementById("part-two")
    let b2 = document.getElementById("fix-part-two")


    let v3 = document.getElementById("part-three")
    let b3 = document.getElementById("fix-part-three")


    let v4 = document.getElementById("part-four")
    let b4 = document.getElementById("fix-part-four")


    target.innerHTML = "+" + v1.value + v2.value 
    + v3.value + v4.value

    let onClick = (button, value, min, max) => {
        button.addEventListener("click", () => {
            let num = Math.floor(Math.random() * (max - min) + min)
            if(num <10) {
                value.value = `0${num}`
            } else {
             value.value = num
            }
            target.innerHTML = "+" + v1.value + v2.value 
            + v3.value + v4.value
        })
    }

    onClick(b1, v1, 460, 499)
    onClick(b2, v2, 00, 99)
    onClick(b3, v3, 00, 99)
    onClick(b4, v4, 00, 99)
})();
