// Find tbody element
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

// Add event listener to the search button, call handler when clicked
//$searchBtn.addEventListener("click", handleSearchButtonClick());
$searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredSightings = dataSet;

// creates table to display sightings
function renderTable() {
    $tbody.innerHtml = "";
    for (var i = 0; i < filteredSightings.length; i++) {
        var sighting = filteredSightings[i];
        console.log(sighting);
        var columns = Object.keys(sighting);
        console.log(columns);
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < columns.length; j++) {
            var column = columns[j];
            var $cell = $row.insertCell(j);
            $cell.innerHTML = sighting[column];
        }
    }
}

function handleSearchButtonClick() {
    var userInput = $dateTimeInput.value.trim();
    console.log(userInput);

    filteredSightings = dataSet.filter(function(sighting) {
        var sightingDate = sighting.datetime.trim();
        console.log(sightingDate);

        if (userInput === sightingDate) {
            console.log("they match");
        } else {
            console.log("they don't match");
        }

    return userInput == sightingDate;
    });
    renderTable();
}

renderTable();