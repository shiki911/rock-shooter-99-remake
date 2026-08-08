document.getElementById("gamepage").style.display = "none";

setTimeout(() => {
    document.querySelector(".continue").classList.add("show");
}, 2500);

function gotopage() {

    const intro = document.getElementById("intro");
    const gamepage = document.getElementById("gamepage");

    // Start the black wipe
    intro.classList.add("wipe");

    // Wait for the animation to finish
    setTimeout(function() {

        // Hide the intro
        intro.style.display = "none";

        // Show the game page
        gamepage.style.display = "block";

    }, 1000);
}