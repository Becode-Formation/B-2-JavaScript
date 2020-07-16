// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let target = document.getElementById("target")
    let btn = document.getElementById("increment")
    target.innerHTML = localStorage.getItem("number")
    
    btn.addEventListener("click", () => {
       let nbr = parseInt(localStorage.getItem("number"), 10) + 1
       localStorage.setItem("number", nbr)
       target.innerHTML = nbr
     })
     
})();
