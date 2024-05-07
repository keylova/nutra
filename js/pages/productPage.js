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
    const info_list = document.querySelector(".product-info_list").children;
    const product_info_divs = document.querySelector(
      ".product-info_rightbar"
    ).children;
    const rating_items = document.querySelectorAll(".rating-item");
    const howOrderPopup = document.querySelector(".how-order-popup");
    const orderBtn = document.querySelector("#order-btn");
    const orderPopup = document.querySelector(".order-popup");
    const topOrderBtn = document.querySelector(".top-order-btn");

    info_list[0].classList.add("active");

    product_info_divs[0].style.display = "flex";

    for (let i = 1; i < product_info_divs.length; i++) {
      let element = product_info_divs[i];
      element.style.display = "none";
    }

    function clearList() {
      for (const el of info_list) {
        el.classList.remove("active");
      }
    }

    function clearRightbar() {
      for (const el of product_info_divs) {
        el.style.display = "none";
      }
    }

    for (const el of info_list) {
      el.addEventListener("click", () => {
        clearList();

        el.classList.toggle("active");

        if (el.id == "structure") {
          clearRightbar();
          product_info_divs.namedItem("structure").style.display = "flex";
        }
        if (el.id == "info") {
          clearRightbar();
          product_info_divs.namedItem("info").style.display = "flex";
        }
        if (el.id == "method-of-application") {
          clearRightbar();
          product_info_divs.namedItem("method-of-application").style.display =
            "flex";
        }
        if (el.id == "rating") {
          clearRightbar();
          product_info_divs.namedItem("rating").style.display = "flex";
        }
        if (el.id == "reviews") {
          clearRightbar();
          product_info_divs.namedItem("reviews").style.display = "flex";
        }
        if (el.id == "in-other-city") {
          clearRightbar();
          product_info_divs.namedItem("in-other-city").style.display = "flex";
        }
        if (el.id == "in-other-country") {
          clearRightbar();
          product_info_divs.namedItem("in-other-country").style.display =
            "flex";
        }
        if (el.id == "on-other-language") {
          clearRightbar();
          product_info_divs.namedItem("on-other-language").style.display =
            "flex";
        }
      });
    }

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
      orderPopup.style.scale = "0";
      orderPopup.style.visibility = "hidden";
      document.body.style.overflow = "visible";
    });

    locationBtn.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      overlay.style.visibility = "visible";
      city_popup.style.scale = "1";
    });

    window.addEventListener("scroll", () => {
      if (scrollY >= 80) {
        header.classList.add("after-scroll");
      } else {
        header.classList.remove("after-scroll");
      }
    });

    searchInput.addEventListener("focus", () => {
      search_popup.style.display = "flex";
    });
    searchInput.addEventListener("blur", () => {
      search_popup.style.display = "none";
    });

    for (const item of rating_items) {
      if (
        item.getAttribute("data-item-rating") > "0%" &&
        item.getAttribute("data-item-rating") < "20%"
      ) {
        item.innerHTML = `
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      `;
      }
      if (
        item.getAttribute("data-item-rating") > "19%" &&
        item.getAttribute("data-item-rating") < "40%"
      ) {
        item.innerHTML = `
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      `;
      }
      if (
        item.getAttribute("data-item-rating") > "39%" &&
        item.getAttribute("data-item-rating") < "60%"
      ) {
        item.innerHTML = `
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      `;
      }
      if (
        item.getAttribute("data-item-rating") > "59%" &&
        item.getAttribute("data-item-rating") < "80%"
      ) {
        item.innerHTML = `
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating-empty.svg" alt="">
      `;
      }
      if (item.getAttribute("data-item-rating") >= "80%") {
        item.innerHTML = `
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      <img src="/img/rating.svg" alt="">
      `;
      }
    }

    howOrder.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      overlay.style.visibility = "visible";
      howOrderPopup.style.scale = "1";
      howOrderPopup.style.visibility = "visible";
    });

    orderBtn.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      overlay.style.visibility = "visible";
      orderPopup.style.visibility = "visible";
      orderPopup.style.scale = "1";
    });

    topOrderBtn.addEventListener("click", () => {
      document.body.style.overflow = "hidden";
      overlay.style.visibility = "visible";
      orderPopup.style.visibility = "visible";
      orderPopup.style.scale = "1";
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > orderBtn.offsetTop - 30) {
        topOrderBtn.style.top = "0";
        topOrderBtn.style.visibility = "visible";
      } else {
        topOrderBtn.style.top = "-100px";
        topOrderBtn.style.visibility = "hidden";
      }
    });
  } catch (error) {
    console.log(error);
  }
});
