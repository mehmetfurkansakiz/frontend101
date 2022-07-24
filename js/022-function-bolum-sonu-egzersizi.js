let counter = 0
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
let counterDOM = document.querySelector("#counter")



increaseDOM.addEventListener("click", clicked)
decreaseDOM.addEventListener("click", clicked)

function clicked() {
    console.log(this.id)
    counterDOM.innerHTML = counter

    this.id == "increase" ? counter += 1 : counter -= 1 

    /*
    if(this.id == "increase"){
        counter += 1
    }else if(this.id == "decrease"){
        counter -= 1
    }
    */
}