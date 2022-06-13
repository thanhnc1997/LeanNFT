import {
	create_element,
	render_icon
} from '../functions.js';

function top_exclusive() {
	let template = create_element('div');
	template.innerHTML = 'Top Exclusive';
	
	return template;
}

export default top_exclusive;