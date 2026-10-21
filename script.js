
/* =====================================
   MISSIONHUB - GTA 6 MISSION DIRECTORY
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Add completed missions here.
    // Leave empty until your first guide is ready.
    const missions = [];

    const missionsPerPage = 10;
    let currentPage = 1;

    const searchInput =
        document.getElementById("missionSearch");

    const missionList =
        document.getElementById("missionList");

    const pagination =
        document.getElementById("pagination");

    // Only run on the mission directory page.
    if (!searchInput || !missionList || !pagination) {
        return;
    }

    function displayMissions() {

        const searchTerm =
            searchInput.value.toLowerCase().trim();

        const filteredMissions = missions.filter(
            mission =>
                mission.title.toLowerCase().includes(searchTerm)
        );

        const totalPages = Math.ceil(
            filteredMissions.length / missionsPerPage
        );

        if (currentPage > totalPages) {
            currentPage = Math.max(1, totalPages);
        }

        const startIndex =
            (currentPage - 1) * missionsPerPage;

        const pageMissions = filteredMissions.slice(
            startIndex,
            startIndex + missionsPerPage
        );

        missionList.innerHTML = "";
        pagination.innerHTML = "";

        // No walkthroughs published yet.
        if (missions.length === 0) {
            missionList.innerHTML = `
                <div class="directory-message">
                    <h2>Walkthroughs Coming Soon!</h2>
                    <p>
                        GTA 6 mission guides will be added
                        as they become available.
                    </p>
                </div>
            `;
            return;
        }

        // No matching search results.
        if (filteredMissions.length === 0) {
            missionList.innerHTML = `
                <div class="directory-message">
                    <h2>No Missions Found</h2>
                    <p>Try a different search.</p>
                </div>
            `;
            return;
        }

        // Display mission cards.
        pageMissions.forEach(function (mission) {

            const card = document.createElement("article");
            card.className = "directory-card";

            const heading = document.createElement("h2");
            heading.textContent = mission.title;

            const description = document.createElement("p");
            description.textContent = mission.description;

            const link = document.createElement("a");
            link.href = mission.url;
            link.textContent = "Read Walkthrough →";

            card.append(heading, description, link);
            missionList.appendChild(card);
        });

        // Create page number buttons.
        for (let page = 1; page <= totalPages; page++) {

            const button = document.createElement("button");
            button.textContent = page;

            if (page === currentPage) {
                button.classList.add("active");
                button.setAttribute("aria-current", "page");
            }

            button.addEventListener("click", function () {
                currentPage = page;
                displayMissions();
            });

            pagination.appendChild(button);
        }
    }

    // Search missions as the user types.
    searchInput.addEventListener("input", function () {
        currentPage = 1;
        displayMissions();
    });

    // Display directory when page loads.
    displayMissions();

});
