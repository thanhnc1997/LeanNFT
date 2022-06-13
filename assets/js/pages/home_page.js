import {
	create_element,
	render_icon
} from '../functions.js';
import form_search from '../components/form_search.js';

function home_page() {
	let template = create_element('div');
	template.classList.add('home-page');
	
	function hero_section() {
		let div = create_element('section');
		div.classList.add('hero');
		div.style.cssText = 'background-image: url(/assets/images/hero.png);';
		div.innerHTML = `
		<div class="container">
			<h1>
				<span>NFT Marketplace</span>
				<strong class="title">Discover Rare &amp; <br> Unique Digital Art</strong>
			</h1>
			<h2>
				Discover, Collect, And Sell Extraordinary NFTs On The <br> World’s First &amp; Largest NFT Marketplace
			</h2>
			<button class="btn btn-light" type="button">Explore more</button>
			<button class="btn btn-gradient" type="button">Connect Wallet</button>
		</div>
		`;
		
		return div;
	}
	
	function top_exclusive() {
		let div = create_element('section');
		div.classList.add('section', 'top-exclusive');
		div.innerHTML = `
		<h3 class="section-title title-center">
			<span class="badge type-1"></span>
			<span class="text">Top Exclusive</span>
			<span class="badge type-1"></span>
		</h3>
		`;
		
		return div;
	}
	
	function top_explore() {
		let div = create_element('section');
		div.classList.add('section', 'top-explore');
		div.innerHTML = `
		<div class="container">
			<h3 class="section-title">
				<span class="text">Top Explore</span>
				<span class="badge type-2"></span>
			</h3>
		</div>
		`;
		
		return div;
	}
	
	function nav_filter() {
		let div = create_element('nav');
		div.classList.add('nav-filter');
		div.innerHTML = `
		<span class="nav-item">
			${render_icon.filter({width: 20})}
		</span>
		<span class="nav-item">
			${render_icon.paint({width: 18})} All
		</span>
		<span class="nav-item">
			${render_icon.collections({width: 16})} Colelctions
		</span>
		<span class="nav-item">
			${render_icon.autions({width: 8})} Autions
		</span>
		<span class="nav-item">
			${render_icon.game({width: 20})} Game
		</span>
		<span class="nav-item">
			${render_icon.atom({width: 16})} Art
		</span>
		<span class="nav-item">
			${render_icon.photo({width: 16})} Photo
		</span>
		<span class="nav-item">
			${render_icon.music({width: 16})} Music
		</span>
		`;
		div.querySelectorAll('.nav-item').forEach(item => {
			item.addEventListener('click', e => {
				if (div.querySelector('.nav-item.active')) {
					div.querySelector('.nav-item.active').classList.remove('active');
				}
				e.currentTarget.classList.add('active');
			});
		});
		
		return div;
	}
	
	function list_exclusive(data) {
		let list = ''
		for(let i = 0; i <= 8; i++) {
			list += `
			<figure class="slide-item">
				<a href="/top-exclusive" class="image" style="background-image: url(/assets/images/slide_${i}.png)">
					<figcaption>
						<p>City Night</p>
						<span>kaysinauction</span>
					</figcaption>
				</a>
			</figure>
			`;
		}
		let div = create_element('div');
		div.classList.add('grid-row');
		div.innerHTML = `
		<figure class="first">
			<a href="/top-exclusive" class="image" style="background-image: url(/assets/images/city_night.png)">
				<figcaption>
					<p>City Night</p>
					<span>kaysinauction</span>
				</figcaption>
			</a>
		</figure>
		<div class="slide-wrapper">
			<div id="slide">
				${list}
			</div>
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
	
	template.appendChild(hero_section());
	template.appendChild(top_exclusive());
	template.querySelector('.top-exclusive').appendChild(list_exclusive());
	template.appendChild(top_explore());
	template.querySelector('.top-explore .container').appendChild(nav_filter());
	template.querySelector('.top-explore .container').appendChild(list_explore());
	template.querySelector('.hero .container').insertBefore(form_search(), template.querySelector('.hero .container').childNodes[0]);
	
	$(document).ready(() => {
		$('#slide').slick({
			rows: 2,
			dots: true,
			arrows: false,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3
		})
	});
	
	return template;
}

export default home_page