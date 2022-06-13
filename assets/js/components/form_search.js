import {
	create_element,
	render_icon
} from '../functions.js';

function form_search() {
	let div = create_element('form');
	div.classList.add('form');
	div.innerHTML = `
	${render_icon.search({width: 20})}
	<input type="text" placeholder="Collection, item...">
	`;
	
	return div;
}

export default form_search