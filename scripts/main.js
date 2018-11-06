const utils = {
    // Pure vanilla $(document).ready
    ready: function(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
}

utils.ready(function() {
    const hamburger = (function() {
        const hamDOM = document.getElementById("hamburger");
        const mobile_nav = {
            overlay: document.getElementById("menu_overlay"),
            nav_items: document.getElementById("mobile_nav")
        }
        hamDOM.addEventListener("click", (e) => {
            hamDOM.classList.toggle("active");
            hamDOM.classList.toggle("inactive");
            mobile_nav.overlay.classList.toggle("faded");
            mobile_nav.nav_items.classList.toggle("faded");
            mobile_nav.overlay.classList.toggle("active");
            mobile_nav.nav_items.classList.toggle("active");
        })
    })()

    const animations = (function() {
        const hero_text = document.getElementById("hero_text");
        setTimeout(() => {
            hero_text.style.animation = "moveInLeft .5s linear";
            hero_text.classList.remove("faded");
        }, 1500);
    })()
}) 
