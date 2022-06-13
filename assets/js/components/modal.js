import {
	create_element,
	render_icon
} from '../functions.js';

function modal(params) {
	let template = create_element('div');
	template.classList.add('modal');
	
	return template;
}

export default modal