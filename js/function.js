document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.paddingTop = 0;
    document.querySelector("#loader").style.visibility = "visible";
    setTimeout(showPage, 1500);
    function showPage() {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.paddingTop = "12vh";
        document.querySelector("body").style.visibility = "visible";
    }
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
        hamburgerMenu.classList.toggle('active');
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            const parentLi = link.closest('li');
            const isDropdownToggle = parentLi && parentLi.classList.contains('dropdown-menu');
        });
    });

    dropdownMenus.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropdownLink.addEventListener('click', function(event) {
            
                event.preventDefault();
                dropdownContent.classList.toggle('dropdown-open');
                dropdownMenus.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.querySelector('.dropdown-content').classList.remove('dropdown-open');
                    }
                });
        });
    });
});
