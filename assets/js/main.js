window.onload = function() {
    let mainItems = document.querySelectorAll(".sidebar-item-container");
  mainItems.forEach((element, index) => {
    if (element.classList.contains("select-main-item")) {
      element.classList.remove("select-main-item");
    } else {
      console.log(index)
      // document.querySelectorAll(".subItem")[index].classList.add("show");
      // document
      //   .querySelectorAll(".side-Item")
      //   [index].classList.add("select-main-item");
      // element.classList.add("select-main-item");
    }
  });
}