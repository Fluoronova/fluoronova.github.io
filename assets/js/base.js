// var loadingScreen = document.querySelector('.loading-screen');
// loadingScreen.style.opacity = 1
// window.addEventListener('load', function() {
//   loadingScreen.style.opacity = 0
// }) Soon™

document.addEventListener('DOMContentLoaded', async () => { // Can't belive I didn't think of this whole system earlier
    await loadNavbar();
    await loadVersionLabel();
});

async function loadNavbar() {
    const container = document.getElementById('navbar');
    if (!container)
        return;

    const response = await fetch('/assets/html/navbar.html', {
        cache: 'no-store'
    });

    container.innerHTML = await response.text();
}

async function loadVersionLabel() {
    const versionLabel = document.querySelector('.version-label');
    if (!versionLabel)
        return;

    const response = await fetch('/assets/json/site_config.json', {
        cache: 'no-store'
    });

    const config = await response.json();
    versionLabel.textContent = 'V: ' + config.version;
}