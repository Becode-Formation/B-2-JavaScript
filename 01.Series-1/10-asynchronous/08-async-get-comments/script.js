// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        const promise = await window.lib.getPosts()
        promise.forEach( async comment => {
            const posts = await window.lib.getComments(comment.id)
            console.log(posts)
         })
        });
})();
