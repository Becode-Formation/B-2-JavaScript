// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const promise = window.lib.getPersons()
        promise.then((error, persons) => {
            if(error) {
                console.log(error)
            } else {
                console.log(persons)
            }
        })
    })
})();
