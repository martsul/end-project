// // POP-UP //

document
  .querySelector(".questions__button")
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

let filtersButtonOff =
  '<span>Фильтры</span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="button-icon"><path d="M19.2569 -1.90735e-06H0.820313C0.388794 -1.90735e-06 0.0390625 0.34973 0.0390625 0.781248C0.0390625 2.95685 0.97168 5.03387 2.59781 6.47934L6.01929 9.52042C6.61255 10.0478 6.95282 10.8055 6.95282 11.5994V19.2178C6.95282 19.8404 7.64862 20.2136 8.16727 19.8677L12.7765 16.795C12.9938 16.6501 13.1244 16.4063 13.1244 16.145V11.5994C13.1244 10.8055 13.4647 10.0478 14.0579 9.52042L17.4793 6.47934C19.1054 5.03387 20.038 2.95685 20.038 0.781248C20.038 0.34973 19.6883 -1.90735e-06 19.2569 -1.90735e-06ZM16.4412 5.31143L13.0199 8.35266C12.0934 9.17633 11.5619 10.3597 11.5619 11.5993V15.7269L8.51517 17.758V11.5994C8.51517 10.3597 7.98371 9.17633 7.05719 8.35266L3.63587 5.31158C2.53937 4.3367 1.83945 3.00095 1.65207 1.56235H18.425C18.2376 3.00095 17.5378 4.3367 16.4412 5.31143Z"></path></svg>';
let filtersButtonOn =
  '<img src="img/menu-close.png" alt="close" class="universities__filters-item-img">';

