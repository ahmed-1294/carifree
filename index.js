const companylogo = document.getElementsByClassName("companylogo");

$(".companylogo").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});

// $(".companylogo").slick({
//   dots: false,
//   infinite: false,
//   speed: 300,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 4,
//   arrows: false,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });

// $(window).on("resize orientationchange", function () {
//   $(".companylogo").slick("resize");
// });
