// ---List of API Keys available for spoonacular, must change in 2 locations---
// ---902b0ba573384b2d954de9933fd4c7ef
// ---65b67db8cfc84a6983b23e942fda13da
$(document).ready(function () {
    // -----GLOBAL VAR-----
    // string of user input ingredients from local storage
    // let ingredientsString = localStorage.getItem("ingredients")
    // console.log(ingredientsString);

    // -----build functions-----

    // ---build ingredient endpoint function---
    // function buildIngredientsURL() {
    //     let ingredientsAPIURL = "https://api.spoonacular.com/recipes/findByIngredients?"
    //     let ingredientsParams = {
    //         //route to user input id for ingredients
    //         apiKey: "65b67db8cfc84a6983b23e942fda13da",
    //         //route to user input id for recipe type (query)
    //         ingredients: ingredientsString,
    //         // //route to user input id for number of results
    //         // number: "",
    //     };
    //     console.log(ingredientsAPIURL + $.param(ingredientsParams));
    //     return ingredientsAPIURL + $.param(ingredientsParams);
    // }


    // show results function
    // function showResults(responseli) {
    //     // -----build recipe url-----
    //     let $display = $("#display");
    //     $display.empty();
    //     for (i = 0; i < 10; i++) {
    //         let li = $("<li>");
    //         let viewBtn = $("<a>");
    //         let saveBtn = $("<button>");
    //         li.text(responseli[i].title);
    //         viewBtn.text("View Recipe");
    //         viewBtn.attr("class", "button is-inverted is-outlined");
    //         viewBtn.attr("target", "_blank")
    //         saveBtn.text("Save to Favorites");
    //         saveBtn.attr("class", "button is-inverted is-outlined saveBtn");

    //         li.append(viewBtn);
    //         li.append(saveBtn);
    //         $display.append(li);

    //         let recipeId = responseli[i].id;
    //         console.log(recipeId);
    //         let recipeAPI = "https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey=65b67db8cfc84a6983b23e942fda13da&includeNutrition=false";
    //         // ajax call to get url for recipe, commented out to preserve quota
    //         $.ajax({
    //             url: recipeAPI,
    //             method: "GET",
    //         }).then(function (response) {
    //             console.log(response);
    //             let responseLink = response.sourceUrl;
    //             console.log(responseLink);
    //             li.attr("data-link", responseLink);
    //             viewBtn.attr("href", responseLink);
    //         })
    //     }
    // } 
    // https://official-joke-api.appspot.com/random_joke
    // ----build URL function----


    // let queryURL = "https://official-joke-api.appspot.com/random_joke";
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response.setup);
    //     console.log(response.punchline);
    //     $("#setup").text(response.setup)
    //     $("#punchline").text(response.punchline)
    //     localStorage.setItem("punchline", response.punchline)
    //     localStorage.setItem("setup", response.setup)
    // });

    // // event listener and handling for a user that doesn't want to see joke
    // $("#nojoke").on("click", function () {
    //     console.log("no")
    // });

    // -----CALLS-----

    // let ingredientAPI = buildIngredientsURL();
    // //ajax call working, commented out to preserve quota
    // $.ajax({
    //     url: ingredientAPI,
    //     method: "GET",
    // }).then(function (response) {
    //     console.log("hello");
    //     showResults(response);

    //     // click function to close modal
    //     let closepunchline = document.querySelector("#closepunchline");
    //     console.log("lexilogclose " + closepunchline);
    //     closepunchline.addEventListener("click", function () {
    //         punch.classList.toggle("is-active");
    //     })
    // })
})