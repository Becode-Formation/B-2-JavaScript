// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    // your code here
   let img = document.getElementsByTagName("img")[0]
   let onHover = img.getAttribute('src')
   let hover = img.getAttribute('data-hover')

   img.addEventListener('mouseover', () => img.setAttribute('src', hover))
   img.addEventListener('mouseout', () => img.setAttribute('src', onHover))

})();
