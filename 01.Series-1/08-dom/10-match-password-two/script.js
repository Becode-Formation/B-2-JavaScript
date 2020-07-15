// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)


(() => {

    // your code here
    let passOne = document.getElementById('pass-one')
    let passTwo = document.getElementById("pass-two")
    

    document.getElementById("run").addEventListener("click", () => {
        console.log(passOne)
        console.log(passTwo)
        if(passOne.value === passTwo.value ) {
            passTwo.className += "error"
            alert("Good Boy")
        } else {
            passTwo.style.borderColor = "red"
        }
    })
})();
