function create_element(e) {
  let element = document.createElement(e);
  return element;
}

function remove_element(e) {
  if (document.querySelector(e)) {
    document.querySelector(e).remove();
  }
}

function toast(message) {
  let div = create_element('div');
  div.classList.add('toast');
  div.innerHTML = message;
  document.body.appendChild(div);

  setTimeout(() => {
    remove_element('.toast');
  }, 5000);
}

let render_icon = {
	home(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M6.75 16.5V9H11.25V16.5" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	package(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.375 7.05L5.625 3.1575" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M15.75 12V5.99999C15.7497 5.73694 15.6803 5.4786 15.5487 5.25086C15.417 5.02312 15.2278 4.83401 15 4.70249L9.75 1.70249C9.52197 1.57084 9.2633 1.50153 9 1.50153C8.7367 1.50153 8.47803 1.57084 8.25 1.70249L3 4.70249C2.7722 4.83401 2.58299 5.02312 2.45135 5.25086C2.31971 5.4786 2.25027 5.73694 2.25 5.99999V12C2.25027 12.263 2.31971 12.5214 2.45135 12.7491C2.58299 12.9769 2.7722 13.166 3 13.2975L8.25 16.2975C8.47803 16.4291 8.7367 16.4985 9 16.4985C9.2633 16.4985 9.52197 16.4291 9.75 16.2975L15 13.2975C15.2278 13.166 15.417 12.9769 15.5487 12.7491C15.6803 12.5214 15.7497 12.263 15.75 12Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M2.4525 5.22L9 9.0075L15.5475 5.22" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M9 16.56V9" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	slack(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.875 7.5C10.2525 7.5 9.75 6.9975 9.75 6.375V2.625C9.75 2.0025 10.2525 1.5 10.875 1.5C11.4975 1.5 12 2.0025 12 2.625V6.375C12 6.9975 11.4975 7.5 10.875 7.5Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M15.375 7.5H14.25V6.375C14.25 5.7525 14.7525 5.25 15.375 5.25C15.9975 5.25 16.5 5.7525 16.5 6.375C16.5 6.9975 15.9975 7.5 15.375 7.5Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.125 10.5C7.7475 10.5 8.25 11.0025 8.25 11.625V15.375C8.25 15.9975 7.7475 16.5 7.125 16.5C6.5025 16.5 6 15.9975 6 15.375V11.625C6 11.0025 6.5025 10.5 7.125 10.5Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M2.625 10.5H3.75V11.625C3.75 12.2475 3.2475 12.75 2.625 12.75C2.0025 12.75 1.5 12.2475 1.5 11.625C1.5 11.0025 2.0025 10.5 2.625 10.5Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M10.5 10.875C10.5 10.2525 11.0025 9.75 11.625 9.75H15.375C15.9975 9.75 16.5 10.2525 16.5 10.875C16.5 11.4975 15.9975 12 15.375 12H11.625C11.0025 12 10.5 11.4975 10.5 10.875Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.625 14.25H10.5V15.375C10.5 15.9975 11.0025 16.5 11.625 16.5C12.2475 16.5 12.75 15.9975 12.75 15.375C12.75 14.7525 12.2475 14.25 11.625 14.25Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.5 7.125C7.5 6.5025 6.9975 6 6.375 6H2.625C2.0025 6 1.5 6.5025 1.5 7.125C1.5 7.7475 2.0025 8.25 2.625 8.25H6.375C6.9975 8.25 7.5 7.7475 7.5 7.125Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M6.375 3.75H7.5V2.625C7.5 2.0025 6.9975 1.5 6.375 1.5C5.7525 1.5 5.25 2.0025 5.25 2.625C5.25 3.2475 5.7525 3.75 6.375 3.75Z" stroke="#398150" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	edit(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 15H15.75" stroke="#398150" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M12.375 2.62499C12.6734 2.32662 13.078 2.159 13.5 2.159C13.7089 2.159 13.9158 2.20015 14.1088 2.2801C14.3019 2.36006 14.4773 2.47725 14.625 2.62499C14.7727 2.77272 14.8899 2.94811 14.9699 3.14114C15.0498 3.33417 15.091 3.54105 15.091 3.74999C15.091 3.95892 15.0498 4.1658 14.9699 4.35883C14.8899 4.55186 14.7727 4.72725 14.625 4.87499L5.25 14.25L2.25 15L3 12L12.375 2.62499Z" stroke="#398150" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	search(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.289062 6.9375C0.289062 10.4453 3.14062 13.2969 6.64844 13.2969C7.95312 13.2969 9.14844 12.8984 10.1484 12.2188L13.7422 15.8125C13.9609 16.0391 14.2656 16.1406 14.5703 16.1406C15.2344 16.1406 15.7109 15.6406 15.7109 14.9922C15.7109 14.6797 15.6016 14.3906 15.3906 14.1719L11.8203 10.5938C12.5625 9.57031 13.0078 8.30469 13.0078 6.9375C13.0078 3.42969 10.1562 0.578125 6.64844 0.578125C3.14062 0.578125 0.289062 3.42969 0.289062 6.9375ZM1.94531 6.9375C1.94531 4.34375 4.04688 2.23438 6.64844 2.23438C9.24219 2.23438 11.3516 4.34375 11.3516 6.9375C11.3516 9.53125 9.24219 11.6406 6.64844 11.6406C4.04688 11.6406 1.94531 9.53125 1.94531 6.9375Z" fill="url(#paint0_linear_321_1559)"/>
		<defs>
		<linearGradient id="paint0_linear_321_1559" x1="18" y1="5.33333" x2="-2.00009" y2="5.42516" gradientUnits="userSpaceOnUse">
		<stop stop-color="#81D099"/>
		<stop offset="1" stop-color="#BCEEA2"/>
		</linearGradient>
		</defs>
		</svg>
		`;
	},
	filter(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 4H25" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/>
		<circle cx="8" cy="4" r="4" fill="black"/>
		<path d="M2 14H25" stroke="#8E8E93" stroke-width="3" stroke-linecap="round"/>
		<circle cx="19" cy="14" r="4" fill="black"/>
		</svg>
		`;
	},
	paint(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.42649 10C8.56381 10 9.99354 9.23897 9.99354 8.1047C9.99354 7.1207 9.18417 6.91226 9.18417 6.34028C9.18417 5.55502 12 5.42414 12 3.37373C12 1.3427 9.9063 0 6.78514 0C2.72859 0 0 2.05526 0 5.07998C0 8.0223 2.59289 10 6.42649 10ZM6.42649 8.98206C3.16478 8.98206 1.01777 7.42123 1.01777 5.07998C1.01777 2.63694 3.30048 1.01794 6.78514 1.01794C9.31987 1.01794 10.9822 1.96801 10.9822 3.37373C10.9822 5.01697 8.15186 4.83762 8.15186 6.3015C8.15186 7.14493 8.97092 7.3776 8.97092 7.97382C8.97092 8.58459 7.96284 8.98206 6.42649 8.98206ZM6.80452 3.42705C7.25525 3.42705 7.61389 3.06835 7.61389 2.61755C7.61389 2.16675 7.25525 1.80805 6.80452 1.80805C6.35864 1.80805 5.99031 2.17159 5.99031 2.61755C5.99031 3.0635 6.35864 3.42705 6.80452 3.42705ZM4.38611 4.19777C4.93376 4.19777 5.38449 3.75666 5.38449 3.18953C5.38449 2.63694 4.93376 2.19583 4.38611 2.19583C3.82391 2.19583 3.37318 2.63694 3.37318 3.18953C3.37318 3.75666 3.82391 4.19777 4.38611 4.19777ZM8.98546 3.73243C9.34895 3.73243 9.63974 3.44159 9.63974 3.07319C9.63974 2.71449 9.34895 2.41881 8.98546 2.41881C8.62197 2.41881 8.32149 2.71449 8.32149 3.07319C8.32149 3.44159 8.61712 3.73243 8.98546 3.73243ZM2.64136 5.73437C3.08239 5.73437 3.44103 5.36597 3.44103 4.92002C3.44103 4.47891 3.08239 4.12506 2.64136 4.12506C2.20032 4.12506 1.83683 4.47891 1.83683 4.92002C1.83683 5.36597 2.20032 5.73437 2.64136 5.73437ZM6.00969 7.87203C6.77544 7.87203 7.37641 7.26612 7.37641 6.50024C7.37641 5.75376 6.7609 5.13815 6.00969 5.13815C5.25848 5.13815 4.64297 5.75376 4.64297 6.50024C4.64297 7.25642 5.25848 7.87203 6.00969 7.87203ZM6.00969 7.24188C5.60258 7.24188 5.27302 6.91226 5.27302 6.50024C5.27302 6.0446 5.62197 5.77799 5.99515 5.77315C6.38288 5.7683 6.74637 6.03005 6.74637 6.50024C6.74637 6.91226 6.42165 7.24188 6.00969 7.24188Z" fill="black"/>
		</svg>
		`;
	},
	collections(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1.52301 9H9.47699C10.4799 9 11 8.46463 11 7.4373V1.5627C11 0.53537 10.4799 0 9.47699 0H1.52301C0.520051 0 0 0.530547 0 1.5627V7.4373C0 8.46463 0.520051 9 1.52301 9ZM8.34403 3.96945C8.34403 3.18328 7.93077 2.75402 7.15998 2.75402H0.910089V1.64469C0.910089 1.17685 1.1469 0.940514 1.57873 0.940514H9.42128C9.84846 0.940514 10.0899 1.17685 10.0899 1.64469V7.35531C10.0899 7.82315 9.84846 8.05466 9.42128 8.05466H8.34403V3.96945ZM1.57873 8.05466C1.1469 8.05466 0.910089 7.82315 0.910089 7.35531V3.54502H5.01013V8.05466H1.57873ZM7.08569 3.54502C7.40144 3.54502 7.58252 3.73794 7.58252 4.07074V8.05466H5.77163V3.54502H7.08569Z" fill="black"/>
		</svg>
		`;
	},
	autions(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.879397 10H5.1206C5.66834 10 6 9.6672 6 9.05529V8.9533C6 7.62748 4.70352 6.24262 4.04523 5.55019C3.70352 5.17982 3.72362 4.78798 4.04523 4.44444C4.70352 3.74665 6 2.36715 6 1.03596V0.950081C6 0.338164 5.66834 0 5.1206 0H0.879397C0.336683 0 0 0.338164 0 0.950081V1.03596C0 2.36715 1.30151 3.74665 1.9598 4.44444C2.28141 4.78798 2.30151 5.17982 1.9598 5.55019C1.30151 6.24262 0 7.62748 0 8.9533V9.05529C0 9.6672 0.336683 10 0.879397 10ZM1.30151 9.16264C1.07538 9.16264 1.01508 8.87815 1.16583 8.72249L2.69849 7.14439C2.78392 7.06388 2.80402 7.03704 2.80402 6.90821V4.62695C2.80402 4.36393 2.75377 4.219 2.57286 4.0526C2.25126 3.75201 1.79899 3.32797 1.50251 2.9898C1.36181 2.83414 1.43216 2.63553 1.61809 2.63553H4.38693C4.57286 2.63553 4.63819 2.83414 4.49749 2.9898C4.20603 3.32797 3.74874 3.75201 3.42714 4.0526C3.24623 4.219 3.19598 4.36393 3.19598 4.62695V6.90821C3.19598 7.03704 3.22111 7.06388 3.30151 7.14439L4.83417 8.72249C4.98995 8.87815 4.92965 9.16264 4.69849 9.16264H1.30151Z" fill="black"/>
		</svg>
		`;
	},
	game(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0 5.49675C0 6.4192 0.651862 7 1.60301 7C2.13598 7 2.61975 6.78742 2.98873 6.39642L3.71848 5.60304C3.82098 5.49295 3.92757 5.4398 4.05466 5.4398H7.94534C8.07243 5.4398 8.17902 5.49295 8.28152 5.60304L9.01127 6.39642C9.38025 6.78742 9.86402 7 10.397 7C11.3481 7 12 6.4192 12 5.49675C12 5.10195 11.9057 4.65022 11.7458 4.14913C11.4916 3.36714 11.053 2.30803 10.6348 1.48807C10.2781 0.800976 10.0854 0.463124 9.18756 0.277115C8.40041 0.110087 7.31807 0 6.00205 0C4.68193 0 3.59959 0.110087 2.81244 0.277115C1.91459 0.463124 1.7219 0.800976 1.36522 1.48807C0.947045 2.30803 0.50837 3.36714 0.254185 4.14913C0.0942945 4.65022 0 5.10195 0 5.49675ZM0.758456 5.49295C0.758456 5.26139 0.815852 4.98427 0.938845 4.58189C1.21763 3.70119 1.6932 2.56996 2.10318 1.73861C2.29997 1.33623 2.41476 1.10846 2.90263 1.00597C3.65289 0.838937 4.71063 0.732646 6.00205 0.732646C7.29347 0.732646 8.34711 0.838937 9.09737 1.00597C9.58524 1.11226 9.69593 1.33623 9.89682 1.73861C10.315 2.56996 10.7742 3.70499 11.0612 4.58189C11.1882 4.98427 11.2415 5.26139 11.2415 5.49295C11.2415 5.98644 10.8726 6.29013 10.3806 6.29013C10.0854 6.29013 9.79433 6.14588 9.55654 5.89154L8.74069 5.02603C8.5439 4.80965 8.37581 4.70716 8.01913 4.70716H3.98087C3.62419 4.70716 3.4561 4.80965 3.25931 5.02603L2.44346 5.89154C2.20977 6.14588 1.91459 6.29013 1.61941 6.29013C1.12743 6.29013 0.758456 5.98644 0.758456 5.49295ZM2.65664 2.75976C2.65664 2.96855 2.79604 3.10141 3.02562 3.10141H3.71848V3.72017C3.71848 3.93275 3.85378 4.06941 4.07926 4.06941C4.30065 4.06941 4.43594 3.93275 4.43594 3.72017V3.10141H5.0878C5.33789 3.10141 5.48548 2.96855 5.48548 2.75976C5.48548 2.55098 5.33789 2.42191 5.0878 2.42191H4.43594V1.80315C4.43594 1.59056 4.30065 1.4577 4.07926 1.4577C3.85378 1.4577 3.71848 1.59056 3.71848 1.80315V2.42191H3.02562C2.79604 2.42191 2.65664 2.55098 2.65664 2.75976ZM8.5603 2.7218C8.90468 2.7218 9.16706 2.47885 9.16706 2.16377C9.16706 1.8449 8.90468 1.59816 8.5603 1.59816C8.22002 1.59816 7.95354 1.8449 7.95354 2.16377C7.95354 2.47885 8.22002 2.7218 8.5603 2.7218ZM7.34267 3.86063C7.68705 3.86063 7.94944 3.61768 7.94944 3.3026C7.94944 2.98373 7.68705 2.73698 7.34267 2.73698C7.00239 2.73698 6.73591 2.98373 6.73591 3.3026C6.73591 3.61768 7.00239 3.86063 7.34267 3.86063Z" fill="black"/>
		</svg>
		`;
	},
	atom(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.168014 7.53183C0.593961 8.19713 1.66112 8.33265 3.10843 7.98357C3.49315 9.25667 4.15727 10 5 10C5.84274 10 6.50227 9.25667 6.89157 7.98357C8.33888 8.33265 9.40604 8.19713 9.83199 7.53183C10.2534 6.87474 9.85489 5.98357 8.80147 5.03901C9.85947 4.09446 10.2579 3.19918 9.83199 2.53388C9.40604 1.8768 8.34346 1.73717 6.90989 2.07803C6.52975 0.767967 5.85648 0 5 0C4.13894 0 3.47025 0.767967 3.08553 2.07803C1.65196 1.73717 0.593961 1.8768 0.168014 2.53388C-0.257934 3.19918 0.140533 4.09446 1.19853 5.03901C0.145113 5.98357 -0.253354 6.87474 0.168014 7.53183ZM5 0.694045C5.49465 0.694045 5.8977 1.28542 6.14502 2.29979C5.77861 2.41889 5.39847 2.56263 5 2.73511C4.60153 2.56263 4.22139 2.41889 3.85498 2.29979C4.1023 1.28542 4.50077 0.694045 5 0.694045ZM9.15413 2.88706C9.40146 3.26489 9.04421 3.86037 8.20148 4.55031C7.90835 4.33265 7.58317 4.11088 7.22592 3.88912C7.19386 3.49897 7.14348 3.12936 7.07936 2.78439C8.15568 2.4846 8.91139 2.50513 9.15413 2.88706ZM0.845866 2.88706C1.08861 2.50513 1.83974 2.4846 2.92064 2.78439C2.85194 3.12936 2.80614 3.49897 2.77408 3.88912C2.41683 4.11088 2.08707 4.33265 1.79394 4.55031C0.955788 3.86037 0.593961 3.26489 0.845866 2.88706ZM6.1267 3.26899C6.06716 3.24025 6.00762 3.20739 5.94808 3.17864C6.06258 3.12936 6.1725 3.0883 6.287 3.04723C6.30074 3.154 6.31448 3.26078 6.32822 3.37577C6.25952 3.33881 6.1954 3.30595 6.1267 3.26899ZM3.86872 3.26899C3.8046 3.30595 3.7359 3.33881 3.67178 3.37577C3.68552 3.26078 3.69926 3.154 3.713 3.04723C3.82292 3.0883 3.93742 3.12936 4.05192 3.17864C3.99238 3.20739 3.93284 3.24025 3.86872 3.26899ZM4.28551 6.1232C4.05192 6 3.82292 5.8768 3.60766 5.75359C3.59392 5.51129 3.58934 5.25667 3.58934 4.99384C3.58934 4.75975 3.59392 4.53388 3.60308 4.31622C3.82292 4.19302 4.0565 4.06571 4.29925 3.9384C4.53741 3.8152 4.771 3.70021 5 3.59343C5.229 3.70021 5.45801 3.8152 5.70075 3.9384C5.9435 4.06571 6.17708 4.19302 6.39693 4.31622C6.40609 4.53388 6.41067 4.75975 6.41067 4.99384C6.41067 5.25667 6.40609 5.51129 6.39235 5.75359C6.17708 5.8768 5.94808 6 5.70991 6.1232C5.46717 6.24641 5.229 6.3655 5 6.47639C4.76642 6.3655 4.52825 6.24641 4.28551 6.1232ZM5.00458 5.83573C5.51755 5.83573 5.93434 5.46201 5.93434 4.99795C5.93434 4.53799 5.51755 4.16016 5.00458 4.16016C4.48245 4.16016 4.06566 4.53799 4.06566 4.99795C4.06566 5.46201 4.48245 5.83573 5.00458 5.83573ZM2.72828 4.99384C2.72828 5.07187 2.72828 5.1499 2.73286 5.22793C2.6321 5.16222 2.53592 5.10062 2.44431 5.03491C2.53592 4.97331 2.6321 4.9076 2.72828 4.84189C2.72828 4.89117 2.72828 4.94456 2.72828 4.99384ZM7.26714 4.99384C7.26714 4.94456 7.26714 4.89117 7.26714 4.84189C7.3679 4.9076 7.46408 4.97331 7.55569 5.03491C7.46408 5.10062 7.3679 5.16222 7.26714 5.22793C7.26714 5.1499 7.26714 5.07187 7.26714 4.99384ZM9.15413 7.18686C8.90681 7.56468 8.1511 7.58522 7.06562 7.27721C7.13432 6.94045 7.1847 6.57495 7.21676 6.18891C7.57859 5.96715 7.90835 5.74538 8.20606 5.52361C9.04421 6.20945 9.40146 6.80493 9.15413 7.18686ZM0.845866 7.18686C0.598541 6.80493 0.955788 6.20945 1.79394 5.52361C2.08707 5.74538 2.41683 5.96715 2.77866 6.18891C2.8153 6.57495 2.86568 6.94045 2.93438 7.27721C1.84432 7.58522 1.08861 7.56879 0.845866 7.18686ZM6.13586 6.79261C6.19998 6.76386 6.25952 6.73101 6.31906 6.70226C6.30532 6.80904 6.29158 6.9117 6.27326 7.01437C6.16792 6.97741 6.058 6.93224 5.94808 6.89117C6.0122 6.85832 6.07632 6.82546 6.13586 6.79261ZM3.85956 6.79261C3.92368 6.82546 3.9878 6.85832 4.04734 6.89117C3.93742 6.93224 3.83208 6.97741 3.72674 7.01437C3.70842 6.9117 3.69468 6.80904 3.68094 6.70226C3.74048 6.73101 3.80002 6.76386 3.85956 6.79261ZM5 9.30595C4.51451 9.30595 4.12062 8.73922 3.8733 7.76181C4.23055 7.64682 4.61069 7.50308 5 7.3347C5.38931 7.50308 5.76487 7.64682 6.1267 7.76181C5.87938 8.73922 5.48549 9.30595 5 9.30595Z" fill="black"/>
		</svg>
		`;
	},
	photo(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1.52301 8H9.47699C10.4799 8 11 7.52412 11 6.61093V1.38907C11 0.475884 10.4799 0 9.47699 0H1.52301C0.520051 0 0 0.471597 0 1.38907V6.61093C0 7.52412 0.520051 8 1.52301 8ZM0.910089 1.46195C0.910089 1.04609 1.1469 0.836013 1.57873 0.836013H9.42128C9.84846 0.836013 10.0899 1.04609 10.0899 1.46195V5.99357L7.76361 3.98285C7.55466 3.81136 7.31321 3.72133 7.06712 3.72133C6.81173 3.72133 6.58421 3.80279 6.37062 3.97428L4.27649 5.70632L3.41748 4.99035C3.22246 4.83173 3.00886 4.74598 2.79063 4.74598C2.57704 4.74598 2.38666 4.82744 2.19164 4.98607L0.910089 6.0493V1.46195ZM3.59856 4.07717C4.20684 4.07717 4.70832 3.61415 4.70832 3.04823C4.70832 2.4866 4.20684 2.01929 3.59856 2.01929C2.981 2.01929 2.48417 2.4866 2.48417 3.04823C2.48417 3.61415 2.981 4.07717 3.59856 4.07717Z" fill="black"/>
		</svg>
		`;
	},
	music(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5 9V2.06667L11 1V7.93333" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 10C4.10457 10 5 9.32843 5 8.5C5 7.67157 4.10457 7 3 7C1.89543 7 1 7.67157 1 8.5C1 9.32843 1.89543 10 3 10Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M9.5 9C10.3284 9 11 8.32843 11 7.5C11 6.67157 10.3284 6 9.5 6C8.67157 6 8 6.67157 8 7.5C8 8.32843 8.67157 9 9.5 9Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	btc(options) {
		return `
		<svg width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.116 8.404L10 4.52L13.886 8.406L16.146 6.146L10 0L3.856 6.144L6.116 8.404ZM0 10L2.26 7.74L4.52 10L2.26 12.26L0 10ZM6.116 11.596L10 15.48L13.886 11.594L16.146 13.853L10 20L3.856 13.856L3.853 13.853L6.116 11.596ZM15.48 10L17.74 7.74L20 10L17.74 12.26L15.48 10ZM12.294 9.998V10L10 12.294L7.709 10.004L7.705 10L7.709 9.997L8.11 9.595L8.305 9.4L10 7.706L12.294 9.998Z" fill="#FFB441"/>
		</svg>
		`;
	},
	clock(options) {
		return `
		<svg width="${options.width}" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 24C18.5634 24 24 18.575 24 12C24 5.43659 18.5634 0 11.9884 0C5.42498 0 0 5.43659 0 12C0 18.575 5.43659 24 12 24ZM12 21.6418C6.65634 21.6418 2.3698 17.3437 2.3698 12C2.3698 6.65634 6.64472 2.3698 11.9884 2.3698C17.332 2.3698 21.6302 6.65634 21.6418 12C21.6418 17.3437 17.3437 21.6418 12 21.6418ZM11.9884 6.60987C12.6389 6.60987 13.1849 6.06389 13.1849 5.41336C13.1849 4.75121 12.6389 4.22846 11.9884 4.22846C11.3262 4.22846 10.8035 4.75121 10.8035 5.41336C10.8035 6.06389 11.3379 6.60987 11.9884 6.60987ZM7.38819 8.63117C8.05034 8.63117 8.58471 8.08519 8.58471 7.44627C8.58471 6.78412 8.05034 6.24976 7.38819 6.24976C6.74927 6.24976 6.20329 6.78412 6.20329 7.44627C6.20329 8.08519 6.73766 8.63117 7.38819 8.63117ZM10.153 13.8238C11.1404 14.7764 12.4995 14.5673 13.2778 13.4288L17.5644 7.34172C18.0407 6.65634 17.3553 5.98258 16.6699 6.44724L10.5363 10.6873C9.39787 11.4656 9.18877 12.8364 10.153 13.8238ZM5.45983 13.1965C6.12197 13.1965 6.64472 12.6505 6.64472 12C6.64472 11.3379 6.11036 10.8151 5.45983 10.8151C4.80929 10.8151 4.26331 11.3379 4.26331 12C4.26331 12.6505 4.80929 13.1965 5.45983 13.1965ZM18.5286 13.1965C19.1675 13.1965 19.7135 12.6505 19.7135 12C19.7135 11.3379 19.1675 10.8151 18.5286 10.8151C17.8664 10.8151 17.332 11.3379 17.332 12C17.332 12.6505 17.8664 13.1965 18.5286 13.1965ZM7.41142 17.7502C8.07357 17.7502 8.59632 17.2043 8.59632 16.5653C8.59632 15.9032 8.06196 15.3688 7.41142 15.3688C6.76089 15.3688 6.21491 15.9032 6.21491 16.5653C6.21491 17.2043 6.76089 17.7502 7.41142 17.7502ZM16.577 17.7502C17.2159 17.7502 17.7619 17.2043 17.7619 16.5653C17.7619 15.9032 17.2159 15.3688 16.577 15.3688C15.9148 15.3688 15.3804 15.9032 15.3804 16.5653C15.3804 17.2043 15.9148 17.7502 16.577 17.7502Z" fill="black"/>
		</svg>
		`;
	},
	times(options) {
		return `
		<svg width="${options.width}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.87 26.87">
      <path id="close" d="M10.5,9v.5H19a.5.5,0,1,1,0,1H10.5V19a.5.5,0,1,1-1,0V10.5H1a.5.5,0,0,1,0-1H9.5V1a.5.5,0,0,1,1,0Z" transform="translate(13.435 -0.707) rotate(45)"></path>
    </svg>
		`;
	},
	metamask(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M23.8138 1.00003L14.4358 8.50201L16.1775 4.07602L23.8138 1.00003Z" fill="#E17726" stroke="#E17726" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M2.18652 1.00003L11.4793 8.57301L9.82289 4.07602L2.18652 1.00003Z" fill="#E27625" stroke="#E27625" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M20.4425 18.3909L17.9478 22.5129L23.286 24.0959L24.8116 18.4819L20.4425 18.3909Z" fill="#E27625" stroke="#E27625" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M1.19751 18.4819L2.71383 24.0959L8.05204 22.5129L5.56657 18.3909L1.19751 18.4819Z" fill="#E27625" stroke="#E27625" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.76053 11.4261L6.27295 13.8531L11.5648 14.1071L11.3858 7.96414L7.76053 11.4261Z" fill="#E27625" stroke="#E27625" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M18.2391 11.4258L14.5572 7.89285L14.4348 14.1068L19.7266 13.8528L18.2391 11.4258Z" fill="#E27625" stroke="#E27625" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M8.05347 22.5132L11.2457 20.8372L8.49585 18.5232L8.05347 22.5132Z" fill="#E27625" stroke="#E27625" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14.7556 20.8372L17.9478 22.5132L17.5054 18.5232L14.7556 20.8372Z" fill="#E27625" stroke="#E27625" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M17.9478 22.5129L14.7556 20.8369L15.0097 23.0809L14.9819 24.0249L17.9478 22.5129Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M8.05347 22.5129L11.0194 24.0249L11.0008 23.0809L11.2457 20.8369L8.05347 22.5129Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.0757 17.0402L8.42017 16.1982L10.2938 15.2742L11.0757 17.0402Z" fill="#233447" stroke="#233447" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14.9258 17.0402L15.7077 15.2742L17.5906 16.1982L14.9258 17.0402Z" fill="#233447" stroke="#233447" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M8.05263 22.513L8.51356 18.391L5.56714 18.482L8.05263 22.513Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M17.4873 18.3909L17.9482 22.5129L20.443 18.4819L17.4873 18.3909Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M19.7266 13.8528L14.4348 14.1068L14.9245 17.0398L15.7063 15.2738L17.589 16.1978L19.7266 13.8528Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M8.41993 16.1978L10.2933 15.2738L11.0751 17.0398L11.5648 14.1068L6.27295 13.8528L8.41993 16.1978Z" fill="#CC6228" stroke="#CC6228" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M6.27295 13.8528L8.4953 18.5228L8.42017 16.1978L6.27295 13.8528Z" fill="#E27525" stroke="#E27525" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M17.59 16.1979L17.5056 18.5229L19.728 13.8529L17.59 16.1979Z" fill="#E27525" stroke="#E27525" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.5642 14.1071L11.0745 17.04L11.6959 20.502L11.8276 15.9441L11.5642 14.1071Z" fill="#E27525" stroke="#E27525" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14.4363 14.107L14.1821 15.934L14.3046 20.5019L14.926 17.04L14.4363 14.107Z" fill="#E27525" stroke="#E27525" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14.9258 17.0398L14.3044 20.5018L14.7561 20.8368L17.5059 18.5228L17.5902 16.1978L14.9258 17.0398Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M8.42017 16.1978L8.49529 18.5227L11.2451 20.8367L11.6967 20.5017L11.0754 17.0398L8.42017 16.1978Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14.9831 24.025L15.0109 23.081L14.7763 22.858H11.2262L11.0008 23.081L11.0193 24.025L8.05347 22.513L9.08939 23.426L11.1983 25H14.8041L16.9131 23.426L17.949 22.513L14.9831 24.025Z" fill="#C0AC9D" stroke="#C0AC9D" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14.7553 20.8368L14.3037 20.5018H11.6958L11.2441 20.8368L10.9993 23.0808L11.2246 22.8578H14.7748L15.0094 23.0808L14.7553 20.8368Z" fill="#161616" stroke="#161616" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M24.2088 8.99001L24.9999 4.84802L23.8137 1.00003L14.7556 8.24901L18.2399 11.426L23.1636 12.98L24.2469 11.609L23.7757 11.244L24.5288 10.502L23.9547 10.015L24.7078 9.39601L24.2088 8.99001Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M1 4.84802L1.80036 8.99001L1.29214 9.39601L2.0452 10.015L1.47113 10.502L2.2242 11.244L1.75307 11.609L2.83629 12.98L7.75997 11.426L11.2443 8.24901L2.18617 1.00003L1 4.84802Z" fill="#763E1A" stroke="#763E1A" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M23.1638 12.98L18.2401 11.426L19.7277 13.853L17.5056 18.523L20.4428 18.482H24.8118L23.1638 12.98Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.75991 11.4261L2.83625 12.9801L1.19751 18.482H5.56657L8.49442 18.523L6.27233 13.8531L7.75991 11.4261Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14.4357 14.1067L14.7557 8.2487L16.1774 4.07571H9.82275L11.2445 8.2487L11.5644 14.1067L11.6869 15.9537L11.6961 20.5017H14.304L14.3133 15.9537L14.4357 14.1067Z" fill="#F5841F" stroke="#F5841F" stroke-width="0.224361" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	download(options) {
		return `
		<svg width="${options.width}" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.4927 12.7368C10.6758 12.7368 10.8369 12.6782 11.0054 12.5098L13.4663 10.1367C13.5908 10.0122 13.6567 9.88037 13.6567 9.70459C13.6567 9.36768 13.3857 9.11865 13.0562 9.11865C12.8877 9.11865 12.7192 9.19189 12.6021 9.32373L11.5693 10.415L11.1006 10.9497L11.1738 9.86572V2.27051C11.1738 1.91162 10.8662 1.604 10.4927 1.604C10.1265 1.604 9.81885 1.91162 9.81885 2.27051V9.86572L9.89209 10.957L9.41602 10.415L8.39062 9.32373C8.27344 9.19189 8.09766 9.11865 7.9292 9.11865C7.59961 9.11865 7.32861 9.36768 7.32861 9.70459C7.32861 9.88037 7.40186 10.0122 7.52637 10.1367L9.9873 12.5098C10.1558 12.6782 10.3169 12.7368 10.4927 12.7368ZM6.28125 17.4829H14.7114C16.2935 17.4829 17.1138 16.6699 17.1138 15.1099V7.89551C17.1138 6.33545 16.2935 5.52246 14.7114 5.52246H12.7266V6.95801H14.6235C15.2974 6.95801 15.6782 7.30957 15.6782 8.02002V14.9854C15.6782 15.6958 15.2974 16.0474 14.6235 16.0474H6.36914C5.68799 16.0474 5.31445 15.6958 5.31445 14.9854V8.02002C5.31445 7.30957 5.68799 6.95801 6.36914 6.95801H8.28076V5.52246H6.28125C4.69922 5.52246 3.87891 6.33545 3.87891 7.89551V15.1099C3.87891 16.6699 4.69922 17.4829 6.28125 17.4829Z" fill="#2B8EFF"/>
		</svg>
		`;
	},
	hamburger(options) {
		return `
		<svg width="${options.width}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#85D399" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
		`;
	}
}
//
// Metamask function
//
const shorten_user_address = (address) => {
	return `<span style="margin-right: 12px;">${address.substring(0, 5)}...${address.substring(address.length - 4)}</span> ${render_icon.metamask({ width: 18 })}`;
}
const change_state_button_metamask = (address, return_only_name) => {
	if (!address) {
		if (return_only_name) return 'Connect Wallet';
		window.location.reload();
		return;
	};
	localStorage.setItem('id', address);
	if (return_only_name) return shorten_user_address(address);
	document.querySelector('.header .btn').innerHTML = shorten_user_address(address);
}

const handle_metamask_events = () => {
	window.ethereum.on('accountsChanged', (accounts) => {
		console.log('account change', accounts);
		change_state_button_window.ethereum(accounts[0]);
	});

	window.ethereum.on('chainChanged', (chainId) => {
		console.log('Network change')
		window.location.reload();
	});

	window.ethereum.on('disconnect', handler => {
		console.log('Disconnect metamask', handler)
	});
}

const handle_metamask_network = async ({ chainId, name, symbol, explorer }) => {
	const current_network = `0x${parseInt(window.ethereum.networkVersion).toString(16)}`;
	if (current_network !== chainId) {
		console.log('Suggess change network');
		try {
			await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: chainId }]
			});
		} catch (err) {
			if (err.code === 4902) {
				await window.ethereum.request({
					method: 'wallet_addEthereumChain',
					params: [
						{
							chainName: name,
							chainId: chainId,
							nativeCurrency: { name: symbol, decimals: 18, symbol: symbol },
							rpcUrls: [explorer]
						}
					]
				});
			}
		}
	}
	try {
		let accounts = await window.ethereum.request({ method: 'eth_accounts' });
		if (!accounts.length) {
			localStorage.removeItem('id');
			change_state_button_metamask('', true);
		} else {
			if (accounts[0] != localStorage.getItem('id')) {
				localStorage.setItem('id', accounts[0])
			}
		}
	} catch (e) {
		toast(e.message);
	}
	
}

const init_metamask_web3 = async () => {
	window.web3 = await Moralis.enableWeb3();
	window.ethers = Moralis.web3Library;
	await handle_metamask_network(window.supported_network || {});
	handle_metamask_events();
	return true;
}


(async () => {
	handle_metamask_network(window.supported_network || {});
	const serverUrl = 'https://uke6csg1zn8x.usemoralis.com:2053/server';
	const appId = '5xvcLzM5kb5XTxM8lWwB8hyO68p3UQMhGpGYQ0A9';
	Moralis.start({ serverUrl, appId });
})();

export {
	create_element,
	remove_element,
	render_icon,
	toast,
	change_state_button_metamask,
	init_metamask_web3
}