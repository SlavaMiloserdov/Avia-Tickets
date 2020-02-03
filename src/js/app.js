import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';
import currencyUI from './views/currency';
import ticketsUI from './views/tickets';
import favorites from './store/favorites';
import favoritesDropDownUI from "./views/favoritesDropDown";


document.addEventListener('DOMContentLoaded', () => {
  initApp();
  const form = formUI.form;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  // Events

  // Mycode
  ticketsUI.container.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-favorite')) {
      let ticket = JSON.parse(event.target.dataset.currentTicket);
      favorites.addTicket(ticket);
      favoritesDropDownUI.renderFavoriteTickets(favorites.store);
    }
  });

  favoritesDropDownUI.container.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-favorite')) {
      let ticket = JSON.parse(event.target.dataset.currentTicket);
      favorites.removeTicket(ticket);
      favoritesDropDownUI.renderFavoriteTickets(favorites.store);
    }
  });
  // 

  // Handler
  async function initApp() {
    await locations.init();
    formUI.setAutoCompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // сбор данных из инпутов
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.CurrencyValue;
    // Code, Code, 2020-01, 2020-12

    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });

    // console.log(locations.lastSearch);
    ticketsUI.renderTickets(locations.lastSearch);
  }
})