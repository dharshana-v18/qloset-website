// Simple interactivity
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting Qloset! We'll get back to you soon.");
  e.target.reset();
});
