document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".menu a");

    const handleClick = (event) => {
        links.forEach(link => link.classList.remove("active"));
        event.target.classList.add("active");
    };

    links.forEach(link => link.addEventListener("click", handleClick));

    // Cleanup when the page is refreshed (not needed for vanilla JS, but good for SPAs)
    window.addEventListener("beforeunload", () => {
        links.forEach(link => link.removeEventListener("click", handleClick));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('.text', {
      strings: ["Full Stack Developer", "Technical Support Engineer", "QA Manual Tester"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.style.display = "none"; 
        successMessage.classList.remove("hidden");
    });
});
