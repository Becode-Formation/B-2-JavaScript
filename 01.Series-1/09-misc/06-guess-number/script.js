// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
  let numGuess = Math.floor(Math.random() * 100 + 1)
  let cptNum = 0
  let numUser = new Number(prompt("What's the number to guess ?"))

  while(numUser != numGuess){
      if(numUser < numGuess) {
          alert("Higher ! ")
          numUser = new Number(prompt("What's the number to guess ?"))
          cptNum ++
      } else if ( numUser > numGuess) {
          alert("Lower ! ")
          numUser = new Number(prompt("What's the number to guess ?"))
          cptNum ++
      }
  }

  alert(`That's it ! You need ${cptNum} times to find it !`)
})();
