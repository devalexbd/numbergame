//create random number
let randoNum = 0
console.log(randoNum)
//access the display h3 html
let guessDisplay = document.getElementById('guess-display')
//access the guess temperature h2 html
let guesstempDisplay = document.getElementById('guess-temp')
//access the cheat display
let cheatDisplay = document.getElementById('cheat-display')

//access the input
let guessInput = document.getElementById('guess-input')
//access the guess button
let btn = document.getElementById('guess-button')
//access the reset button
let btn2 = document.getElementById('guess-reset')
//access the start button
let btn3 = document.getElementById('guess-start')
//access the cheat button
let btn4 = document.getElementById('cheat-button')
//start user's attempts at 0
let userAttempts = 0
//the colour variables
let blue = 0
let red = 256

//what the guess button does
btn.addEventListener('click', ()=>{
    //access the user's input on click
    let guess = guessInput.value
    //logging the value type of the input
    console.log(typeof guessInput)

    checkTemp(guess)
})

//reset button, if pressed resets the game
btn2.addEventListener('click', ()=>{
    //reset attempts
    userAttempts = 0
    guessDisplay.style.color = ''
    document.getElementById('guess-start').disabled = false;
    document.getElementById('guess-reset').disabled = true;
    document.getElementById('guess-input').disabled = true;
    guessInput.value = ''
    guessDisplay.innerHTML = null
    guesstempDisplay.innerHTML = null
    cheatDisplay.innerHTML = null
    if(!btn4.classList.contains('hidden')){
        btn4.classList.add('hidden')
    }
})

//the start button
btn3.addEventListener('click', ()=>{
    //generates the random number
    randoNum = Math.floor(Math.random()*100)
    console.log(randoNum)
    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-start').disabled = true;
    document.getElementById('guess-reset').disabled = false;
    document.getElementById('guess-button').disabled = false;
    guessDisplay.innerHTML = "What number am I thinking of?"
    btn4.classList.remove('hidden')
})

//the cheat button
btn4.addEventListener('click', ()=>{
    btn4.classList.add('hidden')
    cheatDisplay.innerHTML = `The answer is ${randoNum}!`
})

/**
 * Verifies if user guess matches random number
 * @param userInput The number to check
 * @returns "WIN" if user input matches random number, or "TOO HIGH" / "TOO LOW"
 */
function checkTemp(userInput){
    numDiff = randoNum - userInput
    if(numDiff == 0){
        guesstempDisplay.innerHTML = "WIN!"
        guesstempDisplay.style.color = '#03f82c'
        document.getElementById('guess-input').disabled = true
        document.getElementById('guess-button').disabled = true
    } else if(userAttempts == 3){
        //first check the user's attempts, if it's 3 then the button shouldn't work
        guessDisplay.innerHTML = `Too many failed attempts. The number was: ${randoNum}. You lose.`
        guessDisplay.style.color = 'red'
        // btn.classList.add('deactivate')
        document.getElementById('guess-button').disabled = true;
        document.getElementById('guess-input').disabled = true;
    } else if(numDiff < 0){
        guesstempDisplay.innerHTML = "&uarr; TOO HIGH"
        guesstempDisplay.style.color = '#ff7f34'
        userAttempts += 1
    } else {
        guesstempDisplay.innerHTML = "&darr; TOO LOW"
        guesstempDisplay.style.color = '#00d0ff'
        userAttempts += 1
    }
}