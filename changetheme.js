window.onload = function() {
    // Select the button
    const lightModeBtn = document.querySelector(".ally-light-mode");
    const darkModeBtn = document.querySelector(".ally-dark-mode");

    const blur = document.querySelector(".blur");
    const allyModal = document.querySelector(".ally-modal");

    // Select the stylesheet <link>
    const theme = document.querySelector("#theme-link");

    // Listen for a click on the button
    darkModeBtn.addEventListener("click", function(e) {
        // console.log("dsaada");
        // If the current URL contains "ligh-theme.css"
        if (theme.getAttribute("href") == "light-home.css") {
            // ... then switch it to "dark-theme.css"
            theme.href = "dark-home.css";
            blur.style.display = "none";
            allyModal.style.display = "none";
        } else {
            blur.style.display = "none";
            allyModal.style.display = "none";
        }
        e.preventDefault();
    })

    // Listen for a click on the button
    lightModeBtn.addEventListener("click", function(e) {
        // console.log("dsaada");
        // If the current URL contains "ligh-theme.css"
        if (theme.getAttribute("href") == "dark-home.css") {
            // ... then switch it to "dark-theme.css"
            theme.href = "light-home.css";
            blur.style.display = "none";
            allyModal.style.display = "none";
        } else {
            blur.style.display = "none";
            allyModal.style.display = "none";
        }
        e.preventDefault();
    })
}
