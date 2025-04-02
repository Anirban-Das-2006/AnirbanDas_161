document.addEventListener("DOMContentLoaded", function () {
    let themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        let isLightMode = document.body.classList.contains("light-mode");
        themeToggle.textContent = isLightMode ? " Light Mode" : " Dark Mode";
        localStorage.setItem("theme", isLightMode ? "light" : "dark");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let scrollTopButton = document.getElementById("scrollTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });

    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
