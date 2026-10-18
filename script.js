
/* DAY 17 - Mission Search */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("missionSearch");
    const missionCards = document.querySelectorAll(".mission-card");
    const noResults = document.getElementById("noResults");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase().trim();
        let visibleCount = 0;

        missionCards.forEach(function (card) {

            const missionName = card.querySelector("h3");

            if (!missionName) {
                return;
            }

            const title = missionName.textContent.toLowerCase();

            if (title.includes(searchText)) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }

        });

        if (noResults) {
            noResults.hidden = visibleCount !== 0;
        }

    });

});
