//grabbing api info for travel restrictions and appending it//
$("#countrySpa").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countrySpa").text();
    console.log(countryName);
    var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
            var curDiv = $("#currencyDiv");
            $("#currencyDiv").attr("class", "card");            
            var countryCurrency = {
                code: response[0].currencies[0].code,
                name: response[0].currencies[0].name,
                symbol: response[0].currencies[0].symbol
            };
            var appendCur = `
                <div class="card-body">
                    <h1 class="card-title">Currency</h1>
                        <div class="card-body">
                            <p> Code: ${countryCurrency.code}</p>
                            <p> Name: ${countryCurrency.name}</p>
                            <p> Symbol: ${countryCurrency.symbol}</p>
                        </div>
                </div>
            `;
        curDiv.append(appendCur);
    });
    var btnsDiv = $("#bookBtns");
    var appendBtns =`
    <a href="https://google.com/hotels" target="_blank">
        <button class="btn book">Book a Hotel</button>
    </a>
    <a href="https://google.com/flights" target="_blank">
        <button class="btn book">Book a Ticket</button>
    </a>
    `;
    btnsDiv.append(appendBtns);
});



$("#countryFra").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countryFra").text();
    console.log(countryName);
})

$("#countryUS").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countryUS").text();
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

$("#countryDR").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countryDR").text();
    console.log(countryName);
})
