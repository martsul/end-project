// POP-UP //

document
	.querySelector('.header__application-button')
	.addEventListener('click', event => {
		document.body.setAttribute('class', 'body__pop-up-on')
		document
			.querySelector('.pop-up')
			.setAttribute('class', 'pop-up pop-up__turn-on')
	})

document.querySelector('.pop-up__close').addEventListener('click', event => {
	document.querySelector('.pop-up').setAttribute('class', 'pop-up')
	document.body.removeAttribute('class')
})

// POP-UP //

// UNIVERSITIES //

// let filtersСurtain = document
// 	.querySelector('.universities__filters')
// 	.querySelectorAll('.universities__filters-chapter')

// filtersСurtain.forEach(e => {
// 	e.querySelector('h4').addEventListener('click', event => {
// 		e.classList.toggle('universities__filters-chapter-all')
// 	})
// })

// let filtersParameters = document.querySelectorAll(
// 	'.universities__search-category'
// )

// filtersParameters.forEach((e, ind) => {
// 	e.addEventListener('click', event => {
// 		let filtersParametersOn = [false, 0]

// 		for (let i = 0; i < filtersParameters.length; i++) {
// 			if (
// 				filtersParameters[i]
// 					.querySelector('.universities__search-icon')
// 					.classList.contains('universities__search-icon-on')
// 			) {
// 				filtersParametersOn = [true, i]
// 			}
// 		}

// 		if (filtersParametersOn[0] && filtersParametersOn[1] === ind) {
// 			filtersParameters[filtersParametersOn[1]]
// 				.querySelector('.universities__search-icon')
// 				.classList.remove('universities__search-icon-on')
// 		} else if (filtersParametersOn[0]) {
// 			e.querySelector('.universities__search-icon').classList.add(
// 				'universities__search-icon-on'
// 			)
// 			filtersParameters[filtersParametersOn[1]]
// 				.querySelector('.universities__search-icon')
// 				.classList.remove('universities__search-icon-on')
// 		} else {
// 			e.querySelector('.universities__search-icon').classList.add(
// 				'universities__search-icon-on'
// 			)
// 		}
// 	})
// })

// document
// 	.querySelector('.more')
// 	.addEventListener('click', event => {
// 		document.querySelectorAll('.curtain-off').forEach(e => {
// 			e.classList.toggle('curtain-all')
// 		})
// 	})

// UNIVERSITY //

let programMore = document.querySelectorAll('.university__program')
let minus =
	'<svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon"><path d="M2 2H12"stroke-width="3"stroke-linecap="round" /></svg>'
let plus =
	'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon"> <path d="M8 3V13M3 8H13" stroke-width="3" stroke-linecap="round"></path> </svg>'

programMore.forEach(e => {
	let currentFiled = e.querySelector('.university__program-types')
	e.querySelector('.university__program-more').addEventListener(
		'click',
		event => {
			if (currentFiled.classList.contains('university__program-types-full')) {
				e.querySelector('.university__program-more').innerHTML = plus
				currentFiled.classList.remove('university__program-types-full')
			} else {
				e.querySelector('.university__program-more').innerHTML = minus
				currentFiled.classList.add('university__program-types-full')
			}
		}
	)
})
