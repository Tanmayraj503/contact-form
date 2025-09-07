const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");

function showToast(message, type = "success") {
  toast.innerText = message;
  toast.style.background = type === "success" ? "green" : "red";
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 6000); // Hide after 3s
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showToast("✅ Message sent successfully!", "success");
      form.reset();
    } else {
      showToast("❌ Something went wrong.", "error");
    }
  } catch (error) {
    showToast("⚠️ Network error, try again later.", "error");
  }
});
