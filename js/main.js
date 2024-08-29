document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("logo").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", function() {
        var topbar = document.getElementById("TopbarDiv");
        if (window.scrollY > 0) {
            topbar.classList.add("shadow");
        } else { 
            topbar.classList.remove("shadow");
        }
    });

    document.getElementById("ProjectsButton").addEventListener("click", function() {
        document.getElementById("ProjectsDiv").scrollIntoView({
            behavior: "smooth"
        });
    });

    document.getElementById("AboutButton").addEventListener("click", function() {
        document.getElementById("AboutDiv").scrollIntoView({
            behavior: "smooth"
        });
    });

    document.getElementById("ContactButton").addEventListener("click", function() {
        document.getElementById("ContactDiv").scrollIntoView({
            behavior: "smooth"
        });
    });

    document.getElementById("BurgerMenu").addEventListener("click", function(event) {
        var sideMenu = document.getElementById("sideMenu");
        var sideMenuOpen = sideMenu.style.width === "150px"; // Check if the menu is open
        
        // Toggle the side menu
        if (sideMenuOpen) {
            sideMenu.style.width = "0"; // Close the menu
        } else {
            sideMenu.style.width = "150px"; // Open the menu
        }
    
        // Stop the event from propagating to the document click handler
        event.stopPropagation();
    });
    
    // Close the side menu when clicking outside of it
    document.addEventListener("click", function(event) {
        var sideMenu = document.getElementById("sideMenu");
        var sideMenuOpen = sideMenu.style.width === "150px"; // Check if the menu is open
    
        // Check if the click is outside the side menu and it's open
        if (sideMenuOpen && !sideMenu.contains(event.target) && !event.target.matches("#BurgerMenu")) {
            sideMenu.style.width = "0"; // Close the menu
        }
    });
    
    // Close the side menu when clicking a link inside it
    var menuLinks = document.querySelectorAll("#sideMenu a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            document.getElementById("sideMenu").style.width = "0"; // Close the menu
        });
    });

    document.getElementById("Winter").addEventListener("click", function(){
        window.open("https://alfsiezar.itch.io/winter-1939", "_blank");
    });

    document.getElementById("Zombie").addEventListener("click", function(){
        window.open("https://alfsiezar.itch.io/zombie-survival", "_blank");
    });
});