let errorText = '<div class="error-subtitle"><img src="img/error-icon.svg" alt="error"><p class="error-text">Reason of the error</p></div>';
let forms = document.querySelectorAll("form");

let errorСonditions = (condition, currentEvent, element) => {
	if (!condition) {
		currentEvent.preventDefault();
		if (!element.querySelector(".error-subtitle")) {
			element.querySelector("input").classList.add("input-error");
			element.querySelector("input").insertAdjacentHTML("afterend", errorText);
		}
	} else if (condition && element.querySelector(".error-subtitle")) {
		element.querySelector("input").classList.remove("input-error");
		element.querySelector(".error-subtitle").remove();
	}
}

forms.forEach(form => {
	form.addEventListener("submit", event => {
		let labelText = form.querySelectorAll(".label-text");
		let labelDate = form.querySelectorAll(".label-date");
		let labelTel = form.querySelectorAll(".label-tel");
		let radio = form.querySelectorAll(".radio-container");
		let labelEmail = form.querySelectorAll(".label-email");

		if (labelText) {
			labelText.forEach(element => {
				errorСonditions(element.querySelector("input").value, event, element);
			})
		}
		if (labelDate) {
			labelDate.forEach(element => {
				errorСonditions(element.querySelector("input").value, event, element);
			})
		}
		if (labelTel) {
			labelTel.forEach(element => {
				errorСonditions(element.querySelector("input").value, event, element);
				errorСonditions(+element.querySelector("input").value, event, element);
			})
		}
		if (labelEmail) {
			labelEmail.forEach(element => {
				errorСonditions(element.querySelector("input").value, event, element);
				errorСonditions(element.querySelector("input").value.match(/@/), event, element);
			})
		}
		if (radio) {
			radio.forEach(element => {
				let radioActive = false;
				element.querySelectorAll("input").forEach(currentInput => {
					if (currentInput.checked) {
						radioActive = currentInput.checked;
					}
				})

				if (radioActive && element.querySelector(".error-subtitle")) {
					element.querySelector(".error-subtitle").remove();
				} else if (!radioActive) {
					event.preventDefault();
					if (!element.querySelector(".error-subtitle")) {
						element.insertAdjacentHTML("beforeend", errorText);
					}
				}
			})
		}
	})

})
