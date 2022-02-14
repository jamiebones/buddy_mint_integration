$(document).ready(function() {

    /*------------------------
    Page Loader
    --------------------------*/
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");

    /*------------------------
    Back To Top
    --------------------------*/
    $('#back-to-top').fadeOut();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1400);
        } else {
            $('#back-to-top').fadeOut(400);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /*------------------------
    Header
    --------------------------*/
    $('.navbar-nav li a').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $(anchor.attr('href')).offset().top - 50 }, 1500);
        e.preventDefault();
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });

    /*------------------------
    Wow Animation
    --------------------------*/
    new WOW().init();

    /*------------------------
    Timeline
    --------------------------*/
    $('.timeline').timeline({
        forceVerticalMode: 800,
        mode: 'horizontal',
        visibleItems: 4
    });

    $("#contractLink").click(function() {
        window.open(`https://bscscan.com/address/0x08aF0ecc3B8194809730bA7013C637c7e16D2f9c`, '_blank')
    });

    /*------------------------
    FAQ
    --------------------------*/

    $(".item-faq").click(function() {
        let child = $(this).children(".container-info-faq");

        $(".item-faq").children(".container-info-faq").slideUp(300);
        $(".close-faq-item").removeClass('active-btn-faq');

        if (child.is(":hidden")) {
            child.slideDown(300);
            $(this).find('.close-faq-item').addClass('active-btn-faq');
        };
    });


    //--------------------------open window faq and connect ----------------------//

    $(".faq-btn").click(function (){
       $(".wrapper-dark").addClass("active-bg");
       $(".container-faq").addClass("active-faq");
    });

    $(".close-window").click(closeWindow);


    $(".warn-btn").click(function (){
       $(this).closest(".warn-container").hide("slow");
    });

    $('#depositRouterButton').click(function () {
        const offset = $('#investmentSectionTitle').offset().top
        $("html, body").animate({
            scrollTop: offset
        }, 1000)
    })

    const numericConfig = { negative: false }
    $('#depositAmount').numeric(numericConfig)



function closeWindow() {
    const darkWrap = $(".wrapper-dark")

    darkWrap.removeClass("active-bg")
    darkWrap.find(".container-faq").removeClass("active-faq")
}
});