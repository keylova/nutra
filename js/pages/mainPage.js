document.addEventListener("DOMContentLoaded", () => {
  try {
    const searchInput = document.querySelector("#search-input");
    const clearSearch = document.querySelector(".clear-search");
    const locationBtn = document.querySelector(".location");
    const howOrder = document.querySelector(".how-order");
    const overlay = document.querySelector(".overlay");
    const city_popup = document.querySelector(".city-popup");
    const search_popup = document.querySelector("#search-popup");
    const header = document.querySelector("header");
    const howOrderPopup = document.querySelector(".how-order-popup");

    searchInput.addEventListener("input", () => {
      if (searchInput.value == "") {
        clearSearch.style.transform = "translateX(50px)";
        search_popup.style.display = "none";
      } else {
        clearSearch.style.transform = "translateX(0)";
        search_popup.style.display = "flex";
      }
    });

    clearSearch.addEventListener("click", () => {
      searchInput.value = "";
      clearSearch.style.transform = "translateX(50px)";
      search_popup.style.display = "none";
    });

    overlay.addEventListener("click", (e) => {
      e.currentTarget.style.visibility = "hidden";
      city_popup.style.scale = "0";
      howOrderPopup.style.scale = "0";
      howOrderPopup.style.visibility = "hidden";
      document.body.style.overflow = "visible";
    });

    locationBtn.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      overlay.style.visibility = "visible";
      city_popup.style.scale = "1";
    });

    searchInput.addEventListener("focus", () => {
      search_popup.style.display = "flex";
    });
    searchInput.addEventListener("blur", () => {
      search_popup.style.display = "none";
    });

    howOrder.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      overlay.style.visibility = "visible";
      howOrderPopup.style.scale = "1";
      howOrderPopup.style.visibility = "visible";
    });
  } catch (error) {
    console.log(error);
  }
});
