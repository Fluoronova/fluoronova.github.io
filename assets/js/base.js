var loadingScreen = document.querySelector(".loading-screen");

if (loadingScreen) {
    var dots = loadingScreen.querySelector(".dots");
    var h1 = loadingScreen.querySelector("h1");
} else {
// I"ll put something here later for V1.0.0
}

window.addEventListener("load", () => {
    if (!loadingScreen) 
        return;

    if (dots) {
        dots.style.opacity = 1;
        h1.textContent = "Loaded!";
    }

    setTimeout(() => {
        loadingScreen.style.opacity = 0;
    }, 300);

    loadingScreen.addEventListener("transitionend", () => {
        loadingScreen.remove();
    }, { once: true });
});

document.addEventListener("DOMContentLoaded", async () => {
    await loadNavbar();
    await loadFooter();
    await loadVersionLabel();
    await loadCommitLabel();
});

async function loadFooter() {
    const container = document.getElementById("footer");
    if (!container)
        return;

    const response = await fetch("/assets/html/footer_test.html", {
        cache: "no-store"
    });

    container.innerHTML = await response.text();
}

async function loadNavbar() {
    const container = document.getElementById("navbar");
    if (!container)
        return;

    const response = await fetch("/assets/html/navbar.html", {
        cache: "no-store"
    });

    container.innerHTML = await response.text();
}

async function loadVersionLabel() {
    const versionLabel = document.querySelector(".version-label");
    if (!versionLabel)
        return;

    const response = await fetch("/assets/json/site_config.json", {
        cache: "no-store"
    });

    const config = await response.json();
    versionLabel.textContent = "V: " + config.version;
}

async function loadCommitLabel() {
    const commitLabel = document.querySelector(".commit-label");
    if (!commitLabel)
        return;

    fetch("https://api.github.com/repos/Fluoronova/Fluoronova.github.io/commits?per_page=1")
    .then(res => res.json())
    .then(data => {
        commitLabel.textContent = "Commit: " + data[0].sha.substring(0, 7);
    });   
}