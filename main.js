document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("logo").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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
});