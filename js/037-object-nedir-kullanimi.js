let object1 = {object: 1, object2: "a"}
let object2 = {}
let object3 = ["a",34, 2, 3]
let object4 = new Object()

console.log("object1: ", typeof(object1))
console.log("object2: ", typeof(object2))
console.log("object3: ", typeof(object3))
console.log("object4: ", typeof(object4))

console.log(Object.keys(object1))