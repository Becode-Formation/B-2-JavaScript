// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    // your code here
    let target = document.getElementById("target")
    target.innerHTML = '<table></table>'
    let cr = `<tr> </tr>`
    
    for(i = 1; i < 11; i ++) {
        let tr = document.createElement('tr')
        target.children[0].appendChild(tr)
        for(j = 0; j < 11; j ++){
            let td = document.createElement("td")
            td.innerHTML = i * j
            tr.appendChild(td)
        }
    }
})();