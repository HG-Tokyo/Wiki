document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#overview, #equipment, #structure, #cartridge, #lowerRec, #upperRec, #limitations, #conclusion");
    const navLinks = document.querySelectorAll(".menuList a");

    function setActiveLink() {
        let index = sections.length;

        // Walk backwards to find the first section above the middle of the viewport
        while (--index && window.scrollY + 300 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove("active"));
        const id = sections[index].id;
        const activeLink = document.querySelector(`.menuList a[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    setActiveLink();
    window.addEventListener("scroll", setActiveLink);
});
