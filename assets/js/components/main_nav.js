import {
	create_element,
	render_icon
} from '../functions.js';

function main_nav(params) {
	let nav = create_element('nav');
	nav.classList.add('main-nav');
	nav.innerHTML = `
	<span class="nav-item">
		<a href="#" class="nav-link">
			<span class="icon">${render_icon.home()}</span>
			<span class="text">Home</span>
		</a>
	</span>
	<span class="nav-item">
		<a href="#" class="nav-link">
			<span class="icon">${render_icon.package()}</span>
			<span class="text">NFT Launchpad</span>
		</a>
	</span>
	<span class="nav-item">
		<a href="#" class="nav-link">
			<span class="icon">${render_icon.slack()}</span>
			<span class="text">NFT Marketplace</span>
		</a>
	</span>
	<span class="nav-item">
		<a href="#" class="nav-link">
			<span class="icon">${render_icon.edit()}</span>
			<span class="text">Crypto news</span>
		</a>
	</span>
	<div class="image"><img src="/assets/images/image_1.png"></div>
	`;	
	
	return nav;
}

export default main_nav