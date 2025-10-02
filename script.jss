function checkPassword() {
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error-message");

  if (pass === "22Aug" || pass === "19Jul") {
    // Redirect directly to Love Page
    window.location.href = "love.html";
  } else {
    error.textContent = "Only our special days can unlock my heart 💕";
    const box = document.querySelector(".lock-container");
    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 500);
  }
}

function celebrate() {
  alert("Yay! 🎉 You said YES 💖💍");
  const canvas = document.getElementById("confetti");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 5, 5);
  }
}
