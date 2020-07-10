
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE

        let uAge = prompt("How old are you ?")
        let uGender = prompt("What's your gender ?")
        let uTown = prompt("Where do you live ?")
        let resultat = window.confirm("Ok, you have " + uAge + " you are a " + uGender + " and you live in " + uTown  + " .")

    while(resultat == false) {
        uAge = prompt("How old are you ?")
       uGender = prompt("What's your gender ?")
       uTown = prompt("Where do you live ?")
       resultat = window.confirm("Ok, you have " + uAge + " you are a " + uGender + " and you live in " + uTown  + " .")
    }

})();
