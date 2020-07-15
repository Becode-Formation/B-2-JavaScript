// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    // your code here
    let passOne = document.getElementById("pass-one")
    let reg = /(?=.*\d{2,})(?=.*\w)/
    
    passOne.addEventListener("keyup", () => {

        if(reg.test(passOne.value)) {
            document.getElementById("validity").innerText = "Ok"
        }  else {
            document.getElementById("validity").innerText = "Not ok"
        }
    })

})();
