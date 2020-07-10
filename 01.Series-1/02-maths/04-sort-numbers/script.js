// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
       
        //récupérer les nombres entré et les mettres dans une variable
        let nums = document.getElementById("numbers").value


        let arr = nums.split(",") // Enlevez la virgule pour ne garder que les nombres
        arr.sort((a, b) => a - b) // Trié chaque nombre pour mettre les plus petit en
        alert(arr)

    });

})();
