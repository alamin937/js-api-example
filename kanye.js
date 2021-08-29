const kanyeLoad = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => kanyeArea(data));
}

const kanyeArea = data =>{

    const quotes = document.getElementById('quotes');

    quotes.innerText = data.quote;
}