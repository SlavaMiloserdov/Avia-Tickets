import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// Init select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

// Init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {
  data: {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  },
});

export function getAutocompleteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}

// Init datepickers 
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
  showClearBtn: true,
  format: 'yyyy-mm',
});

export function getDatePickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}

// Initialization drop down
const dropDown = document.querySelectorAll('.dropdown-trigger');
const dropDownInst = M.Dropdown.init(dropDown);

export function getDropDownInstance(elem) {
  return M.Dropdown.getInstance(elem);
}