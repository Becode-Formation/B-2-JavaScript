
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here

    let creatRandom = () => {
        let rNum = Math.floor(Math.random() * 255 + 1);
        let hexNum =  rNum.toString(16);
        return  hexNum;
    }

    document.getElementById("run").addEventListener("click", function () {
        let result = "#";
        for(i = 0; i < 3 ; i ++) {
            n = creatRandom();
            console.log(n);
            result += n;
        }
        
        console.log(result);

        document.body.style.backgroundColor = result;
    })

})();
