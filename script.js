const target = new Date("2026-09-26T16:00:00+03:00").getTime();

function pad(n) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function updateCountdown() {
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      '<div class="party-time" style="font-family:var(--serif);font-size:34px;font-style:italic">IT’S PARTY TIME 💙</div>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section h2, .copy, .info-grid, .program, .dress-code, .button, .drink-list")
  .forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";
    el.style.transition = "opacity .8s ease, transform .8s ease";
    observer.observe(el);
  });


const sparkleContainer = document.querySelector(".sparkles");

const sparkleSymbols = ["✦", "✧", "·", "⋆"];

for (let i = 0; i < 120; i++) {
  const sparkle = document.createElement("span");

  sparkle.classList.add("sparkle");

  sparkle.textContent =
    sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];

  sparkle.style.left = Math.random() * 100 + "%";
  sparkle.style.top = Math.random() * 100 + "%";

  const size = Math.random() * 10 + 5;
  sparkle.style.fontSize = size + "px";

  sparkle.style.opacity = Math.random() * 0.6 + 0.2;

  sparkle.style.animationDuration =
    Math.random() * 4 + 3 + "s";

  sparkle.style.animationDelay =
    Math.random() * 5 + "s";

  sparkleContainer.appendChild(sparkle);
}
const dressCode = document.querySelector('.dress-code');

const wowObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dressCode.classList.add('wow-active');
        wowObserver.unobserve(dressCode);
      }
    });
  },
  {
    threshold: 0.45
  }
);

wowObserver.observe(dressCode);