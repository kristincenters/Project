//DEAD CODED SOCIETY PSEUDO-CODED
// what our application does?
// who is our application for?
// first step to create?
// --- we know we need the user to "input" an artist's name, then click a "button"
// API 1. - Last FM
// API 2. - Thrive

// Establish API Key Variables
// URL Base Name
// URL Base Name + API Key
// What components do we need variables for
//  1. Artist Object= Genre, year started, number one hit (top 5 hits)
//  2. Articles appear on page when? after artist's stats? do we click a "see more button"

//tasteDive api key: 359773-qJams-F4U551BF

//concept borrowed from wk 16, activity 6 (greg)
// function buildQueryURL() {

//     var queryURL = "https://tastedive.com/music/like.json?";

//     var queryParams = {"api-key": "359773-qJams-F4U551BF"};

//     queryParams.q = $("#search-term")
//     .val()
//     .trim();

//     console.log("---------------\nURL: " + queryURL + "\n---------------");
//     console.log(queryURL + $.param(queryParams));
//     return queryURL + $.param(queryParams);
// };


// $.ajax({
//     url: queryURL,
//     method: "GET"
// })

// .then(function (response) {
//     console.log(response);
// });

// $.ajax({
//     url: queryURL,
//     method: "GET"
// })

// .then(function (response) {
//     console.log(response);
// });
//=======

var fmURLBase =
	'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=bfab0ca7754766e291154f9b56c5cf7b&format=json';
var fmAPIKey = 'bfab0ca7754766e291154f9b56c5cf7b';
var fmURL =
	'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' +
	userInput +
	'&api_key=' +
	fmAPIKey +
	'&format=json';
console.log(fmURL);
var userInput = '';
function searchArtist() {
	console.log(searchArtist);
	$.ajax({ url: fmURL + userInput, method: 'GET' }).then(function(response) {
		$('#userInput').empty();
		$('#artist').empty();
		$('#artist').text(response.main.artist.name);
		console.log(response.main.artist.name);
		$('#listen').text(response.main.artist.url);
		$('#bio').text(response.main.tags.tag.bio);
	});
}
searchArtist();
// end .then(function(response)
// end function searchArtist

// document.ready function(){
$('#searchBtn').on('click', function(event) {
	event.preventDefault();
	var userInput = $("#searchTerm").val().trim();

	run();
});

// document.ready end
// }
