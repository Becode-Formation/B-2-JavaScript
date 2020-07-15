// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    // your code here
    let target = document.getElementById("target")
    target.innerHTML = "<table></table>"
    let td = document.createElement("td")
    for(i = 0; i < 10; i++) {
         target.getElementsByTagName('table')[0].innerHTML += td
    }
})();
