const apiUrl = CONFIG.apiUrl

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    const msg = document.getElementById("message");
    if (res.ok) {
      window.location.href = "home.html"; 
      localStorage.setItem("token", data.token);
    } else {
      msg.textContent = data.error || "Erro no login";
    }
  } catch (error) {
    document.getElementById("message").textContent =
      "Erro ao conectar com o servidor";
    console.error("Erro de login:", error);
  }
});
