// BUTTONS
const plus = document.querySelector("button#plus")
const minus = document.querySelector("button#minus")
const counter = document.querySelector("#counter")
const pause = document.querySelector("#pause")
const heart = document.querySelector("#heart")

const amountLikes = document.querySelector('.amount-likes')

// INCREMENTS TIMER EVERY SECOND
let likesPerSec = setInterval(incrementTimer, 1000)

function incrementTimer(){
    counter.innerText = parseInt(counter.innerText) + 1
}

function decrementTimer(){
    counter.innerText = parseInt(counter.innerText) - 1
}

pause.addEventListener("click", () => {
    if (pause.innerText == "pause"){
        clearTimeout(likesPerSec)
        pause.innerText = "resume"
    } else {
        likesPerSec = setInterval(incrementTimer, 1000)
        pause.innerText = "pause"

        plus.addEventListener("click", () => {
            incrementTimer()
        })
        
        minus.addEventListener("click", () => {
            decrementTimer()
        })

    }
})

const numbersLiked = {}
// non-operational heart
heart.addEventListener("click", () =>{
    let numInHash = numbersLiked[counter.innerText]
    if (numInHash){
        numInHash = numInHash + 1
    } else{
        numInHash = 1
    }
    amountLikes.innerText = `You've liked this number ${numInHash} times.`
})

let commentForm = document.querySelector("#comment-form")
let commentList = document.querySelector('ul.comments')
commentForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let comment = evt.target.comment.value
    emptyLi = document.createElement('li')
    emptyLi.innerText = comment
    commentList.append(emptyLi)
    commentForm.reset()
})