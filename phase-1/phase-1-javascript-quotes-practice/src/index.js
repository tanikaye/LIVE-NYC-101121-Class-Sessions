const url = "http://localhost:3000/quotes"

// DOM selector && creating/adding elements
const form = document.querySelector('#new-quote-form')
const list = document.querySelector('#quote-list')

// registering listeners
form.addEventListener('submit', handleNewQuote)

// Fetches

function getAllQuotes(){
    return fetch(url)
    .then(res => res.json())
    .then(renderAllQuotes)
}

// Rendering

function renderAllQuotes(quotesArr){
    quotesArr.forEach(renderOneQuote)
}

function renderOneQuote(quoteObj){
    const li = document.createElement('li')
    li.innerHTML = `
        <blockquote class="blockquote">
            <p class="mb-0">${quoteObj.quote}</p>
            <footer class="blockquote-footer">${quoteObj.author}</footer>
            <br>
            <button class='btn btn-success'>Likes: <span>${quoteObj.likes}</span></button>
            <button class='btn btn-danger'>Delete</button>
        </blockquote>
    `
    li.classList.add("quote-card")

    const deleteBtn = li.querySelector('.btn-danger')
    const likeBtn = li.querySelector('.btn-success')

    deleteBtn.addEventListener('click', () => li.remove())
    likeBtn.addEventListener('click', () => handleAddLike(li))
    

    list.appendChild(li)

}

// Event handlers

function handleNewQuote(e){
    e.preventDefault()
    // const quote = e.target["new-quote"].value
    const quote = e.target.quote.value
    // console.dir(e.target);
    // console.log('quote: ', quote);
    const author = e.target.author.value
    // const newQuote = {
    //     quote: quote,
    //     author: author,
    //     likes:
    // }
    const newQuote = {
        quote,
        author,
        likes: 0
    }
    renderOneQuote(newQuote)
    e.target.reset()
}

function handleAddLike(li){
    const likeSpan= li.querySelector('span')
    const like = likeSpan.textContent
    console.log(typeof like)
}

// Initializers
// getAllQuotes().then(quotesArr => renderAllQuotes(quotesArr))
// getAllQuotes().then(renderAllQuotes)
getAllQuotes()