// Get Memes
window.onload = async () => {
    const memeGallery = document.getElementById("memeGallery");

    try {
        const response = await fetch("getMemes.php");
        const memeImages = await response.json();

        memeImages.forEach(image => {
            const memeDiv = document.createElement("div");
            memeDiv.className = "meme";
            memeDiv.innerHTML = `<img src="${image}" alt="${image.split('/').pop()}">`;
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
