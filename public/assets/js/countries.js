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
                <h1 class="card-title">Currency</h1>
                <div class="card-body">
                  <p> Code: ${countryCurrency.code}</p>
                  <p> Name: ${countryCurrency.name}</p>
                  <p> Symbol: ${countryCurrency.symbol}</p>
                </div>
            </div>
          </div>
          `;
      curDiv.append(appendCur);
  });
}

const loadContent = () => {
  var kpDiv = $("#keyPhrases");
  var appendPhrases =`
    <div class="card">
      <div class="card-body">
          <h1 class="card-title">Key Phrases: </h1>
          <div class="card-body">
              {{#each language}}
                  <p>{{dataValues.name}}</p>
              {{/each}}
          </div>
      </div>
    </div>
    `;
  kpDiv.append(appendPhrases)
}