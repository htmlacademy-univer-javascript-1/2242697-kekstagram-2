import {getPhotoDescriptions} from './data.js';
import {drawPhotos} from './thumbnail.js';
import './form.js';


const photoDescriptions = getPhotoDescriptions();
drawPhotos(photoDescriptions);