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
        hamDOM.addEventListener("click", (e) => {
            hamDOM.classList.toggle("active");
            hamDOM.classList.toggle("inactive");
        })
    })()
}) 
