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
           
            var results = response.data;

            $("#gifs-appear-here").empty();

            for (var i = 0; i < results.length; i++) {

                
                var roboDiv = $("<div>");

                
                var p = $("<p>").text("Rating: " + results[i].rating);

               
                var roboImage = $("<img>");
                
                roboImage.attr("src", results[i].images.fixed_height.url);

                t = results[i].images.fixed_height.url;                                

                t = t.slice(0, t.length - 4);

                t = t + "_s.gif";

                roboImage.attr("src", t);

                roboImage.on("click", function () {

                    var src=$(this).attr("src");
                    if ($(src.split("_")).last()[0] == "s.gif"){
                        $(this).attr("src",src.replace("_s.gif",".gif"));
                    }

                    else {

                     $(this).attr("src",src.replace(".gif","_s.gif"));

                    }

                 });

                 