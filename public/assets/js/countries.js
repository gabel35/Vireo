const countries = document.querySelectorAll(".countries").forEach((button) => {
  button.addEventListener("click", function (e) {
    location.href = `/country/${e.target.innerText}`;
    
    });
});

$(document).ready(() => {
  let pathname = window.location.pathname;
  console.log(pathname);
  var pathArray = pathname.split('/');
  console.log(pathArray);
  if (pathArray[2]) {
    loadCurrency(pathArray[2])
  }
});

const loadCurrency = countryName => {
    // var countryName = ;
  console.log(countryName)
  var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName;
  console.log(queryURL);
  $.ajax({
      url: queryURL,
      method: "GET",
  }).then(function(response){
      console.log(response)
          var curDiv = $("#currencyDiv");
    
          var countryCurrency = {
              code: response[0].currencies[0].code,
              name: response[0].currencies[0].name,
              symbol: response[0].currencies[0].symbol
          };
          console.log(response);
          var appendCur = `
                          <p> Code: ${countryCurrency.code}</p>
                          <p> Name: ${countryCurrency.name}</p>
                          <p> Symbol: ${countryCurrency.symbol}</p>
          `;
      curDiv.append(appendCur);
  });
}