if (document.querySelector("#universities")) {
  let filtersCurtain = document
    .querySelector(".universities__filters")
    .querySelectorAll(".universities__filters-chapter");

  filtersCurtain.forEach((e) => {
    e.querySelector("h4").addEventListener("click", (event) => {
      e.classList.toggle("universities__filters-chapter-all");
    });
  });

  let filtersParameters = document.querySelectorAll(
    ".universities__search-category"
  );

  filtersParameters.forEach((e, ind) => {
    e.addEventListener("click", (event) => {
      let filtersParametersOn = [false, 0];

      for (let i = 0; i < filtersParameters.length; i++) {
        if (
          filtersParameters[i]
            .querySelector(".universities__search-icon")
            .classList.contains("universities__search-icon-on")
        ) {
          filtersParametersOn = [true, i];
        }
      }

      if (filtersParametersOn[0] && filtersParametersOn[1] === ind) {
        filtersParameters[filtersParametersOn[1]]
          .querySelector(".universities__search-icon")
          .classList.remove("universities__search-icon-on");
      } else if (filtersParametersOn[0]) {
        e.querySelector(".universities__search-icon").classList.add(
          "universities__search-icon-on"
        );
        filtersParameters[filtersParametersOn[1]]
          .querySelector(".universities__search-icon")
          .classList.remove("universities__search-icon-on");
      } else {
        e.querySelector(".universities__search-icon").classList.add(
          "universities__search-icon-on"
        );
      }
    });

    e.querySelector("input").addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  document.querySelector(".more").addEventListener("click", (event) => {
    document.querySelectorAll(".curtain-off").forEach((e) => {
      e.classList.toggle("curtain-all");
    });
  });

  document
    .querySelector(".universities__filters-btn")
    .addEventListener("click", (event) => {
      document
        .querySelector(".universities__filters")
        .classList.toggle("universities__filters-on");
      document
        .querySelector(".universities__filters-btn")
        .classList.toggle("universities__filters-btn-on");
      document
        .querySelector(".universities__filters-container")
        .classList.toggle("universities__filters-container-on");
      document
        .querySelector(".universities__filters-btn")
        .classList.toggle("button");
      document.body.classList.toggle("body__pop-up-on");

      if (
        document.querySelector(".universities__filters-btn").innerHTML ==
        filtersButtonOn
      ) {
        document.querySelector(".universities__filters-btn").innerHTML =
          filtersButtonOff;
      } else {
        document.querySelector(".universities__filters-btn").innerHTML =
          filtersButtonOn;
      }
    });

  let filters = document.querySelectorAll(".universities__filters-item");

  filters.forEach((element) => {
    element.addEventListener("change", (event) => {
      let filtersOn = false;

      filters.forEach((el) => {
        if (el.querySelector("input").checked) {
          filtersOn = true;
        }
      });

      if (filtersOn) {
        document.querySelector(
          ".universities__filters-item-btn"
        ).disabled = false;
      } else {
        document.querySelector(
          ".universities__filters-item-btn"
        ).disabled = true;
      }
    });
  });

  document
    .querySelector(".universities__filters-item-btn")
    .addEventListener("click", (event) => {
      document
        .querySelector(".universities__filters")
        .classList.toggle("universities__filters-on");
      document
        .querySelector(".universities__filters-btn")
        .classList.toggle("universities__filters-btn-on");
      document
        .querySelector(".universities__filters-container")
        .classList.toggle("universities__filters-container-on");
      document
        .querySelector(".universities__filters-btn")
        .classList.toggle("button");
      document.body.classList.toggle("body__pop-up-on");

      if (
        document.querySelector(".universities__filters-btn").innerHTML ==
        filtersButtonOn
      ) {
        document.querySelector(".universities__filters-btn").innerHTML =
          filtersButtonOff;
      } else {
        document.querySelector(".universities__filters-btn").innerHTML =
          filtersButtonOn;
      }
    });
    
    let staticAllCard = document.querySelectorAll(".universities__card");

    document.querySelector(".universities__search-filed").addEventListener("keyup", event => {
      let currentAllCard = staticAllCard;
      allCard[0].remove();
      console.log([...allCard]);
    })
}

// UNIVERSITY //

if (document.querySelector("#university")) {
  document
    .querySelector(".university__button")
    .addEventListener("click", (event) => {
      document.location = "#questions";
    });

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
  let buttonMore = document.querySelector(".more");
  buttonMore.addEventListener("click", (event) => {
    document
      .querySelector(".news__container")
      .classList.toggle("news__container-all");
    buttonMore
      .querySelector(".button-icon")
      .classList.toggle("button-icon-all");
  });
}

// NEWS //

// STUDENTS //

if (document.querySelector("#students")) {
  let buttonMore = document.querySelector(".more");

  buttonMore.addEventListener("click", (event) => {
    document
      .querySelector(".students__container")
      .classList.toggle("students__container-all");
    buttonMore
      .querySelector(".button-icon")
      .classList.toggle("button-icon-all");
  });
}

// STUDENTS //

// ERROR //

let errorText =
  '<div class="error-subtitle"><img src="img/error-icon.svg" alt="error"><p class="error-text">Reason of the error</p></div>';
let forms = document.querySelectorAll("form");

let errorConditions = (condition, currentEvent, element) => {
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
  let labelText = form.querySelectorAll(".label-text");
  let labelDate = form.querySelectorAll(".label-date");
  let labelTel = form.querySelectorAll(".label-tel");
  let radio = form.querySelectorAll(".radio-container");
  let labelEmail = form.querySelectorAll(".label-email");
  let submitForm = false;

  form.addEventListener("submit", (event) => {
    if (labelText) {
      labelText.forEach((element) => {
        errorConditions(element.querySelector("input").value, event, element);
      });
    }

    if (labelDate) {
      labelDate.forEach((element, ind) => {
        let currentDate = element.querySelector("input");

        if (currentDate.getAttribute("name") === "day") {
          errorConditions(
            currentDate.value <= 31 && currentDate.value > 0,
            event,
            element
          );
        } else if (currentDate.getAttribute("name") === "month") {
          let dayValueForMonth =
            labelDate[ind - 1].querySelector("input").value;

          switch (currentDate.value) {
            case "1":
              errorConditions(
                dayValueForMonth <= 31 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "2":
              errorConditions(
                dayValueForMonth <= 29 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "3":
              errorConditions(
                dayValueForMonth <= 31 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "4":
              errorConditions(
                dayValueForMonth <= 30 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "5":
              errorConditions(
                dayValueForMonth <= 31 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "6":
              errorConditions(
                dayValueForMonth <= 30 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "7":
              errorConditions(
                dayValueForMonth <= 31 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "8":
              errorConditions(
                dayValueForMonth <= 31 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "9":
              errorConditions(
                dayValueForMonth <= 30 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "10":
              errorConditions(
                dayValueForMonth <= 31 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "11":
              errorConditions(
                dayValueForMonth <= 30 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            case "12":
              errorConditions(
                dayValueForMonth <= 31 && dayValueForMonth > 0,
                event,
                labelDate[ind - 1]
              );
              errorConditions(true, event, element);
              break;

            default:
              errorConditions(false, event, element);
              break;
          }
        }
        if (currentDate.getAttribute("name") === "year") {
          let dayValueForYear = labelDate[ind - 2].querySelector("input").value;
          let monthValueForYear =
            labelDate[ind - 1].querySelector("input").value;

          errorConditions(
            currentDate.value <= new Date().getFullYear() &&
              currentDate.value > 0,
            event,
            element
          );

          if (currentDate.value % 4 !== 0 && monthValueForYear === "2") {
            errorConditions(
              dayValueForYear <= 28 && dayValueForYear > 0,
              event,
              labelDate[ind - 2]
            );
          } else if (currentDate.value % 4 === 0 && monthValueForYear === "2") {
            errorConditions(
              dayValueForYear <= 29 && dayValueForYear > 0,
              event,
              labelDate[ind - 2]
            );
          }
        }
      });
    }

    if (labelTel) {
      labelTel.forEach((element) => {
        errorConditions(element.querySelector("input").value, event, element);
        errorConditions(+element.querySelector("input").value, event, element);
      });
    }

    if (labelEmail) {
      labelEmail.forEach((element) => {
        errorConditions(element.querySelector("input").value, event, element);
        errorConditions(
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

    if (submitForm) {
      event.preventDefault();
    }
  });
});

// ERROR //

// HEADER CURTAIN //

document
  .querySelector(".header__menu-button")
  .addEventListener("click", (event) => {
    if (document.querySelector("#home")) {
      document.querySelector(".header").classList.toggle("header-on-home");
    } else {
      document.querySelector(".header").classList.toggle("header-on");
    }

    document
      .querySelector(".header__curtain")
      .classList.toggle("header__curtain-on");
  });

// HEADER CURTAIN //

// APPLICATION //

document
  .querySelector(".header__application-button")
  .addEventListener("click", (event) => {
    document.location = "application.html";
  });

// APPLICATION //

// HOME_FEEDBACK //

if (document.querySelector("#home")) {
  document.querySelector(".preview__btn").addEventListener("click", (event) => {
    document.location = "#questions";
  });

  let answerCard = document.querySelectorAll(".answer__card");

  answerCard.forEach((element) => {
    element
      .querySelector(".answer__btn-more")
      .addEventListener("click", (event) => {
        element
          .querySelector(".answer__card-description")
          .classList.toggle("answer__card-description-all");
      });
  });
}

// HOME_FEEDBACK //
