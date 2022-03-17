

const sqaures = document.querySelectorAll('.sqaure')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    sqaures.forEach(sqaure => {
        sqaure.classList.remove ('mole')
    })

    let randomSquare = sqaures[Math.floor(Math.random() * 9)]
    classList.add('mole')

    hitPosition = randomSquare.id
}

sqaures.forEach(sqaure => {
    sqaure.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})


 function moveMole() {
     timerId = setInterval(randomSquare, 1000)
 }

 moveMole()

 function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final result is' + result)
    }
 }
 
let countDownTimer = setInterval(countDown, 1000)
