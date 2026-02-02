// audio.js

const bgAudio = new Audio("audio/musique_fond.mp3");
bgAudio.loop = true;
bgAudio.volume = 0.35;

// récupère l'état dans localStorage
const savedTime = parseFloat(localStorage.getItem("bgTime")) || 0;
const savedMuted = localStorage.getItem("bgMuted") === "true";

bgAudio.currentTime = savedTime;
bgAudio.muted = savedMuted;

// démarre la musique si pas muted
if (!bgAudio.muted) bgAudio.play().catch(() => {});

// sauvegarde à chaque seconde
setInterval(() => {
  localStorage.setItem("bgTime", bgAudio.currentTime);
}, 1000);

// sauvegarde quand tu quittes la page
window.addEventListener("beforeunload", () => {
  localStorage.setItem("bgTime", bgAudio.currentTime);
  localStorage.setItem("bgMuted", bgAudio.muted);
});

// fonction publique pour toggle mute
function toggleMusic() {
  bgAudio.muted = !bgAudio.muted;
  localStorage.setItem("bgMuted", bgAudio.muted);
}
