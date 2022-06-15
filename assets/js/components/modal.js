import {
	create_element,
	remove_element,
	render_icon
} from '../functions.js';

function modal(params = {}) {
	document.body.classList.add('overflow-hidden');
	let style_tag = create_element('style');
	style_tag.innerHTML = params.css;
	document.head.appendChild(style_tag);
	if (!params.modal_size) params.modal_size = '';
	if (!params.modal_content) params.modal_content = '';
	function remove_modal() {
		document.body.classList.remove('overflow-hidden');
		template.remove();
		remove_element('head style');
	}
	
	let template = create_element('div');
	template.classList.add('modal');
	template.innerHTML = `<div class="overlay"></div>`;
	template.querySelector('.overlay').addEventListener('click', (e) => {
		remove_modal();
	});
	
	let template_inner = create_element('div');
	template_inner.classList.add('modal-dialog');
	template_inner.setAttribute('id', params.id);
	params.modal_class.map(e => {
		template_inner.classList.add(e);
	});
	
	function modal_header() {
		let div = create_element('div');
		div.classList.add('modal-header');
		div.innerHTML = `
		<span class="title"></span>
		<span class="close">${render_icon.times({width: 22})}</span>
		`;
		div.querySelector('.close').addEventListener('click', e => {
			remove_modal();
		});
		
		return div;
	}
	
	function modal_body() {
		let div = create_element('div');
		div.classList.add('modal-body');
		div.innerHTML = params.modal_content;
		
		return div;
	}
	
	function modal_footer() {
		let div = create_element('div');
		div.classList.add('modal-footer');
		
		return div;
	}
	
	template_inner.appendChild(modal_header());
	template_inner.appendChild(modal_body());
	template_inner.appendChild(modal_footer());
	template.appendChild(template_inner);
	
	return template;
}

export default modal