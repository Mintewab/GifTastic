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


    $("button").on("click", function () {
        var robo = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        robo + "&api_key=MkBwE9oZHRjJB9ORgyh12voLQJVQX5cj&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(queryURL);

            console.log(response);





    
});