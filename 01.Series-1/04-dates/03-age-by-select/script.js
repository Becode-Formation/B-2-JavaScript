
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here

    const DATE = new Date()
    const DAY = DATE.getDay()
    const MONTH = DATE.getMonth()
    const YEAR = DATE.getFullYear()

    let uDay = document.getElementById("dob-day").value
    let uMonth = document.getElementById("dob-month").value
    let uYear = document.getElementById("dob-year").value

    // console.log(`${day} ${month} ${year}`);

    // console.log(`${uDay} ${uMonth} ${uYear}`)

    document.getElementById("run").addEventListener("click", () => {
        let age = YEAR - uYear;

        if(uMonth > MONTH){
            if (uDay > DAY) {
                age -= 1
            } 
        } else if (uDay > DAY) {
            age -= 1
        }

        alert(`Vous avez ${age} ans !`)


    })

})();
