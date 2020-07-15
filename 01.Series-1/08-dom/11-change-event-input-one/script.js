// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    // your code here

    let passOne = document.getElementById("pass-one")
    let counter = document.getElementById("counter")
    passOne.setAttribute("maxLength", 10)
    
    passOne.addEventListener("keyup", () => {
        // console.log(passOne.value.length)
        counter.innerText = `${passOne.value.length}/10`
    })
})();
