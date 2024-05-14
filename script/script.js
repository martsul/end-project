// SWIPER //

let swiper = (
  backBtn,
  nextBtn,
  cards,
  timeEl,
  filedChangingPosition,
  timingFuncOn,
  fieldForSwipe,
  startSwipe,
  thereAreArrow
) => {
  let swiperIteration = 0;
  let leftPosition = 0;
  let swipeTurning;

  if (thereAreArrow) {
    let disabledButton = () => {
      switch (swiperIteration) {
        case 0:
          backBtn.disabled = true;
          nextBtn.disabled = false;
          break;

        case cards.length - 1:
          backBtn.disabled = false;
          nextBtn.disabled = true;
          break;

        default:
          backBtn.disabled = false;
          nextBtn.disabled = false;
          break;
      }
    };

    disabledButton();

    backBtn.addEventListener("click", () => {
      swiperIteration--;
      leftPosition += 100;

      filedChangingPosition.style.left = `${leftPosition}%`;

      disabledButton();
    });

    nextBtn.addEventListener("click", () => {
      swiperIteration++;
      leftPosition -= 100;

      filedChangingPosition.style.left = `${leftPosition}%`;

      disabledButton();
    });
  }

  if (window.innerWidth <= startSwipe && timingFuncOn) {
    let lastIteration = 0;

    timeEl[0].classList.add("time-animation-on");

    setInterval(() => {
      lastIteration = swiperIteration;

      if (swiperIteration === cards.length - 1) {
        swiperIteration = 0;
        leftPosition = 0;
      } else {
        swiperIteration++;
        leftPosition -= 100;
      }

      timeEl[lastIteration].classList.remove("time-animation-on");
      timeEl[swiperIteration].classList.add("time-animation-on");

      filedChangingPosition.style.left = `${leftPosition}%`;
    }, 3500);

    fieldForSwipe.forEach((element) => {
      element.addEventListener("touchstart", (event) => {
        swipeTurning = event.touches[0].clientX;
      });

      element.addEventListener("touchend", (event) => {
        swipeTurning -= event.changedTouches[0].screenX;

        if (swipeTurning > 10 && swiperIteration !== cards.length - 1) {
          lastIteration = swiperIteration;
          swiperIteration++;
          leftPosition -= 100;

          timeEl[lastIteration].classList.remove("time-animation-on");
          timeEl[swiperIteration].classList.add("time-animation-on");

          filedChangingPosition.style.left = `${leftPosition}%`;
        } else if (swipeTurning < -10 && swiperIteration !== 0) {
          lastIteration = swiperIteration;
          swiperIteration--;
          leftPosition += 100;

          timeEl[lastIteration].classList.remove("time-animation-on");
          timeEl[swiperIteration].classList.add("time-animation-on");

          filedChangingPosition.style.left = `${leftPosition}%`;
        }
      });
    });
  }
};

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

// // UNIVERSITIES //

