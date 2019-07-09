$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newSleepState
        }).then(
            function() {
                console.log("changed devoured to", newDevour);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#name").val().trim(),
            devoured: $("[name=devoured]:unchecked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new button");
                location.reload();
            }
        );
    });
});