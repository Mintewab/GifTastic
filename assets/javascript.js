var topics = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King", "Heathers"];
function renderButtons() {
    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("tech");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
});