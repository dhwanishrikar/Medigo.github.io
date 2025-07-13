// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector("#hero button");
    const searchInput = document.querySelector("#hero input");

    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim();

        if (query.length === 0) {
            alert("Please enter a doctor, specialty, or location to search.");
        } else {
            // Redirect to search.html with query in URL
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });
});
