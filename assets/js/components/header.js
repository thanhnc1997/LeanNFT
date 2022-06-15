import {
	create_element,
	render_icon
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
	`;
	let modal_config = {
		id: 'connect-wallet',
		css: `
		#connect-wallet .modal-body h4 {
			font-size: 20px;
			margin-bottom: 16px;
		}
		#connect-wallet .modal-body {
			padding: 16px 26px 26px;
		}
		#connect-wallet .modal-body p {
			margin-bottom: 24px;
		}
		#connect-wallet .modal-body .btn {
			width: 100%;
			font-size: 16px;
		}
		`,
		modal_class: ['modal-sm', 'no-footer'],
		modal_content: `
		<h4 class="text-center">Connect to a Wallet</h4>
		<p class="text-center">Please connect with one of our available wallet providers to continue</p>
		<button data-wallet="metamask" class="btn btn-secondary d-flex align-items-center justify-content-between">
			<span>Metamask</span>${render_icon.metamask({width: 26})}
		</button>
		`,
		callback() {
			let modal = document.querySelector('#' + this.id);
			modal.querySelector('[data-wallet="metamask"]').addEventListener('click', (e) => {
				if (typeof window.ethereum !== 'undefined') {
					ethereum.request({ method: 'eth_requestAccounts' });
					modal.remove();
					document.body.classList.remove('overflow-hidden');
				}
				else {
					alert('MetaMask is uninstalled!');
				}
			});
		}
	}
	
	div.querySelector('.btn').addEventListener('click', (e) => {
		document.querySelector('main').appendChild(modal(modal_config));
		modal_config.callback();
	});
	
	return div;
}

export default page_header