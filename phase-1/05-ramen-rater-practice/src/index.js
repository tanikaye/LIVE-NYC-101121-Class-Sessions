const url = "http://localhost:3000/ramens"
const localRamen = []

// DOM selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')
const edit = document.querySelector('#edit-ramen')
const newRating = document.querySelector('#new-rating')
const newComment = document.querySelector('#new-comment')


// Listeners
form.addEventListener('submit', handleAddRamen)
edit.addEventListener('submit', handleEditRating)

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
    const div = document.createElement('div')
    const img = document.createElement('img')
    const button = document.createElement('button')

    img.src = ramenObj.image
    button.textContent = 'X'
    button.style.backgroundColor = 'red'
    button.style.color = 'white'

    div.append(img, button)
    button.addEventListener('click', () => div.remove())
    img.addEventListener('click', () => renderDetail(ramenObj))
   
    menu.appendChild(div)
}

function renderDetail(ramenObj){
    detail.innerHTML = `
        <img class="detail-image" src="${ramenObj.image}" alt="${ramenObj.name}" />
        <h2 class="name">${ramenObj.name}</h2>
        <h3 class="restaurant">${ramenObj.restaurant}</h3>
    `
    rating.innerText = ramenObj.rating
    comment.innerText = ramenObj.comment
    newRating.placeholder = ramenObj.rating
    newComment.placeholder = ramenObj.comment
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

function handleEditRating(e){
    e.preventDefault()
    console.log('e: ', e);
    rating.textContent = newRating.value
    comment.textContent = newComment.value
    e.target.reset()
}

// Initializers
getAllRamens().then(renderAllRamens)
getOneRamen(1).then(renderDetail)