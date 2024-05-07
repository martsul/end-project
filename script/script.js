// // POP-UP //

document
  .querySelector(".qustions__button")
  .addEventListener("click", (event) => {
    document.body.setAttribute("class", "body__pop-up-on");
    document
      .querySelector(".pop-up")
      .setAttribute("class", "pop-up pop-up__turn-on");
  });

document.querySelector(".pop-up__close").addEventListener("click", (event) => {
  document.querySelector(".pop-up").setAttribute("class", "pop-up");
  document.body.removeAttribute("class");
});

// // POP-UP //

// // UNIVERSITIES //

if (document.querySelector("#universities")) {
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

  filtersParameters.forEach((e, ind) => {
    e.addEventListener('click', event => {
      let filtersParametersOn = [false, 0]

      for (let i = 0; i < filtersParameters.length; i++) {
        if (
          filtersParameters[i]
            .querySelector('.universities__search-icon')
            .classList.contains('universities__search-icon-on')
        ) {
          filtersParametersOn = [true, i]
        }
      }

      if (filtersParametersOn[0] && filtersParametersOn[1] === ind) {
        filtersParameters[filtersParametersOn[1]]
          .querySelector('.universities__search-icon')
          .classList.remove('universities__search-icon-on')
      } else if (filtersParametersOn[0]) {
        e.querySelector('.universities__search-icon').classList.add(
          'universities__search-icon-on'
        )
        filtersParameters[filtersParametersOn[1]]
          .querySelector('.universities__search-icon')
          .classList.remove('universities__search-icon-on')
      } else {
        e.querySelector('.universities__search-icon').classList.add(
          'universities__search-icon-on'
        )
      }
    })
  })

  document
    .querySelector('.more')
    .addEventListener('click', event => {
      document.querySelectorAll('.curtain-off').forEach(e => {
        e.classList.toggle('curtain-all')
      })
    })
}

// // UNIVERSITY //

if (document.querySelector("#university")) {
  document.querySelector(".university__button").addEventListener("click", event => {
    document.location = "#qustions"
  })

  let programMore = document.querySelectorAll(".university__program");
  let minus =
    '<svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon"><path d="M2 2H12"stroke-width="3"stroke-linecap="round" /></svg>';
  let plus =
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon"> <path d="M8 3V13M3 8H13" stroke-width="3" stroke-linecap="round"></path> </svg>';

  programMore.forEach((e) => {
    let currentFiled = e.querySelector(".university__program-types");
    e.querySelector(".university__program-more").addEventListener(
      "click",
      (event) => {
        if (currentFiled.classList.contains("university__program-types-full")) {
          e.querySelector(".university__program-more").innerHTML = plus;
          currentFiled.classList.remove("university__program-types-full");
        } else {
          e.querySelector(".university__program-more").innerHTML = minus;
          currentFiled.classList.add("university__program-types-full");
        }
      }
    );
  });
}

// NEWS //

if (document.querySelector("#news")) {
  let buttonMore = document.querySelector(".more")
  buttonMore.addEventListener("click", event => {
    document.querySelector(".news__container").classList.toggle("news__container-all");
    buttonMore.querySelector(".button-icon").classList.toggle("button-icon-all");
  })
}

// NEWS //

// STUDENTS //

if (document.querySelector("#students")) {
  let buttonMore = document.querySelector(".more");

  buttonMore.addEventListener("click", event => {
    document.querySelector(".students__container").classList.toggle("students__container-all");
    buttonMore.querySelector(".button-icon").classList.toggle("button-icon-all");
  })
}

// STUDENTS //

// ERROR //

let errorText =
  '<div class="error-subtitle"><img src="img/error-icon.svg" alt="error"><p class="error-text">Reason of the error</p></div>';
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
};

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    let labelText = form.querySelectorAll(".label-text");
    let labelDate = form.querySelectorAll(".label-date");
    let labelTel = form.querySelectorAll(".label-tel");
    let radio = form.querySelectorAll(".radio-container");
    let labelEmail = form.querySelectorAll(".label-email");

    if (labelText) {
      labelText.forEach((element) => {
        errorСonditions(element.querySelector("input").value, event, element);
      });
    }
    if (labelDate) {
      labelDate.forEach((element) => {
        errorСonditions(element.querySelector("input").value, event, element);
      });
    }
    if (labelTel) {
      labelTel.forEach((element) => {
        errorСonditions(element.querySelector("input").value, event, element);
        errorСonditions(+element.querySelector("input").value, event, element);
      });
    }
    if (labelEmail) {
      labelEmail.forEach((element) => {
        errorСonditions(element.querySelector("input").value, event, element);
        errorСonditions(
          element.querySelector("input").value.match(/@/),
          event,
          element
        );
      });
    }
    if (radio) {
      radio.forEach((element) => {
        let radioActive = false;
        element.querySelectorAll("input").forEach((currentInput) => {
          if (currentInput.checked) {
            radioActive = currentInput.checked;
          }
        });

        if (radioActive && element.querySelector(".error-subtitle")) {
          element.querySelector(".error-subtitle").remove();
        } else if (!radioActive) {
          event.preventDefault();
          if (!element.querySelector(".error-subtitle")) {
            element.insertAdjacentHTML("beforeend", errorText);
          }
        }
      });
    }
  });
});

// ERROR //

// HEADER CURTAIN //

document.querySelector(".header__menu-button").addEventListener("click", event => {
  document.querySelector(".header__curtain").classList.toggle("header__curtain-on");
  document.querySelector(".header").classList.toggle("header-on")
})

// HEADER CURTAIN //

// APPLICATION //

document.querySelector(".header__application-button").addEventListener("click", event => {
  document.location = "application.html";
})

// APPLICATION //

// HOME_FEEDBACK //

if (document.querySelector("#home")) {
  document.querySelector(".preview__btn").addEventListener("click", event => {
    document.location = "#qustions";
  })

  let asnwerCard = document.querySelectorAll(".answer__card");

  asnwerCard.forEach(element => {
    element.querySelector(".answer__btn-more").addEventListener("click", event => {
      element.querySelector(".answer__card-description").classList.toggle("answer__card-description-all");
    })
  })
}

// HOME_FEEDBACK //