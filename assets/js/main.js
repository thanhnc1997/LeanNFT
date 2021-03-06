import {
	create_element
} from './functions.js';

console.log('LeanNFT Services Start :>');
//
// components
//
import page_header from './components/header.js';
import main_nav from './components/main_nav.js';
//
// pages
//
import home_page from './pages/home_page.js';
import top_exclusive_page from './pages/top_exclusive.js';
import detail_page from './pages/detail_page.js';

let app = create_element('div');
app.classList.add('app');

document.querySelector('main').appendChild(page_header());
document.querySelector('main').appendChild(main_nav());
document.querySelector('main').appendChild(app);

let pathname = location.pathname;
if (pathname == '' || pathname == '/') {
	app.appendChild(home_page());
}

if (pathname.includes('/top-exclusive')) {
	app.appendChild(top_exclusive_page());
}

if (pathname.includes('/detail')) {
	app.appendChild(detail_page());
}
