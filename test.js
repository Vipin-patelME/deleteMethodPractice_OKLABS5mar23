const myarray  = ["vipin",  "Balendra", "Sachin", "Shivam", "Preetam","Maneesh"]
const newArray =  myarray

// console.log(myarray)
// console.log(newArray)
// console.log(myarray === newArray)

//console.log(myarray.length)

//myarray.splice(1,3, "dev", "vishnu", "Sampat")
//console.log(myarray)
// console.log(myarray.length)
//console.log(myarray.reverse())
const x = newArray.slice(1,4)
//console.log(x)

const newItem = myarray.map(items => ({name:items}))

//console.log(newItem)

// for (let i of newItem){
//     console.log(i)
// }
myarray.push("Singham", "singham2", "sigham4")
//console.log(myarray)
//myarray.pop()
//console.log(myarray)

const a = ["time", "money", "power"]
const b = ["Anemy", "Theif", "Police"]
const c = a + b
// console.log(c)
// console.log(typeof(c))
// console.log([...a,...b])


const d = myarray.copyWithin(1,5)
//console.log(d)


//console.log(b.concat (a).sort().reverse())

//console.log(typeof(undefined))
const fruit = ["BANANA", "Orange", "guava", "blackberry", "Apple"]
fruit.copyWithin(2,3,4)
//console.log(fruit)
const y = fruit.entries()
//console.log(y)
//console.log(fruit.fill("Kivi"))
const z = fruit.every(each => each.length >= 5)
//console.log(z)
const e = fruit.includes("BANANA")
console.log(e)
