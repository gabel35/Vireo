//grabbing api info for travel restrictions and appending it//
$("#countrySpa").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countrySpa").text();
    console.log(countryName);
    // var bgImgs = [1,2,3,4,5,6,7];
    var carouselDiv = $(".carousel-inner")
    // for (let i = 0; i<bgImgs.length; i++){
        var carouselImgs = `
        <div class="carousel-item active">
           <img src="assets/img/Spain/spain1.jpg" class="d-block w-100" alt="First slide">
        </div>
        <div class="carousel-item">
            <img src="assets/img/Spain/spain2.jpg" class="d-block w-100" alt="2 slide">
        </div>
        <div class="carousel-item">
            <img src="assets/img/Spain/spain3.jpg" class="d-block w-100" alt="3 slide">
        </div>
        <div class="carousel-item">
            <img src="assets/img/Spain/spain4.jpg" class="d-block w-100" alt="4 slide">
        </div>`;
        console.log(carouselImgs)
        carouselDiv.append(carouselImgs);
        
    // }
})



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
