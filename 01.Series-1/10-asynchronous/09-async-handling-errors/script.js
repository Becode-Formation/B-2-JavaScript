// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
       const person =  await window.lib.getPersons()
        try {
            console.log(person)
        } catch(error) {
            console.log(error)
        }
    })
})();
