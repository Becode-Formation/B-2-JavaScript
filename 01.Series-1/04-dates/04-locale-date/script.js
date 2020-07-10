
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    const DATE = new Date()
    const DAY = DATE.getDay()
    const DAYNBR = DATE.getDate()
    const MONTH = DATE.getMonth()
    const YEAR = DATE.getFullYear()
    const HOUR = DATE.getHours()
    const MIN = DATE.getMinutes()
    

    const months = [
        "January", "February", 
        "March", "April", 
        "May", "June", 
        "July", "August", 
        "September", "October", 
        "November", "December"
    ]

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]


    

    let target = document.getElementById("target")

    target.innerText = `${days[DAY - 1]} ${DAYNBR} ${months[MONTH - 1]} ${YEAR}, ${HOUR}h${MIN} `

    

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    
    // your code here

})();
