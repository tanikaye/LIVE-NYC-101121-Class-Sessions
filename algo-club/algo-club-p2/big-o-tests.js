const testArr = [...Array(40000)].map(()=> Math.floor(Math.random() * (1 - 1 + 999) + 1))
// const testArr = [...Array(40000)].map(()=> Math.random())

let sqcount = 0
let lincount = 0
let sqcount2 = 0

function smallestNumNSquared(arr){
    let smallest
    for (let num of arr){
        sqcount += 1
        for (let innerNum of arr){
            smallest = true
            sqcount += 1
            if (innerNum < num) {
                smallest = false
                break
            }
        }
        if (smallest) {return num}
    }
}

function smallestNumN(arr){
    let smallest = Infinity
    for (let num of arr){
        lincount += 1
        if (num < smallest){
           smallest = num
        }
    }
    return smallest
}

function smallestNSquaredObscure(arr){
    
    
    for (let num of arr){
        sqcount2 += 1
        if (arr.filter(checkNum => {
            sqcount2 += 1
           return checkNum < num
        }).length === 0){
            return num
        }
    }
}

console.log("O(n**2)")
console.log(smallestNumNSquared(testArr))
console.log("Count: ", sqcount)
console.log("O(n)")
console.log(smallestNumN(testArr))
console.log("Count: ", lincount)
console.log("O(n**2) obscured")
console.log(smallestNSquaredObscure(testArr))
console.log("Count: ", sqcount2)