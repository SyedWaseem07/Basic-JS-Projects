


const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-btn');
const tweet = document.getElementById('tweet');

getQuote()

async function getQuote() {
    const api_url = "https://api.quotable.io/random"
    const response = await fetch(api_url);
    const data = await response.json();   
    console.log(data);
    quote.innerHTML = `${data.content}`;
    author.innerHTML = `${data.author}`;
}

function share() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} ---by---> ${author.innerHTML}`,
    "Tweet Window", "width=600, height=300");
}
newQuote.addEventListener('click', getQuote);
tweet.addEventListener('click', share);
