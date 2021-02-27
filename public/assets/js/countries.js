const countries = document.querySelectorAll(".countries").forEach((button) => {
  button.addEventListener("click", function (e) {
    location.href = `/country/${e.target.innerText}`;
    
    });
});

$(document).ready(() => {
  let pathname = window.location.pathname;
  var pathArray = pathname.split('/');
  if (pathArray[2]) {
    loadCurrency(pathArray[2]);
    loadContent(pathArray[2]);
    loadRestrictions(pathArray[2])
  }
});

const loadCurrency = countryName => {
  var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName;
  $.ajax({
      url: queryURL,
      method: "GET",
  }).then(function(response){
    var curDiv = $("#currencyDiv");
    var countryCurrency = {
      code: response[0].currencies[0].code,
      name: response[0].currencies[0].name,
      symbol: response[0].currencies[0].symbol
    };
    var appendCur = `
      <div class="card" style="margin: 10px;">
        <div class="card-body">
          <h1 class="card-title">Currency Information</h1>
          <div class="card-body">
            <p> ${countryName} uses the ${countryCurrency.name} (${countryCurrency.symbol})
            <br>
            <br>
            <a href="https://gabel35.github.io/Spyglass/" target="_blank">
              <button class="btn book">Currency Converter</button>
            </a>
          </div>
        </div>
      </div>
    `;
    curDiv.append(appendCur);
  });
}

const loadContent = () => {
  $("#keyPhrases").attr("style", "visibility: "); 
  $(".topFive").attr("style", "visibility: ");           
  $("#funFact").attr("style", "visibility: ");
  $("#btnDiv").attr("style", "visibility: ");
}


const loadRestrictions = countryName => {
  if (countryName === "Spain"){
    var countryCode = "ES"
  } else if (countryName === "France") {
    var countryCode = "FR"
  } else if (countryName === "Russia") {
    var countryCode = "RU"
  } else if (countryName === "Mexico") {
    var countryCode = "MX"
  } else if (countryName === "Italy") {
    var countryCode = "IT"
  } else {
    var countryCode = "US";
  };
  var queryURL = "https://api.traveladviceapi.com/search/" + countryCode;
  var token = "6d57e619-56bb-4b79-a97c-e90513baae63";
  $.ajax({
      url: queryURL,
      method: "GET",  
      beforeSend: function (xhr) {
        xhr.setRequestHeader('x-access-token', token);
      },
  }).then(function(response){
      var resDiv = $("#restrictionsDiv");
    
      var countryRestrictions = {
          masks: response.requirements.masks,
          quarantine: response.requirements.quarantine,
          tests: response.requirements.tests,
          risk: response.risk_level,
          travel: response.trips[0].advice.restrictions.international_travel_controls.level_desc,
          recommendations: response.recommendation
      };
      var appendRes = `
        <div class="card">
          <div class="card-body">
              <h1 class="card-title">Travel Restrictions</h1>
              <div class="card-body">
                <p>International travel controls: ${countryRestrictions.travel}</p>
                <p>Risk Level: ${countryRestrictions.risk}
                <p>Requirements: 
                  <li> Masks: ${countryRestrictions.masks} </li>
                  <li> Quarantining: ${countryRestrictions.quarantine}</li>
                  <li> Testing: ${countryRestrictions.tests}</li>
                </p>
                <p>${countryRestrictions.recommendations}</p>
              </div>
          </div>
        </div>
      `;
  resDiv.append(appendRes);  
  });
}



