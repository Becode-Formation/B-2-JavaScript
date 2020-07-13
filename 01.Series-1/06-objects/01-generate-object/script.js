// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    let Me = {
        lastname : "Jacquemart",
        firstname : "Robin",
        age : "26",
        city : "Namur",
        country: "Belgique"
    }

    document.getElementById("run").addEventListener("click", () => {

        console.log(Me)
    })
})();
