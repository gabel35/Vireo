// require("dotenv").config();

//creating on click functions for the countries to apend info on home page//
$("#countrySpa").on("click", function(event) {
    event.preventDefault();

    var queryURL ="https://api.travelperk.com/travelsafe/restrictions/?origin=" + "US" + "&destination=" + "ES" + "&origin_type=country_code&destination_type=country_code&date=" + "2021-02-16";
    console.log(queryURL);

    const options = {
        url: queryURL,
        method: 'GET',
        headers: {
            'Api-Version': '1',
            Authorization: 'ApiKey 5XSu8m.2H0SM6jrruHvlfn4SxjXHJwKAY1JV9Em',
            'Accept-Language': 'en'
          }
      };
      
      fetch(options)
        .then(response => console.log(response))
    // $.ajax({
    //     url: queryURL,
    //     method: "GET",
    //     headers: {
    //         "Api-Version": "1",
    //         Authorization: "ApiKey " + "5XSu8m.2H0SM6jrruHvlfn4SxjXHJwKAY1JV9Em",
    //         "Accept-Language": "en"
    //       }
    // }).then(function(response){
    //     console.log(response)
    //         var curDiv = $("#currencyDiv");
    //         $("#currencyDiv").attr("class", "card");            
    //         var countryCurrency = {
    //             code: response[0].currencies[0].code,
    //             name: response[0].currencies[0].name,
    //             symbol: response[0].currencies[0].symbol
    //         };
    //         var appendCur = `
    //             <div class="card-body">
    //                 <h1 class="card-title">Currency</h1>
    //                     <div class="card-body">
    //                         <p> Code: ${countryCurrency.code}</p>
    //                         <p> Name: ${countryCurrency.name}</p>
    //                         <p> Symbol: ${countryCurrency.symbol}</p>
    //                     </div>
    //             </div>
    //         `;
    //     curDiv.append(appendCur);
    // });


    //grabbing API info for currency of the selected country and appending to apge//
    var countryName = $("#countrySpa").text();
    console.log(countryName);
    var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
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

    // appending the buttons to book a hotel and flight
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
