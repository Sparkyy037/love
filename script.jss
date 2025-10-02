function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error-message");

  if (pass === "22Aug" || pass === "19Jul") {
    window.location.href = "home.html";
  } else {
    error.textContent = "Only our special days can unlock my heart 💕";
    document.querySelector(".lock-container").classList.add("shake");
    setTimeout(() => {
      document.querySelector(".lock-container").classList.remove("shake");
    }, 500);
  }
}

function celebrate() {
  alert("Yay! 🎉 You said YES 💖💍");
  // simple confetti fallback
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,50%)`;
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 5, 5);
  }
}
