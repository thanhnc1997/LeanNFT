import {
	create_element,
	render_icon
} from '../functions.js';
import form_search from '../components/form_search.js';

function top_exclusive_page() {
	let template = create_element('div');
	template.classList.add('top-exclusive-page');
	let template_inner = create_element('div');
	template_inner.classList.add('container');
	
	function page_header() {
		let div = create_element('div');
		div.classList.add('page-header');
		div.innerHTML = `
		<div class="hero-unit inset-shadow text-center">
			<h2>City Night</h2>
			<h4>Collection of 50 rare Motobike <span class="badge type-1"></span></h4>
			<div class="gradient-box d-flex align-items-center justify-content-around" style="margin-bottom: 38px;">
				<p class="item">
					<b>50</b>
					<span>Minted</span>
				</p>
				<p class="item">
					<b>24</b>
					<span>Owners</span>
				</p>
				<p class="item">
					<b>$8686868</b>
					<span>Vol trade</span>
				</p>
				<p class="item">
					<b>$86</b>
					<span>Floor price</span>
				</p>
			</div>
			<div class="gradient-box d-flex align-items-center justify-content-center">
				${render_icon.clock({width: 24})}
				<b style="margin-left: 12px;">DROP ENDS: 31 MAY, 5:00 AM</b>
			</div>
		</div>
		`;
		
		return div;
	}
	
	function page_body() {
		let div = create_element('div');
		div.classList.add('page-body');
		div.innerHTML = `
		<div class="user-info d-flex align-items-center">
			<span class="ava"></span>
			<p>
				<span>Creator</span>
				<b>kaysinauction</b>
			</p>
		</div>
		`;
		
		return div;
	}
	
	function list_explore(data) {
		let div = create_element('div');
		div.classList.add('grid-row', 'three-items');
		div.innerHTML = `
		<figure class="card box-shadow hover-animation">
			<a href="/detail" class="image" style="background-image: url(/assets/images/item_1.png)"></a>
			<h4>Sam's Basketball Journey</h4>
			<figcaption>
				<p>
					${render_icon.btc()}
					<span class="price">0.5 BNB</span>
				</p>
			</figcaption>
		</figure>
		<figure class="card box-shadow hover-animation">
			<a href="/detail" class="image" style="background-image: url(/assets/images/item_2.png)"></a>
			<h4>Sam's Basketball Journey</h4>
			<figcaption>
				<p>
					${render_icon.btc()}
					<span class="price">0.5 BNB</span>
				</p>
			</figcaption>
		</figure>
		`;
		
		return div;
	}
	
	template_inner.appendChild(form_search());
	template_inner.appendChild(page_header());
	template_inner.appendChild(page_body());
	template_inner.appendChild(list_explore());
	template.appendChild(template_inner);
	
	return template;
}

export default top_exclusive_page;