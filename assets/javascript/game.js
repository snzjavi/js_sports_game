const resetButton = document.querySelector("#reset-button")
const teamoneShootButton = document.querySelector("#teamone-shoot-button")
const teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")
let numResets = document.querySelector("#num-resets")
let teamoneNumshots = document.querySelector("#teamone-numshots")
let teamoneNumgoals = document.querySelector("#teamone-numgoals")
let teamtwoNumshots = document.querySelector("#teamtwo-numshots")
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals")



teamoneShootButton.addEventListener('click', function () {
    console.log("- button clicked")
    let newteamoneNumshots = Number(teamoneNumshots.innerHTML) + 1
    teamoneNumshots.innerHTML = newteamoneNumshots

    let random = Math.floor(Math.random(   ) *10) 
    console.log (random)
    if (random > 5) {
        let newteamoneNumgoals = Number(teamoneNumgoals.innerHTML) + 1
        teamoneNumgoals.innerHTML = newteamoneNumgoals
    }

})

teamtwoShootButton.addEventListener('click', function () {
    console.log("- button clicked")
    let newteamtwoNumshots = Number(teamtwoNumshots.innerHTML) + 1
    teamtwoNumshots.innerHTML = newteamtwoNumshots

    let random = Math.floor(Math.random(   ) *10) 
    console.log (random)
    if (random > 5) {
        let newteamtwoNumgoals = Number(teamtwoNumgoals.innerHTML) + 1
        teamtwoNumgoals.innerHTML = newteamtwoNumgoals
    }
})


resetButton.addEventListener('click', function () {
    console.log("reset")
    let newReset = Number(numResets.innerHTML) + 1
    numResets.innerHTML = newReset
    if (numResets.innerHTML > 0) {
        teamoneNumgoals.innerHTML = 0
        teamoneNumshots.innerHTML = 0
        teamtwoNumshots.innerHTML = 0
        teamtwoNumgoals.innerHTML = 0

    }
        
})