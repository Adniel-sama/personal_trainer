const logo = document.getElementById("brandLogo");
const fallback = document.getElementById("brandFallback");

logo.onload = () => {
  logo.style.display = "block";
  fallback.style.display = "none";
};

logo.onerror = () => {
  logo.style.display = "none";
  fallback.style.display = "block";
};