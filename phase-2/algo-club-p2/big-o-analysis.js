// generates an array of 40000 random integers
const testArr = [...Array(40000)].map(()=> Math.floor(Math.random() * (1 - 1 + 999) + 1))

/*
Below are 3 functions which all take an unsorted array of numbers and return the smallest number from the array.

What is the time complexity of each algorithm expressed in Big O?
*/

function findSmallest1(arr){
    let smallest
    for (let num of arr){
        for (let innerNum of arr){
            smallest = true
            if (num > innerNum) {
                smallest = false
                break
            }
        }
        if (smallest) {return num}
    }
}

function findSmallest2(arr){
    let smallest = Infinity
    for (let num of arr){
        if (num < smallest){
            smallest = num
        }
    }
    return smallest
}

function findSmallest3(arr){
    for (let num of arr){
        if (arr.filter(checkNum => {
            checkNum < num
        }).length == 0){
            return num
        }
    }
}

