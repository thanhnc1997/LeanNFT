import {
	create_element,
	render_icon,
	change_state_button_metamask,
	init_metamask_web3,
	toast,
} from '../functions.js';
import modal from './modal.js'; 

function page_header(params) {
	let div = create_element('header');
	div.classList.add('header');
	div.innerHTML = `
	<a href="/" class="logo">
		<img src="/assets/images/logo.png" alt="LeanNFT">
	</a>
	<button class="btn btn-gradient" type="button">Connect Wallet</button>
	<span class="hamburger">${render_icon.hamburger({width: 38})}</span>
	`;
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
			modal.querySelector('[data-wallet="metamask"]').addEventListener('click', async (e) => {
				if (typeof window.ethereum !== 'undefined') {
					await init_metamask_web3();
					modal.remove();
					document.querySelector('.modal').remove();
					document.body.classList.remove('overflow-hidden');
					try {
						let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
						change_state_button_metamask(accounts[0]);
					} catch (e) {
						toast(e.message)
					}
				}
				else {
					modal.querySelector('.modal-body').innerHTML = this.error_content;
				}
			});
		}
	}
	
	div.querySelector('.btn').addEventListener('click', (e) => {
		document.querySelector('main').appendChild(modal(modal_config));
		modal_config.callback();
	});
	
	div.querySelector('.hamburger').addEventListener('click', () => {
		document.querySelector('.main-nav').classList.add('show');
		document.body.classList.add('overflow-hidden')
	});
	
	return div;
}

export default page_header