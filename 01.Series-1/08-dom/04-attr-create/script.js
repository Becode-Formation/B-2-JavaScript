// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    // your code here
    let img = document.getElementById("source")

    let target = document.getElementById("target").innerHTML = '<img src="http://www.randomkittengenerator.com/cats/rotator.php" />'
    img.remove()
})();
