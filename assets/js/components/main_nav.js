import {
	create_element,
	render_icon
} from '../functions.js';

function main_nav(params) {
	let pathname = location.pathname;
	let nav = create_element('nav');
	nav.classList.add('main-nav');
	nav.innerHTML = `
	<span class="close d-block text-right">${render_icon.times({width: 28})}</span>
	<span class="nav-item ${pathname == '' || pathname == '/' ? 'active' : ''}">
		<a href="/" class="nav-link">
			<span class="icon">${render_icon.home({width: 20})}</span>
			<span class="text">Home</span>
		</a>
	</span>
	<span class="nav-item">
		<a href="#" class="nav-link">
			<span class="icon">${render_icon.package({width: 20})}</span>
			<span class="text">NFT Launchpad</span>
		</a>
	</span>
	<span class="nav-item">
		<a href="#" class="nav-link">
			<span class="icon">${render_icon.slack({width: 18})}</span>
			<span class="text">NFT Marketplace</span>
		</a>
	</span>
	<span class="nav-item">
		<a href="#" class="nav-link">
			<span class="icon">${render_icon.edit({width: 18})}</span>
			<span class="text">Crypto news</span>
		</a>
	</span>
	<div class="image"><img src="/assets/images/image_1.png"></div>
	`;	
	
	nav.querySelector('.close svg').addEventListener('click', (e) => {
		nav.classList.remove('show');
		document.body.classList.remove('overflow-hidden');
	});
	
	return nav;
}

export default main_nav