function showSkill(skill){
  if(document.getElementsByClassName("card-skill")[0] !== undefined){
    document.getElementsByClassName("card-skill")[0].remove();
  }
  console.log(skill);
  const info = document.getElementById("aboutme");
  const card = document.createElement("div");
  card.classList.add("card-skill");
  info.append(card);
}