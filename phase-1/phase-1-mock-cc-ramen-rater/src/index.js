const url = "http://localhost:3000/ramens"

// DOM selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')


// Listeners
form.addEventListener('submit', handleAddRamen)

// Fetchers

function getAllRamens(){
    return fetch(url)
        .then(r => r.json())
}

function getOneRamen(id){
    return fetch(url + `/${id}`)
        .then(r => r.json())
}

// Render functions

function renderAllRamens(ramensArr){
    ramensArr.forEach(renderOneMenu)
}

function renderOneMenu(ramenObj){
    const img = document.createElement('img')
    img.src = ramenObj.image

    img.addEventListener('click', () => renderDetail(ramenObj))
    menu.appendChild(img)
}

function renderDetail(ramenObj){
    detail.innerHTML = `
        <img class="detail-image" src="${ramenObj.image}" alt="${ramenObj.name}" />
        <h2 class="name">${ramenObj.name}</h2>
        <h3 class="restaurant">${ramenObj.restaurant}</h3>
    `
    rating.innerText = ramenObj.rating
    comment.innerText = ramenObj.comment
}

// Event handlers

function handleAddRamen(e){
    e.preventDefault()
    const name = e.target.name.value
    const restaurant = e.target.restaurant.value
    const image = e.target.image.value
    const rating = e.target.rating.value
    const comment = e.target["new-comment"].value
    console.log('comment: ', comment);
    const newRamen = {
        name,
        restaurant,
        image,
        rating,
        comment
    }
    renderOneMenu(newRamen)
    e.target.reset()
}

// Initializers
getAllRamens().then(renderAllRamens)
getOneRamen(1).then(renderDetail)