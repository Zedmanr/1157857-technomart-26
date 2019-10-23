

    var link = document.querySelector(".loss-btn");
    var popup = document.querySelector(".modal");
    var close = document.querySelector(".close");
    var login = popup.querySelector("[name=name-client]");
    var form = popup.querySelector(".modal-form");
    var mailo = popup.querySelector("[name=email]");

    var isStorageSupport = true;
    var storage = "";

    var buythis = document.querySelectorAll(".buy-this");
    var addbasket = document.querySelector(".product-add");
    var continued = document.querySelector(".close-add");
    var continuedmore = document.querySelector(".continue-btn");

    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }


    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");

      if (storage) {
        login.value = storage;
        mailo.focus();
      } else {
        login.focus();
      }
    });


    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
      if (!login.value || !mailo.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("login", login.value);
        }
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });

    var mapLink = document.querySelector(".modal-map");

    var mapPopup = document.querySelector(".full-map");
    var mapClose = mapPopup.querySelector(".map-close");

    mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
        }
      }
    });

    for (var i = 0; i < buythis.length; i++)buythis[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      addbasket.classList.add("modal-show");
    });

    continued.addEventListener("click", function (evt) {
      evt.preventDefault();
      addbasket.classList.remove("modal-show");
    });

    continuedmore.addEventListener("click", function (evt) {
      evt.preventDefault();
      addbasket.classList.remove("modal-show");
    });
