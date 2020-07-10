// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    let nums = [] // Initialise le tableau
   
    // Crée des nombres random dans le tableau
    for(i = 0; i < 10; i ++) {
       let num = Math.floor(Math.random() * 100 + 1)
        nums.push(num)
    }


    for( i=1; i <= nums.length; i++) {
        document.getElementById(`n-${i}`).innerHTML = nums[i - 1]
        
    }

    document.getElementById("min").innerHTML = Math.min(...nums)
    document.getElementById("max").innerHTML = Math.max(...nums)

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = nums.reduce(reducer);
    let aver = sum / nums.length
        
    document.getElementById("sum").innerHTML = sum
    document.getElementById("average").innerHTML = aver
    

})();
