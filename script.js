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

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function () {

  // esperar a que Google procese el envío
  setTimeout(() => {

    // ocultar formulario
    form.classList.add("d-none");

    // mostrar mensaje
    successMessage.classList.remove("d-none");

    // limpiar campos
    form.reset();

  }, 800);

});