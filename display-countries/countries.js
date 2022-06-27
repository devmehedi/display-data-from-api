// 'https://restcountries.com/v3.1/all'
// https://restcountries.com/v2/name/{name}

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const info = document.getElementById('info');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h3>${country.name.common}</h3> <h5>${country.capital}</h5> <button onclick="loadCountryDetails('${country.name.common}')">Details</button>`;
        info.appendChild(div);
    });
}

const loadCountryDetails = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    const details = document.getElementById('country-details');
    const countryDetails = document.createElement('div');
    countryDetails.classList.add('country')
    countryDetails.innerHTML = `<h3>${country.name}</h3> <h5>${country.capital}</h5> <img width="300px" src="${country.flag}" />`;
    details.appendChild(countryDetails);
}