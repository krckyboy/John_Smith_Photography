// Utilities and reusable pieces of code are declared here 
// which are of simple design.
const ut = {
    // Pure vanilla $(document).ready
    ready: function (fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    },
    // Toggles a class on all elements, where theArgs are IDs in the DOM.
    toggleClassOnAllElements: function (classToToggle, ...theArgs) {
        for (arg of theArgs) {
            document.getElementById(arg).classList.toggle(classToToggle);
        }
    },
    // Toggles a class for
    toggleClassOnID: function (ID, classToToggle) {
        document.getElementById(ID).classList.toggle(classToToggle)
    }
}

class overlay_fs_item {
    constructor(element, overlay, toggle_button) {
        this.element = document.getElementById(element);
        this.overlay = document.getElementById(overlay);
        this.toggle_button = document.getElementById(toggle_button);
    }

    eventListeners() {
        this.element.addEventListener("click", e => {
            this.toggleVisibility();
            this.toggle_button_adjust();
            document.body.classList.toggle("overflow_hidden");
        })

        this.toggle_button.addEventListener("click", e => {
            if (this.toggle_button.classList.contains("overflay_fs_active")) {
                document.querySelector(".overlay_fs.active").classList.toggle("active");
                this.toggle_button_adjust();
            }
        })
    }

    toggleVisibility() {
        this.overlay.classList.toggle("active");
    }

    // transforms hamburger into X and changes it functionality to close the overflay, instead of navigation
    toggle_button_adjust() {
        this.toggle_button.classList.toggle("hamburger_transform_to_cross");
        this.toggle_button.classList.toggle("overflay_fs_active");
    }
}

ut.ready(function () {
    // Hamburger menu functionality and overlay
    const hamburger = (function () {
        const hamDOM = "hamburger";
        const mobile_nav = {
            overlay: "menu_overlay",
            nav_items: "mobile_nav",
            menu: "menu"
        }

        document.getElementById(hamDOM).addEventListener("click", (e) => {
            const hamElement = document.getElementById(hamDOM);
            if (!hamElement.classList.contains("overflay_fs_active")) {
                ut.toggleClassOnAllElements("active", hamDOM, mobile_nav.overlay, mobile_nav.nav_items)
                ut.toggleClassOnAllElements("faded", mobile_nav.overlay, mobile_nav.nav_items)
                ut.toggleClassOnID(hamDOM, "inactive");
                ut.toggleClassOnID(mobile_nav.menu, "translate_away");
                document.body.classList.toggle("overflow_hidden");
            }
        })
    })()

    const animations = (function () {
        // Animation for hero headline - sliding in from the side
        const hero_animation = (function () {
            const hero_text = document.getElementById("hero_text");
            setTimeout(() => {
                hero_text.style.animation = "moveInLeft .5s linear";
                hero_text.classList.remove("faded");
            }, 1500);
        }())
    })()

    const overlay_fs = (function () {
        if(document.querySelector(".sidebar")) {
            const archives = new overlay_fs_item("archives", "archives_menu", "hamburger");
            const categories = new overlay_fs_item("categories", "categories_menu", "hamburger");
            archives.eventListeners();
            categories.eventListeners();
        }
    }())

})