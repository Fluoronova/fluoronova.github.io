const latestVideos = document.getElementById("latestVideos");
const videoIds = [
    "QpHAebuGJl0",
    "QpHAebuGJl0",
    "QpHAebuGJl0",
    "QpHAebuGJl0",
    "QpHAebuGJl0",
];

latestVideos.innerHTML = "";

for (const id of videoIds) {
    const videoEmbed = document.createElement("div");
    videoEmbed.className = "video-card";

    videoEmbed.innerHTML = `
        <iframe src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>
    `;

    latestVideos.appendChild(videoEmbed);
}