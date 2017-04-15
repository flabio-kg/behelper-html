$(function() {



    // labor carousel
    $('.labors-carousel-wrap').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.labor-prev'),
        nextArrow: $('.labor-next'),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }]
    });
    $('.labors-carousel-wrap-2').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.labor-prev-2'),
        nextArrow: $('.labor-next-2'),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.lk-labor-carousel').slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.labor-prev'),
        nextArrow: $('.labor-next'),
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.lk-labor-carousel-2').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.labor-prev'),
        nextArrow: $('.labor-next'),
        responsive: [ {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // end laor carousel
    // vacancy-carousel
    $('.vacancies-carousel-wrap').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        speed: 1000,
        prevArrow: $('.vacancy-prev'),
        nextArrow: $('.vacancy-next'),
        customPaging: function(slick, i) {
            return '<a  class="vacancy-dot"></a>';
        },
        responsive: [{
            breakpoint: 1270,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }

        }, {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: 'false',
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: 'false',
            }
        }]
    });
    $('.lk-vacancy-carousel').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        prevArrow: $('.vacancy-prev'),
        nextArrow: $('.vacancy-next'),
        customPaging: function(slick, i) {
            return '<a  class="vacancy-dot"></a>';
        },
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }

        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: 'false',
            }
        }, {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: 'false',
            }
        }]
    });
    // end vacancy-carousel
    // // city choose
    $('.dropdown-toggle').selectpicker({
      });
      $('.search-select').selectpicker({
        });
        $('.search-side').selectpicker({
          });
    // // end city choose
    // menu toggle
    $(".menu-toggle").click(function(event) {
        $(".menu-toggle").toggleClass("on");
        $(".menu-wrap").slideToggle();

        $(".overlay").toggle();
    });
    // end menu toggle

    // tabs
    $('.tab-head ').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('.tab-head ').removeClass('tab-active');
            $('.tab-item').removeClass('tab-active');

            $(this).addClass('tab-active');
            $("#" + tab_id).addClass('tab-active');
        })
        // end tabs
        // side panel submenu
    $('.sub-parent').click(function(event) {
        event.preventDefault();
        $('.side-sub').toggle();
    });
    //side panel submenu
    // hide and show sign-in and sign-up
    $('#sign-in-link').click(function(event) {
        event.preventDefault();
        $('.sign-or-sing-up').hide();
        $('.sign-or-reg').hide();
        $('.sign-in-nav').css("display","inline-block");
        $('.sign-in').show();
    });
    $('#sign-up-link').click(function(event) {
        event.preventDefault();
        $('.sign-or-sing-up').hide();
        $('.sign-or-reg').hide();
        $('.reg-nav').css("display","inline-block");
        $('.sign-up').show();
    });
    // end  hide and show sign-in and sign-up
    // toggle side-panel
    $('.toggle-link a').click(function(event) {
        event.preventDefault();
          $('.side-bottom').slideToggle();
            $('.side-top').slideToggle();
              $(".overlay-2").toggle();
    });
    // end toggle side-panel
    //slider range
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1000,
        values: [0, 1000],
        slide: function(event, ui) {
            $("#amount").val(ui.values[0]);
            $("#amount-1").val(ui.values[1]);
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0));
    $("#amount-1").val($("#slider-range").slider("values", 1));
    $("#slider-range").draggable();
    $("#slider-range-2").slider({
        range: true,
        min: 16,
        max: 72,
        values: [16, 72],
        slide: function(event, ui) {
            $("#amount-3").val(ui.values[0]);
            $("#amount-4").val(ui.values[1]);
        }
    });
    $("#amount-3").val($("#slider-range-2").slider("values", 0));
    $("#amount-4").val($("#slider-range-2").slider("values", 1));
    $("#slider-range-2").draggable();

    $(".range-s2").slider({
        min: 1,
        max: 5,
        	step: 1
    });
    $('.range-s2').slider('pips', {
      first: 'label',
      last: 'label',
      rest: 'label',
      labels: ['1', '2', '3','4', '5 и более'],
      prefix: "",
      suffix: ""
  });
    //end slider range
    // chat-side
    $('.chat-side-item a').click(function(event) {
        event.preventDefault();
        $(".chat-side-conversation").toggle();
    });
    // end chat-side
    // hidden-labors toggle
    var togglespan =  $('.toggle-labors-span');
    $('.toggle-labors').click(function() {

        $(this).closest('.catalog-item-wrap').find('.hidden-labors').slideToggle().toggleClass('on');
        if($('.hidden-labors').hasClass('on')){
          $(this).closest('.catalog-item-wrap').find('.toggle-labors-span').text("Свернуть");
        } else{
          $(this).closest('.catalog-item-wrap').find('.toggle-labors-span').text("Развернуть");
        }
    });


    // end hidden labors toggle
    $("#sort-choose").css('width', $("#sort-a").width() + 20);
    // table

    $('.cell').on("click", function() {

        var box = $(this);

        if ( box.hasClass('white-cell') ) {
            box.removeClass('white-cell').addClass('blue-cell');
        }
        else if ( box.hasClass('blue-cell') ) {
            box.removeClass('blue-cell').addClass('gray-cell');
        }
        else if ( box.hasClass('gray-cell') ) {
            box.removeClass('gray-cell').addClass('white-cell');
        }

    });
    $('.choose-row').on("click", function() {
       var box = $(this).parent().parent().find(".cell");
       if ( box.hasClass('white-cell') ) {
           box.removeClass('white-cell').addClass('blue-cell');
       }
    });
    $('.choose-column').on("click", function() {
       var columnNo = $(this).index();
        var box = $(this).closest("table").find("tr .cell:nth-child(" + (columnNo+1) + ")");
        if ( box.hasClass('white-cell') ) {
            box.removeClass('white-cell').addClass('gray-cell');
        }
    });
    // end table
});
//uncheck radio buttons
var allRadios = document.getElementsByName('radio');
var booRadio;
var x = 0;
for (x = 0; x < allRadios.length; x++) {

    allRadios[x].onclick = function() {
        if (booRadio == this) {
            this.checked = false;
            booRadio = null;
        } else {
            booRadio = this;
        }
    };
}

$(document).ready(function () {
    $('#vmap').vectorMap({
      map: 'russia_en',
      backgroundColor: 'transparent',
      color: '#279BE2',
      borderWidth: 1,
      borderColor: '#fff',
      borderOpacity: 1,
      hoverColor: '#DD4887',
      selectedColor: '#999999',
      enableZoom: true,
      showTooltip: true,
      scaleColors: ['#C8EEFF', '#006491'],
      normalizeFunction: 'polynomial'
  });
});

if (Modernizr.mq('(max-width: 768px)')) {

    $('.js-services').slick({
        prevArrow: $('.using-prev'),
        nextArrow: $('.using-next'),
    });
}

if (Modernizr.mq('(max-width: 768px)')) {

    $('.js-mape').slick({
        prevArrow: $('.mape-prev'),
        nextArrow: $('.mape-next'),
    });
}

if (Modernizr.mq('(max-width: 992px)')) {

    $('.js-conclusion').slick({
        prevArrow: $('.conclusion-prev'),
        nextArrow: $('.conclusion-next'),
        slidesToShow: 2,
        responsive: [
        {
        breakpoint: 540,
        settings: {
            slidesToShow: 1,
        }
        }
        ]
    });
}

$(".bot").click(function() {
    $(".rrr").toggleClass('-active');
});
