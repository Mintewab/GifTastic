var topics = ["scifi", " silicon Valley", "Big Bang Theory ", "Artificial Intellegence", "virtual Reality", "NASA", "IBM", "Tesla", "Dell", "Robot", "Fiber Optics"];
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
                var results = response.data;

                $("#gifs-appear-here").empty();
                for (var i = 0; i < results.length; i++) {


                    var roboDiv = $("<div>");


                    var p = $("<p>").text("Rating: " + results[i].rating);


                    var roboImage = $("<img>");

                    roboImage.attr("src", results[i].images.fixed_height.url);
                    roboImage.css({ "width": "300px", "height": "300px" });

                    t = results[i].images.fixed_height.url;

                    t = t.slice(0, t.length - 4);

                    t = t + "_s.gif";

                    roboImage.attr("src", t);

                    roboImage.on("click", function () {

                        var src = $(this).attr("src");
                        if ($(src.split("_")).last()[0] == "s.gif") {
                            $(this).attr("src", src.replace("_s.gif", ".gif"));
                        }

                        else {

                            $(this).attr("src", src.replace(".gif", "_s.gif"));

                        }

                    });
                    roboDiv.append(p);
                    roboDiv.append(roboImage);
                    $("#gifs-appear-here").prepend(roboDiv);
                }
            });
    });

}
$("#add-tech").on("click", function (event) {

    event.preventDefault();
    var tech = $("#tech-input").val().trim();
    topics.push(tech);
    renderButtons();
});
renderButtons();