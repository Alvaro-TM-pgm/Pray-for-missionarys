/*
  VOZES DA MISSÃO
  Para trocar uma capa, coloque sua foto na pasta assets/covers e atualize o
  caminho cover abaixo. Os caminhos são relativos à raiz do site.
*/
const missionaries = [
  { name: "Endrik", cover: "assets/covers/endrik.jpg", video: "Endrik.mp4" },
  { name: "Guillermo Esquivel", cover: "assets/covers/guillermo-esquivel.jpg", video: "Guillermo Esquivel.mp4" },
  { name: "Victor Sotero", cover: "assets/covers/victor-sotero.jpg", video: "Victor Sotero.mp4" },
  { name: "Beatriz", cover: "assets/covers/beatriz.jpg", video: "beatirz.mp4" },
  { name: "Ellen Gregorio", cover: "assets/covers/ellen-gregorio.jpg", video: "ellen_gregorio_honduras.mp4" },
  { name: "Franciele Medeiros", cover: "assets/covers/franciele-medeiros.jpg", video: "franciele_medeiros.mp4" },
  { name: "Iago Alonso", cover: "assets/covers/iago-alonso.jpg", video: "iago_alonso.mp4" }
];

const grid = document.querySelector("#missionary-grid");
const lobby = document.querySelector("#lobby");
const playerScreen = document.querySelector("#player-screen");
const prayerScreen = document.querySelector("#prayer-screen");
const video = document.querySelector("#missionary-video");
const videoName = document.querySelector("#video-missionary-name");
const playerCounter = document.querySelector("#player-counter");
const videoError = document.querySelector("#video-error");
let currentIndex = -1;

function playIcon() {
  return '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.7c0-.7.8-1.1 1.4-.7l8 5.1a1 1 0 0 1 0 1.7l-8 5.1c-.6.4-1.4 0-1.4-.7V2.7Z" fill="currentColor"/></svg>';
}

function renderMissionaries() {
  grid.innerHTML = missionaries.map((person, index) => `
    <button class="mission-card" type="button" data-index="${index}" aria-label="Assistir ao vídeo de ${person.name}">
      <div class="card-image">
        <img src="${person.cover}" alt="Capa do vídeo de ${person.name}" loading="${index < 3 ? "eager" : "lazy"}">
        <span class="card-overlay"></span>
        <span class="play-button">${playIcon()}</span>
      </div>
      <div class="card-info">
        <div><h3>${escapeHTML(person.name)}</h3></div>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll(".mission-card").forEach(card => {
    card.addEventListener("click", () => openVideo(Number(card.dataset.index)));
  });

}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

async function openVideo(index) {
  const person = missionaries[index];
  if (!person) return;
  currentIndex = index;
  video.pause();
  video.removeAttribute("src");
  video.load();
  videoError.hidden = true;
  videoName.textContent = person.name;
  playerCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(missionaries.length).padStart(2, "0")}`;
  lobby.hidden = true;
  prayerScreen.classList.remove("active");
  prayerScreen.setAttribute("aria-hidden", "true");
  playerScreen.classList.add("active");
  playerScreen.setAttribute("aria-hidden", "false");
  document.body.classList.add("mode-player");
  video.src = person.video;
  video.load();

  // Tenta usar a tela cheia real do navegador. A chamada acontece após o clique
  // do visitante; se o navegador não permitir, a tela dedicada continua funcionando.
  if (playerScreen.requestFullscreen) {
    try { await playerScreen.requestFullscreen(); } catch (_) {}
  }

  try {
    await video.play();
  } catch (error) {
    // Em alguns navegadores a reprodução pode exigir uma segunda interação.
    // Os controles nativos continuam disponíveis para iniciar o vídeo.
    if (error.name === "NotAllowedError") return;
    videoError.hidden = false;
  }
}

async function closePlayer(showPrayer = false) {
  video.pause();
  video.removeAttribute("src");
  video.load();
  if (document.fullscreenElement) {
    try { await document.exitFullscreen(); } catch (_) {}
  }
  playerScreen.classList.remove("active");
  playerScreen.setAttribute("aria-hidden", "true");
  document.body.classList.remove("mode-player");

  if (showPrayer) {
    prayerScreen.classList.add("active");
    prayerScreen.setAttribute("aria-hidden", "false");
    document.body.classList.add("mode-prayer");
  } else {
    prayerScreen.classList.remove("active");
    prayerScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("mode-prayer");
    lobby.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

video.addEventListener("ended", () => closePlayer(true));
video.addEventListener("error", () => {
  if (playerScreen.classList.contains("active") && video.currentSrc) videoError.hidden = false;
});

document.querySelector("#back-from-player").addEventListener("click", () => closePlayer(false));
document.querySelector("#error-back").addEventListener("click", () => closePlayer(false));
document.querySelector("#return-to-lobby").addEventListener("click", () => closePlayer(false));

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && playerScreen.classList.contains("active") && document.fullscreenElement) {
    // O navegador encerra a tela cheia; o player permanece visível e pode ser fechado pelo botão.
  }
});

renderMissionaries();
