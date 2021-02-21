//grabbing api info for travel restrictions and appending it//
$("#countrySpa").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countrySpa").text();
    console.log(countryName);
})

$("#countryDR").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countryDR").text();
    console.log(countryName);
})

$("#countryRus").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countryRus").text();
    console.log(countryName);
})

$("#countryMex").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countryMex").text();
    console.log(countryName);
})
