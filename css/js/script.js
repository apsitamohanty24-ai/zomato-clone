
document.addEventListener("DOMContentLoaded", function () {

    // Select HTML elements
    const searchInput = document.querySelector("main input");
    const main = document.querySelector("main");

    // Typing animation for the search placeholder
    const placeholderText =
        "Search for restaurant, cuisine or a dish";

    let index = 0;

    function typePlaceholder() {
        if (index <= placeholderText.length) {
            searchInput.placeholder =
                placeholderText.substring(0, index);

            index++;

            setTimeout(typePlaceholder, 65);
        }
    }

    typePlaceholder();

    // Search interaction
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const query = searchInput.value.trim();

            if (query !== "") {
                alert("You searched for: " + query);
            } else {
                alert("Please enter a restaurant, cuisine or dish!");
            }
        }
    });

    // Search focus animation
    searchInput.addEventListener("focus", function () {
        main.style.transition = "background-position 0.5s ease";
        main.style.backgroundPosition = "center";
    });

    // Logo click animation
    const logo = document.querySelector(".logo img");

    logo.addEventListener("click", function () {
        logo.style.transform = "scale(0.9)";

        setTimeout(function () {
            logo.style.transform = "scale(1)";
        }, 200);
    });

    logo.style.cursor = "pointer";
});
