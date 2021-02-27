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


// const loadRestrictions = () => {
//   var queryURL = "https://api.traveladviceapi.com/search/US";
//   var token = "6d57e619-56bb-4b79-a97c-e90513baae63";
//   $.ajax({
//       url: queryURL,
//       method: "GET",  
//       beforeSend: function (xhr) {
//         xhr.setRequestHeader('x-access-token', token);
//       },
//   }).then(function(response){
//       console.log(response);
        
//   });
// }
