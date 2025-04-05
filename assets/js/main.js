document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const form2 = document.getElementById("contactForm2");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  });
  form2.addEventListener("submit", function (event) {
    if (!form2.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form2.classList.add("was-validated");
  });
});

$(document).ready(function() {

    document.getElementById('navicon').onclick = function() {
        this.classList.toggle('open');
    }
    
  });