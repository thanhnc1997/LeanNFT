import {
	create_element,
	render_icon
} from '../functions.js';

function page_header(params) {
	let div = create_element('header');
	div.classList.add('header');
	div.innerHTML = `
	<a href="/" class="logo">
		<img src="/assets/images/logo.png" alt="LeanNFT">
	</a>
	<button class="btn btn-gradient" type="button">Connect Wallet</button>
	`;
	
	return div;
}

export default page_header