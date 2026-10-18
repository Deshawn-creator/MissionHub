
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


/* DAY 45 - Improved Progress Tooltip */

const progressButton = document.querySelector(
    ".progress-track"
);

if (progressButton) {

    // Open or close when clicking the progress bar
    progressButton.addEventListener("click", function () {
        const isExpanded =
            progressButton.getAttribute("aria-expanded") === "true";

        progressButton.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );
    });

    // Close when clicking somewhere else
    document.addEventListener("click", function (event) {
        if (!progressButton.contains(event.target)) {
            progressButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });

    // Close when pressing Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            progressButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });

}


/* DAY 48 - Progress Details with Rotating Arrow */

const detailsButton = document.getElementById(
    "progress-details-button"
);

const progressDetails = document.getElementById(
    "progress-details"
);

const detailsButtonText = document.querySelector(
    ".details-button-text"
);

if (detailsButton && progressDetails && detailsButtonText) {

    detailsButton.addEventListener("click", function () {

        const isOpen = progressDetails.classList.toggle(
            "is-open"
        );

        detailsButtonText.textContent = isOpen
            ? "Hide Progress Details"
            : "Show Progress Details";

        detailsButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

}


