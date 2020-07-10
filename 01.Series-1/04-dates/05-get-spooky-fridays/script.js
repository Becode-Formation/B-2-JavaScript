
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    let DATE = new Date() // Recupère la date

    //POUR CHAQUE mois
        // SI le jour 13 EST EGALE à 5 
            // METTRE le mois avec l'année dans l'array 

    document.getElementById("run").addEventListener("click", () => {
        let uYear = document.getElementById("year").value
        DATE.setFullYear(uYear)
        
        let months = [
            "Janvier", "Février",
            "Mars", "Avril", 
            "Mai", "Juin", 
            "Juillet", "Aout",
            "Septembre", "Novembre",
        "Decembre"]

        let monthsWith13 = []

        for(i = 0; i < 12; i ++){
             DATE.setMonth(i);
		     DATE.setDate(13);
	    	DATE.setYear(uYear);
	    	if (DATE.getDay()==5) {
                monthsWith13.push(months[i])
            }
        }

         alert(monthsWith13)

    })

})();
