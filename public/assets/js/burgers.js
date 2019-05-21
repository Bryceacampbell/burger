$(document).ready(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("succesfully added new burger");
            location.reload();
        });
    });
});