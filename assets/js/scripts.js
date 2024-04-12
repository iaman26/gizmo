var myNav = document.getElementById("myNav");
var onNav = false;
myNav.addEventListener("click", function() {
    onNav = !onNav
    if (onNav === true) {
        document.getElementById("myNav").classList.add("w--open");
    } else {
        document.getElementById("myNav").classList.remove("w--open");
    }
});
