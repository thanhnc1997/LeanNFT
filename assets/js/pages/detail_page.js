import {
	create_element,
	render_icon
} from '../functions.js';
import form_search from '../components/form_search.js';

function detail_page() {
	let template = create_element('div');
	template.classList.add('detail-page');
	let template_inner = create_element('div');
	template_inner.classList.add('container');
	
	function infomation() {
		let div = create_element('div');
		div.classList.add('grid-row', 'two-items', 'main-content');
		div.innerHTML = `
		<div class="image"></div>
		<div class="content">
			<h2>Sam's Basketball Journey</h2>
			<p>
				This Air Superhero is an exclusive NFT from Air Squad collection that contains unique AirNFTs branding. Air Squad is limited edition of 14000 NFTs, minted only for participants of first NFT Launchpad ever done.
			</p>
			<button type="button" class="btn btn-gradient d-flex align-items-center justify-content-center">
				Buy
				${render_icon.btc()}
				<b>0.5 BNB</b>
			</button>
			<div class="creator d-flex align-items-center">
				<span class="ava"></span>
				<p class="detail">
					<span>Creator</span>
					<b>kaysinauction</b>
				</p>
			</div>
			<div class="description">
				<p class="detail">
					<span>NFT ID</span>
					<b>266859</b>
				</p>
				<p class="detail">
					<span>Mint transaction</span>
					<b>0x98889db8...8621161ef8</b>
				</p>
				<p class="detail">
					<span>Contract address</span>
					<b>0xF5db...CdAA4b</b>
				</p>
			</div>
		</div>
		`;
		
		return div;
	}
	
	function list_explore(data) {
		let div = create_element('div');
		div.classList.add('list-explore');
		div.innerHTML = `
		<h4>More By kaysinauction</h4>
		<div class="grid-row three-items">
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
		</div>
		`;
		
		return div;
	}
	
	template_inner.appendChild(form_search());
	template_inner.appendChild(infomation());
	template_inner.appendChild(list_explore());
	template.appendChild(template_inner);
	
	return template;
}

export default detail_page