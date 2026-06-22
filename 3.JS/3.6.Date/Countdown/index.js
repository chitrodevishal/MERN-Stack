console.log("This is Countdown till new year")
let today = new Date()
let NewYear = new Date("2026-12-31")
let countdown = NewYear - today
console.log(countdown)
// let day = Math.ceil(countdown/(1000*60*60*24))
let day = Math.ceil(countdown/(1000*60*60*24))
console.log(day)
let hours = Math.ceil(countdown/(1000*60*60*24))%24
console.log(hours)
let minutes = Math.ceil(countdown/(1000*60*60))%60
console.log(minutes)
let seconds = Math.ceil(countdown/(1000*60))%60
console.log(seconds)
let miliseconds = Math.ceil(countdown/(1000))%1000
console.log(miliseconds)
console.log(`Countdown till new year Days:${day}, Hours:${hours}, Minutes:${minutes}, Seconds:${seconds}, Miliseconds:${miliseconds}`)
