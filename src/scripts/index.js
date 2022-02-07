import '../styles/style.scss';
import dataset from '../assets/json/dataset.json';
import pageTitleBuilder from './pageTitleBuilder.js';
import pageLinksBuilder from './pageLinksBuilder.js';
import pageItemsBuilder from './pageItemsBuilder.js';

pageTitleBuilder(dataset);
pageLinksBuilder(dataset);
pageItemsBuilder(dataset);
