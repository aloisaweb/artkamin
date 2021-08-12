$('.burger').click(function(event){
    $(this).toggleClass('active');
    $('.hmenu').toggleClass('active');
    $('body').toggleClass('lock');
  });

$(function(){
    $('.slider').slick({
        infinite:true,
        slidesToShow:3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })
    $('.sliderbig').slick({
        slidesToShow:1,
        asNavFor: '.slidersmall',
        arrows:false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              arrows:true
              //prevArrow: '<button type="button" class="slick-prev big-prev"><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6078 17.6212C11.1252 18.1383 11.1252 19.0347 10.6401 19.5863C10.3814 19.8621 10.058 20 9.70223 20C9.37882 20 9.0554 19.8621 8.79667 19.6208L0.388073 11.002C0.129347 10.7262 0 10.3814 0 10.0022C0 9.62298 0.129347 9.27823 0.388073 9.00243L8.79667 0.383642C9.31412 -0.133485 10.1227 -0.133483 10.6401 0.41812C11.1252 0.969722 11.1252 1.83159 10.6078 2.3832L3.16941 10.0022L10.6078 17.6212Z" fill="black"/></svg></button>'
              
            }
          }
        ]
    })
    $('.slidersmall').slick({
        slidesToShow:5,
        asNavFor: '.sliderbig',
        centerPadding: '10px',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4
              
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3
              
            }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 2
              
            }
          }
        ]
    })
})