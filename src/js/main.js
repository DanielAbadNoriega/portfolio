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

    /* if (
      options.style.visibility !== "hidden" &&
      options.style.visibility !== ""
    ) {
      options.classList.add = "fadeOut";
      let fadeOut = setTimeout(() => {
        options.style.visibility = "hidden";
      }, 2000);
    } else {
      options.style.visibility = "visible";

      options.classList.add = "fadeIn";
    } */
  }
}

function showSkill(skill) {
  if (document.getElementsByClassName("card-skill")[0] !== undefined) {
    document.getElementsByClassName("card-skill")[0].remove();
  }
  console.log(skill);
  const info = document.getElementById("aboutme");
  const card = document.createElement("div");
  card.classList.add("card-skill");
  info.append(card);
}
