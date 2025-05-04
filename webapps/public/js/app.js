! function (s) {
    "use strict";


    $(document).ready(function () {
        var logoutLinks = $("#logoutLink");

        logoutLinks.on("click", function () {
            localStorage.removeItem("config");
            window.location.href = "/";
        });
    });

    const namezElements = document.querySelectorAll("#namez");
    const roleElement = document.getElementById("rolez");
    const storedParams = JSON.parse(localStorage.getItem("config"));
    console.log(storedParams);
    if (namezElements && storedParams && storedParams.name) {
        namezElements.forEach((element) => {
            element.textContent = storedParams.name;
        });
        roleElement.textContent = storedParams.role;
    }

    const userRole = JSON.parse(localStorage.getItem("config"));

    document
        .querySelectorAll('li[style="display: none;"] a[keyz]')
        .forEach(function (element) {
            const keyzValue = element.getAttribute("keyz");

            if (userRole.privilage[keyzValue]) {
                element.style.display = "block";

                let parentLi = element.closest("li");
                while (parentLi) {
                    parentLi.style.display = "block";
                    parentLi = parentLi.parentElement.closest("li");
                }
            } else {
                element.closest("li").style.display = "none";
            }
        });

    const currentPath = window.location.pathname;

    const navLinks = document.querySelectorAll(".side-menu__item");

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");

            // Tambahkan style agar link tidak bisa diklik
            link.style.pointerEvents = "none";
            link.style.cursor = "default";

            const parentLi = link.closest("li");
            if (parentLi) {
                parentLi.classList.add("active");

                const hasSub = parentLi.closest(".has-sub");
                if (hasSub) {
                    hasSub.classList.add("open");
                }
            }
        }
    });

    const subMenus = document.querySelectorAll(".has-sub > .side-menu__item");

    subMenus.forEach((menu) => {
        menu.addEventListener("click", (event) => {
            event.preventDefault();
            const parentLi = menu.closest(".has-sub");
            if (parentLi) {
                parentLi.classList.toggle("open");
            }
        });
    });







}(jQuery);