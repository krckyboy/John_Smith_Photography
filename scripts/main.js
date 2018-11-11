import ut from "./modules/utility.js";
import OverlayFullScreen from "./modules/overlayFullScreen.js";

// Global DOM elements on website
const el = {
    body: document.body,
    hamburger: document.getElementById("hamburger"),
    mobileNav: {
        overlay: document.getElementById("menu_overlay"),
        navItems: document.getElementById("mobile_nav"),
        menu: document.getElementById("menu")
    }
};

ut.ready(function () {
    // Hamburger menu functionality and overlay
    const hamburger = (function () {
        el.hamburger.addEventListener("click", (e) => {
            if (!el.hamburger.classList.contains("overflay_fs_active")) {
                ut.toggleClassOnAllElements("active", el.hamburger, el.mobileNav.overlay, el.mobileNav.navItems)
                ut.toggleClassOnAllElements("faded", el.mobileNav.overlay, el.mobileNav.navItems)
                ut.toggleClass(el.hamburger, "inactive");
                ut.toggleClass(el.mobileNav.menu, "translate_away");
                ut.toggleClass(el.body, "overflow_hidden");
            }
        })
    })()

    const animations = (function () {
        // Animation for hero headline - sliding in from the side
        const heroAnimation = (function () {
            const heroText = document.getElementById("hero_text");
            setTimeout(() => {
                heroText.style.animation = "moveInLeft .5s linear";
                heroText.classList.remove("faded");
            }, 500);
        }())
    })()

    const overlay_fs = (function () {
        if (document.querySelector(".sidebar")) {
            const archives = new OverlayFullScreen("archives", "archives_menu", "hamburger");
            const categories = new OverlayFullScreen("categories", "categories_menu", "hamburger");
            archives.eventListeners();
            categories.eventListeners();
        }
    }())

})