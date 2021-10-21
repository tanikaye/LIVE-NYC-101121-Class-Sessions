const url = "http://localhost:3000/ramens"

// DOM selectors
const menu = document.querySelector('#ramen-menu')


// Listeners

// Fetchers

function getAllRamens(){
    return fetch(url)
        .then(r => r.json())
}

// Render functions

function renderAllRamens(ramensArr){
    ramensArr.forEach(renderOneMenu)
}

function renderOneMenu(ramenObj){
    const img = document.createElement('img')
    img.src = ramenObj.image
    menu.appendChild(img)
}

function renderDetail(ramenObj){

}

// Event handlers

// Initializers
getAllRamens().then(renderAllRamens)