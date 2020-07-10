
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let opOne = new Number(document.getElementById("op-one").value)
    let opTwo = new Number(document.getElementById("op-two").value)
    
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
         alert(opOne + opTwo)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(opOne - opTwo)
    });

   document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
         alert(opOne * opTwo)
    });

     document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(opOne / opTwo)
    });  
    
})();
