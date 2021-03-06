import {
	create_element,
	render_icon
} from '../functions.js';
import form_search from '../components/form_search.js';
import modal from '../components/modal.js';

function home_page() {
	let modal_config = {
		id: 'connect-wallet',
		type: 'normal',
		css: `
		#connect-wallet .modal-body {
			padding: 16px 26px 26px;
		}
		#connect-wallet .modal-body h4 {
			font-size: 20px;
			margin-bottom: 16px;
		}
		#connect-wallet .modal-body p {
			margin-bottom: 24px;
			color: #ababab;
		}
		#connect-wallet .modal-body .btn {
			width: 100%;
			font-size: 16px;
		}
		`,
		modal_class: ['modal-sm', 'no-footer'],
		type_class: [],
		modal_content: `
		<h4 class="text-center">Connect to a Wallet</h4>
		<p class="text-center">Please connect with one of our available wallet providers to continue</p>
		<button data-wallet="metamask" class="btn btn-secondary d-flex align-items-center justify-content-between">
			<span>Metamask</span>${render_icon.metamask({width: 26})}
		</button>
		`,
		error_content: `
		<p class="text-center">${render_icon.metamask({width: 48})}</p>
		<h4 class="text-center">Metamask not found</h4>
		<p class="text-center">Don't have Metamask wallet?</p>
		<a href="https://metamask.io/download/" target="_blank" class="w-100 link d-flex align-items-center justify-content-center">
			Download Metamask ${render_icon.download({width: 20})}
		</a>
		`,
		callback() {
			let modal = document.querySelector('#' + this.id);
			modal.querySelector('[data-wallet="metamask"]').addEventListener('click', (e) => {
				if (typeof window.ethereum !== 'undefined') {
					ethereum.request({ method: 'eth_requestAccounts' });
					modal.remove();
					document.querySelector('.modal').remove();
					document.body.classList.remove('overflow-hidden');
				}
				else {
					modal.querySelector('.modal-body').innerHTML = this.error_content;
				}
			});
		}
	}
	
	let template = create_element('div');
	template.classList.add('home-page');
	
	function hero_section() {
		let div = create_element('section');
		div.classList.add('hero');
		div.innerHTML = `
		<div class="container">
			<h1>
				<span>NFT Marketplace</span>
				<strong class="title">Discover Rare &amp; <br> Unique Digital Art</strong>
			</h1>
			<h2>
				Discover, Collect, And Sell Extraordinary NFTs On The <br> World???s First &amp; Largest NFT Marketplace
			</h2>
			<button class="btn btn-light" type="button">Explore more</button>
			<button class="btn btn-gradient" type="button">Connect Wallet</button>
		</div>
		`;
		
		div.querySelector('.btn-gradient').addEventListener('click', (e) => {
			document.querySelector('main').appendChild(modal(modal_config));
			modal_config.callback();
		});
		
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
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		})
	});
	
	return template;
}

export default home_page