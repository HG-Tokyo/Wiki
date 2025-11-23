document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.paddingTop = 0;
    document.querySelector("body").style.height = "100%";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
    setTimeout(showPage, 1500);
    function showPage() {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.paddingTop = "12vh";
        document.querySelector("body").style.visibility = "visible";
        document.querySelector("body").style.overflow = "visible";
    }
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".nav");
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    hamburgerMenu.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
        hamburgerMenu.classList.toggle("active");
    });

    nav.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (event) => {
            const parentLi = link.closest("li");
            const isDropdownToggle =
                parentLi && parentLi.classList.contains("dropdown-menu");
        });
    });

    dropdownMenus.forEach((dropdown) => {
        const dropdownLink = dropdown.querySelector(".nav-link");
        const dropdownContent = dropdown.querySelector(".dropdown-content");

        dropdownLink.addEventListener("click", function (event) {
            event.preventDefault();
            dropdownContent.classList.toggle("dropdown-open");
            dropdownMenus.forEach((otherDropdown) => {
                if (otherDropdown !== dropdown) {
                    otherDropdown
                        .querySelector(".dropdown-content")
                        .classList.remove("dropdown-open");
                }
            });
        });
    });
    var rellax = new Rellax(".rellax");
    const stickyWrapper = document.querySelector(".sticky-wrapper");
    const sections = document.querySelectorAll(".blink-section");
    const numSections = sections.length;

    // Set the wrapper height dynamically based on the number of sections
    // Each section gets 100vh of scroll "space"
    stickyWrapper.style.height = `${numSections  * 88}vh`;

    // Function to update which section is active
    const updateActiveSection = () => {
        // Get the top position of the sticky container relative to the viewport
        const wrapperTop = stickyWrapper.offsetTop;
        // Get the current scroll position of the page
        const scrollPosition = window.scrollY;

        // Only run the logic if we are scrolling within the sticky wrapper
        if (
            scrollPosition >= wrapperTop &&
            scrollPosition < wrapperTop + stickyWrapper.offsetHeight
        ) {
            // Calculate how far we've scrolled inside the wrapper
            const scrollInsideWrapper = scrollPosition - wrapperTop;

            // Calculate the height allocated to each section for scrolling
            const scrollHeightPerSection = stickyWrapper.offsetHeight / (numSections + 1);

            // Determine the index of the current section
            let currentSectionIndex = Math.floor(
                scrollInsideWrapper / scrollHeightPerSection
            );
            // Ensure the index is within bounds
            currentSectionIndex = Math.max(
                0,
                Math.min(numSections - 1, currentSectionIndex)
            );

            // Update the 'active' class on the sections
            sections.forEach((section, index) => {
                if (index === currentSectionIndex) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active");
                }
            });
        }
    };

    // Listen for scroll events on the window
    window.addEventListener("scroll", updateActiveSection);

    // Initial call to set the correct section on page load
    updateActiveSection();
});

$(document).ready(function () {
    $("#image").attr("src", "/static/images/jabara_roll.gif?" + Math.random());
});
