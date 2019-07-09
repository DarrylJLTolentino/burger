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
})