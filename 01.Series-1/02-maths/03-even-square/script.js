
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        
        // your code here
        let arr = []
        for (i = 2 ; i < 21; i ++){
            let r = 0;
            r = i * i;
            arr.push(r)
        }

        alert(arr)
    });

})();
