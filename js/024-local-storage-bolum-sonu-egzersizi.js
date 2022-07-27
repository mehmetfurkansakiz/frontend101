let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
let counterDOM = document.querySelector("#counter")

increaseDOM.addEventListener("click", clicked)
decreaseDOM.addEventListener("click", clicked)
counterDOM.innerHTML = counter

function clicked() {
    this.id == "increase" ? counter += 1 : counter -= 1 
    localStorage.setItem('counter',counter)
    counterDOM.innerHTML = counter

    /*
    if(this.id == "increase"){
        counter += 1
    }else if(this.id == "decrease"){
        counter -= 1
    }
    */
}