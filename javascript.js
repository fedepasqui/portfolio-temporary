// var onScrollHandler = function() {
//     var newImageUrl = yourImageElement.src;
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if (scrollTop > 100) {
//        newImageUrl = "img1.jpg"
//     }
//     if (scrollTop > 200) {
//        newImageUrl = "img2.jpg"
//     }
//     if (scrollTop > 300) {
//        newImageUrl = "img3.jpg"
//     }
//     yourImageElement.src = newImageUrl;
//   };
//   object.addEventListener ("scroll", onScrollHandler);





    
        window.addEventListener("scroll", function () {
            const threshold = window.innerHeight / 100; // use height, not width
            const cover = document.getElementById("cover");
        
            if (window.scrollY > threshold) {
                cover.src = "portfolio-backcover.png";
            } else {
                cover.src = "portfolio-frontcover-1.png";
            }
        
            console.log(window.scrollY);
            console.log(threshold)
        });

    
    
    
    
    