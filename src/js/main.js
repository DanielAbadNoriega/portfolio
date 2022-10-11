const menu = document.getElementById("dropmenu");

menu.addEventListener("click", dropdown);

function dropdown() {
  if (document.getElementById("options") !== undefined) {
    const options = document.getElementById("options");
    if(options.style.marginLeft == "200px" || options.style.marginLeft == ""){
      options.classList.add = "fadeIn";
      options.style.marginLeft = "0px";
    } else {
      options.style.marginLeft = "200px";
      options.classList.add = "fadeOut";
    }
  }
}