if (document.querySelector("#universities")) {
  let cards = document.querySelectorAll(".universities__card");
  let backBtn, nextBtn, filedChangingPosition, imgs;

  cards.forEach((element) => {
    backBtn = element.querySelector(".universities__card-img-before");
    nextBtn = element.querySelector(".universities__card-img-next");
    filedChangingPosition = element.querySelector(
      ".universities__slider-field"
    );
    imgs = element.querySelectorAll(".universities__img-container");

    swiper(
      backBtn,
      nextBtn,
      imgs,
      NaN,
      filedChangingPosition,
      false,
      NaN,
      NaN,
      true
    );
  });

  let filtersButtonOff =
    '<span>Фильтры</span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="button-icon"><path d="M19.2569 -1.90735e-06H0.820313C0.388794 -1.90735e-06 0.0390625 0.34973 0.0390625 0.781248C0.0390625 2.95685 0.97168 5.03387 2.59781 6.47934L6.01929 9.52042C6.61255 10.0478 6.95282 10.8055 6.95282 11.5994V19.2178C6.95282 19.8404 7.64862 20.2136 8.16727 19.8677L12.7765 16.795C12.9938 16.6501 13.1244 16.4063 13.1244 16.145V11.5994C13.1244 10.8055 13.4647 10.0478 14.0579 9.52042L17.4793 6.47934C19.1054 5.03387 20.038 2.95685 20.038 0.781248C20.038 0.34973 19.6883 -1.90735e-06 19.2569 -1.90735e-06ZM16.4412 5.31143L13.0199 8.35266C12.0934 9.17633 11.5619 10.3597 11.5619 11.5993V15.7269L8.51517 17.758V11.5994C8.51517 10.3597 7.98371 9.17633 7.05719 8.35266L3.63587 5.31158C2.53937 4.3367 1.83945 3.00095 1.65207 1.56235H18.425C18.2376 3.00095 17.5378 4.3367 16.4412 5.31143Z"></path></svg>';
  let filtersButtonOn =
    '<img src="img/menu-close.png" alt="close" class="universities__filters-item-img">';

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
    document.querySelectorAll(".universities__card-container").forEach((e) => {
      e.classList.toggle("curtain-all");
      document
        .querySelector(".more")
        .querySelector(".button-icon")
        .classList.toggle("button-icon-all");
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
  let searchField = document.querySelector(".universities__search-filed");

  searchField.addEventListener("keyup", (event) => {
    let thereAreCards = false;
    let searchFieldValue = new RegExp(`${searchField.value}`, "i");

    staticAllCard.forEach((element) => {
      if (
        element
          .querySelector(".universities__card-name")
          .innerHTML.match(searchFieldValue)
      ) {
        thereAreCards = true;

        element.removeAttribute("style");
      } else {
        element.setAttribute("style", "display: none;");
      }

      if (thereAreCards) {
        document.querySelector(".more").removeAttribute("style");
        document
          .querySelector(".universities__nothing")
          .removeAttribute("style");
      } else {
        document.querySelector(".more").style.display = "none";
        document.querySelector(".universities__nothing").style.display =
          "inline-block";
      }
    });
  });
}

// UNIVERSITY //

if (document.querySelector("#university")) {
  swiper(
    document.querySelector("#left-gallery-button"),
    document.querySelector("#right-gallery-button"),
    document.querySelectorAll(".university__slider-card"),
    document.querySelectorAll(".university__time-item"),
    document.querySelector(".university__slider-field"),
    true,
    document.querySelectorAll(".university__img"),
    1030,
    true
  );

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

// STUDENTS //

if (document.querySelector("#students")) {
  let buttonMore = document.querySelector(".more");
  let allCards = document.querySelectorAll(".students__card");
  let cardsBackBtn, cardsNextBtn, oneOfCards, swipingField;

  allCards.forEach((element) => {
    cardsBackBtn = element.querySelector(".students__before-btn");
    cardsNextBtn = element.querySelector(".students__next-btn");
    oneOfCards = element.querySelectorAll(".students__img-container");
    swipingField = element.querySelector(".students__slider-field");

    swiper(
      cardsBackBtn,
      cardsNextBtn,
      oneOfCards,
      "",
      swipingField,
      false,
      NaN,
      NaN,
      true
    );
  });

  buttonMore.addEventListener("click", (event) => {
    document
      .querySelector(".students__container")
      .classList.toggle("students__container-all");
    buttonMore
      .querySelector(".button-icon")
      .classList.toggle("button-icon-all");
  });
}

// VALIDATION FORM ERROR //

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

          if (ind === 2) {
            errorConditions(
              currentDate.value <= new Date().getFullYear() &&
                currentDate.value > 0,
              event,
              element
            );
          } else {
            errorConditions(
              currentDate.value >= new Date().getFullYear(),
              event,
              element
            );
          }

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

// HEADER CURTAIN //

let open =
  '<img src="img/menu-open.png" alt="menu" class="header__menu-button-img">';
let close =
  '<img src="img/menu-close.png" alt="menu" class="header__menu-button-img">';

document
  .querySelector(".header__menu-button")
  .addEventListener("click", (event) => {
    if (document.querySelector("#home")) {
      document.querySelector(".header").classList.toggle("header-on-home");
    } else {
      document.querySelector(".header").classList.toggle("header-on");
    }

    if (document.querySelector(".header__menu-button").innerHTML === close) {
      document.querySelector(".header__menu-button").innerHTML = open;
    } else {
      document.querySelector(".header__menu-button").innerHTML = close;
    }

    document
      .querySelector(".header__curtain")
      .classList.toggle("header__curtain-on");
  });

// APPLICATION //

document
  .querySelector(".header__application-button")
  .addEventListener("click", (event) => {
    document.location = "application.html";
  });

// HOME //

if (document.querySelector("#home")) {
  swiper(
    NaN,
    NaN,
    document.querySelectorAll(".preview__card"),
    document.querySelectorAll(".preview__time-item"),
    document.querySelector(".preview__slider-field"),
    true,
    document.querySelectorAll(".preview__card"),
    Infinity,
    false
  );

  swiper(
    document.querySelector("#left-universities-button"),
    document.querySelector("#right-universities-button"),
    document.querySelectorAll(".universities__slider-card"),
    document.querySelectorAll(".universities__time-item"),
    document.querySelector(".universities__slider-field"),
    true,
    document.querySelectorAll(".universities__card-container"),
    1030,
    true
  );

  swiper(
    document.querySelector("#left-reviews-button"),
    document.querySelector("#right-reviews-button"),
    document.querySelectorAll(".reviews__card"),
    document.querySelectorAll(".reviews__time-item"),
    document.querySelector(".reviews__slider-field"),
    true,
    document.querySelectorAll(".reviews__card-container"),
    1030,
    true
  );

  swiper(
    document.querySelector("#left-students-button"),
    document.querySelector("#right-students-button"),
    document.querySelectorAll(".students__slider-card"),
    document.querySelectorAll(".students__time-item"),
    document.querySelector(".students__slider-field"),
    true,
    document.querySelectorAll(".students__card-container"),
    1030,
    true
  );

  document.querySelectorAll(".preview__btn").forEach((element) => {
    element.addEventListener("click", (event) => {
      document.location = "#questions";
    });
  });

  let answerCard = document.querySelectorAll(".answer__card");
  let minus =
    '<svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon"><path d="M2 2H12"stroke-width="3"stroke-linecap="round" /></svg>';
  let plus =
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon"> <path d="M8 3V13M3 8H13" stroke-width="3" stroke-linecap="round"></path> </svg>';

  answerCard.forEach((element) => {
    element
      .querySelector(".answer__btn-more")
      .addEventListener("click", (event) => {
        element
          .querySelector(".answer__card-description")
          .classList.toggle("answer__card-description-all");
        if (element.querySelector(".answer__btn-more").innerHTML === minus) {
          element.querySelector(".answer__btn-more").innerHTML = plus;
        } else {
          element.querySelector(".answer__btn-more").innerHTML = minus;
        }
      });
  });
}

// ARTICLE //

if (document.querySelector("#article")) {
  swiper(
    document.querySelector(".same__border-left"),
    document.querySelector(".same__border-right"),
    document.querySelectorAll(".same__card"),
    document.querySelectorAll(".same__time-item"),
    document.querySelector(".same-slider-field"),
    true,
    document.querySelectorAll(".same-slider-container"),
    1030,
    true
  );
}
