
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

        if (visibleCount === 0) {
            noResults.hidden = false;
        } else {
            noResults.hidden = true;
        }
    });

});

/* DAY 44 - Toggle Progress Tooltip */

const progressButton = document.querySelector(
    ".progress-track"
);

if (progressButton) {
    progressButton.addEventListener("click", function () {
        const isExpanded =
            progressButton.getAttribute("aria-expanded") === "true";

        progressButton.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );
    });
}

