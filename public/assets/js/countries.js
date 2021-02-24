//grabbing api info for travel restrictions and appending it//
$("#countryRus").on("click", function(event) {
    event.preventDefault();
    var countryName = $("#countryRus").text();
    console.log(countryName);
    var bgImgs = [
        
        "assets/img/Russia/Russia(1).jpg", 
        "assets/img/Russia/Russia(2).jpg",
        "assets/img/Russia/Russia(3).jpg",
        "assets/img/Russia/Russia(4).jpg",
        "assets/img/Russia/Russia(5).jpg",
    
    ];
    var carouselDiv = $(".carousel-inner")


    for (let i = 0; i<bgImgs.length; i++){
     
    
        // console.log(carouselImgs)
        // carouselDiv.append(carouselImgs);

        var showImg = `<div class="carousel-item">
           <img class="d-block w-100" id="image-${i}" src=${bgImgs[i]}>
        </div>`

        carouselDiv.append(showImg)

    
    }
 $("#image-0").addClass("active")


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

// $("#countryRus").on("click", function(event) {
//     event.preventDefault();
//     var countryName = $("#countryRus").text();
//     console.log(countryName);
// })

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
