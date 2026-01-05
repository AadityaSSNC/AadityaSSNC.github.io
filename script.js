// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      el.classList.add("active");
    }
  });
});

// ===== SKILL BAR ANIMATION =====
const bars = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    const pos = bar.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) {
      bar.style.width = bar.dataset.level;
    }
  });
});

// ===== RESUME MODAL =====
function openResume() {
  document.getElementById("resumeModal").style.display = "flex";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
}

// ===== DARK / LIGHT MODE =====
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// ===== CURSOR EFFECT =====
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
