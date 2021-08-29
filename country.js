const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => countryDetails(data))
}

loadCountry();

const countryDetails = country =>{
    const countryContainer = document.getElementById('country')
    for(const countries of country){
        const div = document.createElement('div');
        div.classList.add('country-style');
        div.innerHTML = `
            <h2>${countries.name}</h2>
            <p>${countries.capital}</p>
            <button onclick="detailsArea('${countries.name}')">Details</button>
        `
        countryContainer.appendChild(div);
    }
}

const detailsArea = name =>{
    const url =`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => countryAll(data[0]))
}

const countryAll = data =>{
    const allDetails = document.getElementById('all-details');
    allDetails.innerHTML = `
        <h3>Name : ${data.name}</h3>
        <h4>Population: ${data.population}</h4>
        <img width='200px' src='${data.flag}'>
    `
}