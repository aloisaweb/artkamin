$(".burger").click((function(s){$(this).toggleClass("active"),$(".hmenu").toggleClass("active"),$("body").toggleClass("lock")})),$((function(){$(".slider").slick({infinite:!0,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".sliderbig").slick({slidesToShow:1,asNavFor:".slidersmall",arrows:!1,responsive:[{breakpoint:600,settings:{arrows:!0}}]}),$(".slidersmall").slick({slidesToShow:5,asNavFor:".sliderbig",centerPadding:"10px",responsive:[{breakpoint:1100,settings:{slidesToShow:4}},{breakpoint:800,settings:{slidesToShow:3}},{breakpoint:570,settings:{slidesToShow:2}}]})}));