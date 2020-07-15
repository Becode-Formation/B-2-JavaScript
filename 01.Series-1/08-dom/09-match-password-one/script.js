// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {

    // your code here
    let passOne = document.getElementById('pass-one')
    let passTwo = document.getElementById("pass-two")
    

    document.getElementById("run").addEventListener("click", () => {
        console.log(passOne)
        console.log(passTwo)
        if(passOne.value === passTwo.value ) {
            passTwo.style.borderColor = "silver"
            alert("Good Boy")
        } else {
            passTwo.style.borderColor = "red"
        }
    })
})();
