import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
    width: '300px',
    position: 'rigth-top',
    timeout: 2000
});

import { fetchCountries } from './js/fetchCountries';
import { buildCountriesMarkup, countryList } from './js/countriesMarkupBuild'

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));
   
   
function onInputChange(event) {
    event.preventDefault();

    if (searchBox.value.trim() === "") {
        countryList.innerHTML = "";
    } else {
         fetchCountries(searchBox.value.trim())
        .then(country => {
         buildCountriesMarkup(country)  
        })
             .catch(() => {
            countryList.innerHTML = "";
        Notiflix.Notify.failure('Oops, there is no country with that name')
    })
     
    }  
}