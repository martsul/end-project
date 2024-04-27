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

let filtersСurtain = document
	.querySelector('.universities__filters')
	.querySelectorAll('.universities__filters-chapter')

filtersСurtain.forEach(e => {
	e.querySelector('h4').addEventListener('click', event => {
		e.classList.toggle('universities__filters-chapter-all')
	})
})

let filtersParameters = document.querySelectorAll(
	'.universities__search-category'
)

filtersParameters.forEach(e => {
	e.addEventListener('click', event => {
		if (e.querySelector('.universities__search-radio').checked) {
			e.querySelector('.universities__search-radio').checked = true
		} else {
			e.querySelector('.universities__search-radio').checked = false
		}
	})
})

filtersParameters.forEach(e => {
	e.addEventListener('change', event => {
		filtersParameters.forEach(elem => {
			if (elem.querySelector('.universities__search-radio').oldChecked) {
				elem
					.querySelector('.universities__search-icon')
					.classList.toggle('universities__search-icon-on')
			} else {
				elem
					.querySelector('.universities__search-icon')
					.classList.remove('universities__search-icon-on')
			}
		})
	})
})