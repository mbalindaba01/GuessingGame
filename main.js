//button element
const submit = document.querySelector('#submit')

//feedback element
const feedback = document.querySelector('#feedback')

//start element
const start = document.querySelector('#start')

//set random number 
const getRandomNum = () => {
    let randomNumber = Math.ceil((Math.random() * 100))
    return randomNumber
}

//store random number
let randomNum = getRandomNum()


//function to show the countdown timer after correct guess
const countdown = () => {
    let timeLeft = 5
    let timer = setInterval(() => {
        if(timeLeft == 0){
            clearInterval(timer)
            start.style.display = 'none'
            randomNum = getRandomNum()
        }else if(timeLeft == 5){
            start.style.display = 'block'
        }
        start.innerHTML = 'New game starting in ' + timeLeft
        timeLeft--
    }, 1000);
}

//event when button is clicked
submit.addEventListener('click', () => {
    feedback.textContent = getText()
    setTimeout(() => {
        feedback.textContent = ''
    }, 3000);
})


//set appropriate text depending on guessed number
const getText = () => {
    const guess = parseInt(document.querySelector('#guess').value)
    console.log(randomNum)
    if(randomNum > guess){
        return 'Your guess is too low'
    }else if(randomNum < guess){
        return 'Your guess is too high'
    }else if(randomNum = guess) {
        countdown()
        return 'Correct! The secret number is ' + randomNum
    }
}


