// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
       const promise = window.lib.getPosts()
       promise.then(articles => {
           articles.forEach(article => {
               const promise = window.lib.getComments(article.id)
               promise.then(post => {
                   console.log(post)
               })
           });
       })
    })
})()