const url = "http://localhost:3000/quotes"

// DOM selector && creating/adding elements
const form = document.querySelector('#new-quote-form')
const list = document.querySelector('#quote-list')
const hr = document.querySelector('hr')

const sorter = document.createElement('button')
sorter.innerText = "Sort by Author"
sorter.classList.add("btn", "btn-primary")
hr.prepend(sorter)

// registering listeners
form.addEventListener('submit', handleNewQuote)
sorter.addEventListener('click', toggleSort)

// Fetches

function getAllQuotes(){
    return fetch(url)
    .then(res => res.json())
}

// Rendering

function renderAllQuotes(quotesArr, sort = false){
    list.innerHTML = ''
    if (sort) {
        const sorted = quotesArr.sort((quoteA, quoteB) => {
            if (quoteA.author < quoteB.author) return -1
            if (quoteA.author > quoteB.author) return 1
            if (quoteA.author == quoteB.author) return 0
        })
        sorted.forEach(quote => renderOneQuote(quote))
    } else {
        quotesArr.forEach(quote => renderOneQuote(quote))
    }
}
/* Adding conditionals to the renderOneQuote fn below allows us to reuse it
for all our cases of rendering quotes in the DOM: initial load, adding new quotes,
or editing existing quotes */

function renderOneQuote(quoteObj, existingLi = null){
    const li = existingLi ? existingLi : document.createElement('li')
    // if (existingLi != null) {
    //     li = existingLi
    // } else {
    //     li = document.createElement('li')
    // }
    li.innerHTML = `
        <blockquote class="blockquote">
            <p class="mb-0">${quoteObj.quote}</p>
            <footer class="blockquote-footer">${quoteObj.author}</footer>
            <br>
            <button class='btn btn-success'>Likes: <span>${quoteObj.likes}</span></button>
            <button class='btn btn-danger'>Delete</button>
            <button class='btn btn-outline-info'>Edit</button>
        </blockquote>
    `
    li.classList.add("quote-card")

    const deleteBtn = li.querySelector('.btn-danger')
    const likeBtn = li.querySelector('.btn-success')
    const editBtn = li.querySelector('.btn-outline-info')

    deleteBtn.addEventListener('click', () => li.remove())
    likeBtn.addEventListener('click', () => handleAddLike(li))
    editBtn.addEventListener('click', () => showEditForm(li, quoteObj))

    if (!existingLi) {
        list.appendChild(li)
    }

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
    //     likes: 0
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
    const likes = parseInt(likeSpan.textContent)
    console.log("likes: ", likes);
    likeSpan.textContent = likes + 1
}

function showEditForm(li, quoteObj){
    const form = document.createElement('form')
    const input = document.createElement('textarea')
    const submitBtn = document.createElement('button')

    input.name = 'updatedQuote'
    input.type = 'text'
    input.value = quoteObj.quote
    submitBtn.type = 'submit'
    submitBtn.innerText = 'Update Quote'

    form.append(input, submitBtn)
    li.appendChild(form)

    form.addEventListener('submit', (e) => handleUpdate(e, li, quoteObj))
}

function handleUpdate(e, li, quoteObj){
    e.preventDefault()
    const quote = e.target.updatedQuote.value
    const updatedQuote = {
        quote,
        author: quoteObj.author,
        likes: quoteObj.likes
    }
    renderOneQuote(updatedQuote, li)
}

function toggleSort(){
    if (sorter.innerText.includes("Author")){
        sorter.innerText = "Unsort"
        sorter.classList.remove("btn-primary")
        sorter.classList.add("btn-outline-primary")
        getAllQuotes().then(quotesArr => renderAllQuotes(quotesArr, true))
    } else {
        sorter.innerText = "Sort by Author"
        sorter.classList.remove('btn-outline-primary')
        sorter.classList.add('btn-primary')
        getAllQuotes().then(quotesArr => renderAllQuotes(quotesArr))
    }
}

// Initializers
// getAllQuotes().then(quotesArr => renderAllQuotes(quotesArr))
getAllQuotes().then(renderAllQuotes)
