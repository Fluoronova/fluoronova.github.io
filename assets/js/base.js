document.addEventListener('DOMContentLoaded', function () {
  const versionLabel = document.querySelector('.version-label');
  if (!versionLabel) return;

  fetch('/assets/json/site_config.json', { cache: 'no-store' })
    .then(res => res.json())
    .then(config => {
      versionLabel.textContent = 'V: ' + config.version;
    });
});