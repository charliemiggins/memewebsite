// Get Memes
window.onload = async () => {
    const memeGallery = document.getElementById("memeGallery");

    try {
        const response = await fetch("getMemes.php");
        const memeImages = await response.json();

        memeImages.forEach(image => {
            const fileName = image.split('/').pop().split('.')[0]; // Extract file name as title
            const memeDiv = document.createElement("div");
            memeDiv.className = "meme";

            memeDiv.innerHTML = `
                <h3>${fileName}</h3>
                <img src="${image}" alt="${fileName}">
                <a href="${image}" download="${fileName}">
                    <button class="download-btn">Download</button>
                </a>
            `;

            memeGallery.appendChild(memeDiv);
        });
    } catch (error) {
        console.error("Error loading memes:", error);
    }
};


// Search
function filterMemes() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const memes = document.querySelectorAll(".meme");

    memes.forEach(meme => {
        const altText = meme.querySelector("img").alt.toLowerCase();
        meme.style.display = altText.includes(searchTerm) ? "block" : "none";
    });
}

document.getElementById("paypalDonate").addEventListener("click", function () {
    window.open("https://www.paypal.com/donate/?hosted_button_id=S9MEFTQLRRD3Q", "_blank");
});