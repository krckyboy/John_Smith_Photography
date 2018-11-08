import ut from "./utility.js";

export default class OverlayFullScreenItem {
    constructor(element, overlay, toggle_button) {
        this.element = document.getElementById(element);
        this.overlay = document.getElementById(overlay);
        this.toggle_button = document.getElementById(toggle_button);
    }

    eventListeners() {
        this.element.addEventListener("click", e => {
            this.toggleVisibility();
            this.toggle_button_adjust();
            ut.toggleClassOnBody("overflow_hidden");
        })

        this.toggle_button.addEventListener("click", e => {
            if (this.toggle_button.classList.contains("overflay_fs_active")) {
                document.querySelector(".overlay_fs.active").classList.toggle("active");
                this.toggle_button_adjust();
                ut.toggleClassOnBody("overflow_hidden");
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