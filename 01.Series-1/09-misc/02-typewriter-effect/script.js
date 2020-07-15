// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code her
    let target = document.getElementById("target")
    let text = target.innerText
    target.innerHTML = ""
    let i = 0

let rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

function doWriting() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(doWriting, rand(200, 300));
    }
  }

  doWriting()
})();
