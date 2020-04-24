let counter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause")
let resume = document.getElementById("resume")
let form = document.getElementById("comment-form")
let list = document.getElementById("list")
let comments = document.querySelector(".comments")
let heartcount = 0; 
let count = 0
let hashNum = {}



resume.remove() 


let pauseButton = false
setInterval(function() {
    
 
   if (!pauseButton) {

    counter.innerText = count++
    if (counter.innerText > 60) {
    console.log(counter.innerText * 60)
    }
   }

}, 1000)


plus.addEventListener('click' , function() {

     counter.innerText = count++


})

minus.addEventListener('click', function() {

     counter.innerText = count--

})




heart.addEventListener("click" , function(evt) {
    
   
   if(hashNum[parseInt(counter.innerText)]){
    hashNum[counter.innerText] = hashNum[counter.innerText] + 1
    
   }else {
    hashNum[counter.innerText] = 1
   }
  
    
       console.log(`Your favorite number ${counter.innerText} has been liked ${hashNum[counter.innerText]} ` )
  
        


})

pause.addEventListener('click', function() {
  
    pauseButton = true
    if (pauseButton){ 
     heart.disabled = true
     plus.disabled = true 
     minus.disabled = true 
     document.body.append(resume)
     form.addEventListener('submit' , function(evt){
         evt.preventDefault()
        let comment = evt.target.comment.value
        let li = document.createElement("li")
        li.innerHtml = comment
        comments.append(comment)
       

   })
     
    } 

    
    resume.addEventListener('click' , function(){
        pauseButton = false
        heart.disabled = false
        plus.disabled = false
        minus.disabled = false 
        resume.remove()
        
    })

   
})