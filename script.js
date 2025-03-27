document.addEventListener("DOMContentLoaded", function() {
    const fadeIns = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    fadeIns.forEach(element => {
        observer.observe(element);
    });
});
