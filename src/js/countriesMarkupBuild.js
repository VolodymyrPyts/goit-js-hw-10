import Notiflix from 'notiflix';
Notiflix.Notify.init({
width: '300px',
position: 'rigth-top',
timeout: 2000
});

export const countryList = document.querySelector('.country-list')

export const buildCountriesMarkup = country => {
    
    if (country.length > 10) {
        countryList.innerHTML = "";
       Notiflix.Notify.info("Too many matches found. Please enter a more specific name")
   }
    
    else if (country.length > 1 && country.length < 10) {
        const markup = country.map(({ flags, name }) =>
        `<li class="country-list__item">
        <img 
        src="${flags.svg}" 
        alt="Flag of ${name.official}"
        width="60"
        height="60"
        class="flag-img" >
        <p class="country-list__name">${name.official}</p>
      </li>`).join('');
    
        countryList.innerHTML = markup;
    }
        
    else if (country.length = 1) {
        const { flags, name, capital, languages, population} = country[0];

        const markup = `<div class="country-info">
        <img src="${flags.svg}" alt="Flag of ${name.official}" width="60" height="60" class="flag-img">
      <p class="country-info__name">${name.official}</p>
      </div>
      <ul class="country-info__description">
        <li class="country-info__item">
          <p class="country-info__title"> Capital: <span class="country-info__text">${capital}</span></p>
        </li>
        <li class="country-info__item">
          <p class="country-info__title"> Population: <span class="country-info__text">${population}</span></p>
        </li>
        <li class="country-info__item">
          <p class="country-info__title"> Languages: <span class="country-info__text">${Object.values(languages)}</span></p>
        </li>
      </ul>`
        countryList.innerHTML = markup;
    } 
    
}