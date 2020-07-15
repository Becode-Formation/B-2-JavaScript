// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {

    // your code here
  let p =  document.querySelectorAll("p.target")
for(i = 0; i < p.length; i++) {
    p[i].innerHTML = "owned"
}

})();
