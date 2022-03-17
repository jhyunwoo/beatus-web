const intro = document.getElementById("intro");
const activity = document.getElementById("activity");
const team = document.getElementById("team");
const newbi = document.getElementById("newbi");
const setIntro = document.getElementById("setIntro");
const setActivity = document.getElementById("setActivity");
const setTeam = document.getElementById("setTeam");
const setNewbi = document.getElementById("setNewbi");

intro.addEventListener("click", () => {
  window.scrollBy({
    top: setIntro.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

activity.addEventListener("click", () => {
  window.scrollBy({
    top: setActivity.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

team.addEventListener("click", () => {
  window.scrollBy({
    top: setTeam.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

newbi.addEventListener("click", () => {
  window.scrollBy({
    top: setNewbi.getBoundingClientRect().top,
    behavior: "smooth",
  });
});
