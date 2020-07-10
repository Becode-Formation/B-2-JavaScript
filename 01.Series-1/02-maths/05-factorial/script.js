
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let num = document.getElementById('number').value;
        let nums = [];
        
        let doFactorial = (a) => {
            if(a === 1) {
                return 1;
            } else {
                nums.push(a)
                return a * doFactorial(a-1);
            }
        }

        alert(doFactorial(num));
    });

})();
