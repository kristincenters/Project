//DEAD CODED SOCIETY PSEUDO-CODED
// what our application does?
// who is our application for?
// first step to create? 
// --- we know we need the user to "input" an artist's name, then click a "button"
// API 1. - Music Database
// API 2. - Associated Press


// Establish API Key Variables
// URL Base Name
// URL Base Name + API Key
// What components do we need variables for
//  1. Artist Object= Genre, year started, number one hit (top 5 hits)
//  2. Articles appear on page when? after artist's stats? do we click a "see more button"

//tasteDive api key: 359773-qJams-F4U551BF

//concept borrowed from wk 16, activity 6 (greg)
function buildQueryURL() {

    var queryURL = "https://tastedive.com/music/like.json?";

    var queryParams = {"api-key": "359773-qJams-F4U551BF"};

    queryParams.q = $("#search-term")
    .val()
    .trim();

    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams);
};


$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
});

$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
});