$(document).ready(function(){
    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items:1,
        lazyLoad:true
    })
    // top-sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        },
        items:3,
        loop:true,
        lazyLoad:true
    })

    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
    });
    
    //filter items on button click
    $(".button-group").on("click","button",function(){
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({filter:filterValue})
    })

    // new phone carousel
     $("#new_phones .owl-carousel").owlCarousel({
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        },
        items:3,
        loop:true,
        lazyLoad:true
    })
    // new phone carousel
     $("#blogs .owl-carousel").owlCarousel({
        dots:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        },
        items:3,
        loop:true,
        lazyLoad:true
    })
    // product qty section
    let $qty_up = $(".qty-up");
    let $qty_down = $(".qty-down");
    let $qty_input = $(".qty-input");

    // qty update on click
    $qty_up.click(function(e){
        // let $qty_input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($qty_input.val()>=1 && ($qty_input.val()<=9)){
            $qty_input.val(function(i,oldval){
                return ++oldval;
            })
        }
    })

     // qty update on click
     $qty_down.click(function(e){
        // let $qty_input = $(`.qty_input[data-id='${$(this).data("id")}]`);
        if($qty_input.val()>1 && ($qty_input.val()<=10)){
            $qty_input.val(function(i,oldval){
                return --oldval;
            })
        }
    })
    
  
})