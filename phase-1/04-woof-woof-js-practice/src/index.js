const baseURL = "http://localhost:3000/pups"

// DOM Selectors
const bar = document.querySelector("#dog-bar")
const details = document.querySelector("#dog-info")
const filterBtn = document.querySelector("#good-dog-filter")

// register listeners
filterBtn.addEventListener('click', toggleFilter)

// Fetches
// I ended up returning the Promise from the next 2 functions so that I can continue the .then() Promise chain in other functions and then do different things with the json data
function getAllDogs(){
  return fetch(baseURL)
  .then(res => res.json())
  // .then(renderAllInBar) 
}

function getOneDog(id){
  return fetch(baseURL + `/${id}`)
  .then(res => res.json())
}

// Rendering
function renderAllInBar(dogsArr, filter = false){
  bar.innerHTML = ''
  if (filter){
    const goodDogs = dogsArr.filter(dogObj => dogObj.isGoodDog)
    goodDogs.forEach(addOneDogToBar)
  } else {
    dogsArr.forEach(addOneDogToBar)
  }
}

function addOneDogToBar(dogObj){
  const dogSpan = document.createElement('span')
  dogSpan.innerText = dogObj.name
  dogSpan.dataset.id = dogObj.id
  dogSpan.addEventListener('click', handleSpanClick)
  bar.append(dogSpan)
}

function showOneDog(dogObj){
  // console.log(dogObj)
  details.innerHTML = ''
  const dogDiv = document.createElement('div')
  // I'm using a hybrid of innerHTML (it's easier) and ALSO creating a button b/c the button needs a event listener
  dogDiv.innerHTML = `
    <img src=${dogObj.image}>
    <h2>${dogObj.name}</h2>`
  const pupBtn = document.createElement('button')
  // let str; 
  // if(dogObj.isGoodDog){
  //   str = "Good Dog"
  // } else {
  //   str = "Bad Dog"
  // }
  pupBtn.textContent = ((dogObj.isGoodDog) ? "Good Dog" : "Bad Dog")
  pupBtn.addEventListener('click', () => togglePupButton(pupBtn, dogObj))
  details.append(dogDiv, pupBtn)
}

// Event handlers
function handleSpanClick(event){
  const id = event.target.dataset.id
  getOneDog(id).then(showOneDog)
}

function togglePupButton(pupButton){
  pupButton.textContent = pupButton.textContent.includes("Good") ? "Bad Dog" : "Good Dog"
//   if (dogObj.isGoodDog){
//     pupButton.textContent = "Bad Dog"
//     dogObj.isGoodDog = false
//   } else {
//     pupButton.textContent = "Good Dog"
//     dogObj.isGoodDog = true
//   }
}

function toggleFilter(){
  if (filterBtn.innerText.includes("OFF")){
    filterBtn.innerText = "Filter good dogs: ON"
    // renderAllInBar(goodDogsArr) I ended up filtering
    getAllDogs().then(dogArr => renderAllInBar(dogArr, true))
  } else {
    filterBtn.innerText = "Filter good dogs: OFF"
    // renderAllInBar(allDogsArr)
    getAllDogs().then(renderAllInBar)
  }
}

// Intialize
getAllDogs().then(renderAllInBar)