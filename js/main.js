import {debounce} from './util.js';
// import {createImages} from './data.js';
import {createThumbnails} from './thumbnails.js';
import {setUserFormSubmit, closeUploadFileForm} from './form.js';
import {getData} from './api.js';
import './big-pictures.js';
import {showError, showSuccess} from './alerts.js';
// import {showAlert} from './util';
import {setFilter, showFilters, TIMEOUT_DELAY} from './filters.js';

// createThumbnails(createImages());
getData((data) => {
  createThumbnails(data);
  showFilters();
  setFilter(debounce((filterData) => createThumbnails(filterData(data)), TIMEOUT_DELAY));
});

setUserFormSubmit(() => {
  closeUploadFileForm();
  showSuccess();
}, () => {
  closeUploadFileForm(null, false);
  showError();
});
// showSuccess();
// createThumbnails();