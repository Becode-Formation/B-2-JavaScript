// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {
    
    // your code here
    let target = document.getElementById("target")
    let text = target.textContent
    
    let getSpan = (pos) => {
        let words = "<span style='font-size: 1em'>"+ text.substring(pos,pos + 1) + "</span>" 
        +"<span style='font-size: 1.2em'>"+ text.substring(pos + 1, pos + 2) + "</span>" 
        + "<span style='font-size: 1.4em'>"+ text.substring(pos + 2, pos + 3) + "</span>" 
        + "<span style='font-size: 1.2em'>"+ text.substring(pos + 3,pos + 4) + "</span>" 
        + "<span style='font-size: 1em'>"+ text.substring(pos + 4 ,pos + 5) + "</span>"  
        + text.substring(pos + 6)
        console.log(words)
        target.innerHTML = words
       
    }
 
    for(i=0; i < text.length; i ++){
        getSpan(i)
    }

})();
