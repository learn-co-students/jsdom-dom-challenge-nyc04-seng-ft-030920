plus = document.querySelector("button#plus")
minus = document.querySelector("button#minus")
counter = document.querySelector("h1#counter").innerText


plus.addEventListener("click", () => {
    counter = counter++
    console.log(counter)
})