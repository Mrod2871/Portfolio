// Immediately invoked function expression to encapsulate code and avoid coupling
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn"); //remove active state from previously active button
            this.classList.add("active-btn"); // Make the button that is clicked visually active
            document.querySelector(".active").classList.remove("active"); //Hide previous active buttons section
            document.getElementById(button.dataset.id).classList.add("active"); //get the value of the data-id attribute of the clicked button and add it to the active class to make section visibile
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");// when theme btn is clicked toggle on/off light mode
    })
})();