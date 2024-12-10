document.querySelector(".my-work").addEventListener("click", () => {
  window.open("https://github.com/ninankhwashu", "_blank");
});

document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    let targetId = this.getAttribute("href").substring(1);
    let targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Thank you for your message! I will get back to you soon.");

  contactForm.reset();
});

let footer = document.querySelector("footer p");
let currentYear = new Date().getFullYear();
footer.innerHTML = `© ${currentYear} Nina Nkhwashu. All rights reserved.`;
