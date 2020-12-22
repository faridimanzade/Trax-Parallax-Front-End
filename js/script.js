$(document).ready(function () {


    //================================================================================== PRELOADER (JQUERY)
    preloaderHandler();


    function preloaderHandler() {
        $('.preloader').delay(3000).fadeOut(1000);
        setTimeout(function () {

            $("body").delay(3000).css("overflow-y", "auto");
        }, 3000)
    }




    //================================================================================== NAVBAR MAKE SELECTED (JQUERY)
    scrollNavigationSelectedMaker();


    function scrollNavigationSelectedMaker() {
        window.addEventListener("scroll", function () {
            if (window.scrollY >= document.querySelector(".homeContainer").offsetTop && window.scrollY < document.querySelector(".aboutContainer").offsetTop) {
                $(".navSelectedBorder").css("width", "0");
                $(".navSelectedBorder").css("border", "1px solid transparent");
                $(".navSelectedBorder").eq(0).css("width", "100%");
                $(".navSelectedBorder").eq(0).css("border", "1px solid #24cdd5");

                $(".burgerSelectedBorder").css("width", "0");
                $(".burgerSelectedBorder").css("border", "1px solid transparent");
                $(".burgerSelectedBorder").eq(0).css("width", "100%");
                $(".burgerSelectedBorder").eq(0).css("border", "2px solid white");
            } else if (window.scrollY >= document.querySelector(".aboutContainer").offsetTop && window.scrollY < document.querySelector(".pricingContainer").offsetTop) {
                $(".navSelectedBorder").css("width", "0");
                $(".navSelectedBorder").css("border", "1px solid transparent");
                $(".navSelectedBorder").eq(1).css("width", "100%");
                $(".navSelectedBorder").eq(1).css("border", "1px solid #24cdd5");

                $(".burgerSelectedBorder").css("width", "0");
                $(".burgerSelectedBorder").css("border", "1px solid transparent");
                $(".burgerSelectedBorder").eq(1).css("width", "100%");
                $(".burgerSelectedBorder").eq(1).css("border", "2px solid white");
            } else if (window.scrollY >= document.querySelector(".pricingContainer").offsetTop && window.scrollY < document.querySelector(".portfolioContainer").offsetTop) {
                $(".navSelectedBorder").css("width", "0");
                $(".navSelectedBorder").css("border", "1px solid transparent");
                $(".navSelectedBorder").eq(2).css("width", "100%");
                $(".navSelectedBorder").eq(2).css("border", "1px solid #24cdd5");

                $(".burgerSelectedBorder").css("width", "0");
                $(".burgerSelectedBorder").css("border", "1px solid transparent");
                $(".burgerSelectedBorder").eq(2).css("width", "100%");
                $(".burgerSelectedBorder").eq(2).css("border", "2px solid white");
            } else if (window.scrollY >= document.querySelector(".portfolioContainer").offsetTop && window.scrollY < document.querySelector(".blogContainer").offsetTop) {
                $(".navSelectedBorder").css("width", "0");
                $(".navSelectedBorder").css("border", "1px solid transparent");
                $(".navSelectedBorder").eq(3).css("width", "100%");
                $(".navSelectedBorder").eq(3).css("border", "1px solid #24cdd5");

                $(".burgerSelectedBorder").css("width", "0");
                $(".burgerSelectedBorder").css("border", "1px solid transparent");
                $(".burgerSelectedBorder").eq(3).css("width", "100%");
                $(".burgerSelectedBorder").eq(3).css("border", "2px solid white");
            } else if (window.scrollY >= document.querySelector(".blogContainer").offsetTop && window.scrollY < document.querySelector(".contactContainer").offsetTop) {
                $(".navSelectedBorder").css("width", "0");
                $(".navSelectedBorder").css("border", "1px solid transparent");
                $(".navSelectedBorder").eq(4).css("width", "100%");
                $(".navSelectedBorder").eq(4).css("border", "1px solid #24cdd5");

                $(".burgerSelectedBorder").css("width", "0");
                $(".burgerSelectedBorder").css("border", "1px solid transparent");
                $(".burgerSelectedBorder").eq(4).css("width", "100%");
                $(".burgerSelectedBorder").eq(4).css("border", "2px solid white");
            } else if (window.scrollY >= document.querySelector(".contactContainer").offsetTop) {
                $(".navSelectedBorder").css("width", "0");
                $(".navSelectedBorder").css("border", "1px solid transparent");
                $(".navSelectedBorder").eq(5).css("width", "100%");
                $(".navSelectedBorder").eq(5).css("border", "1px solid #24cdd5");

                $(".burgerSelectedBorder").css("width", "0");
                $(".burgerSelectedBorder").css("border", "1px solid transparent");
                $(".burgerSelectedBorder").eq(5).css("width", "100%");
                $(".burgerSelectedBorder").eq(5).css("border", "2px solid white");
            }
        });
    }




    //================================================================================== NAVBAR (JQUERY)
    navigationListSelectSetter();
    navbarBGResizeSetter();
    navbarScrollBarChangeSetter();


    function navigationListSelectSetter() {
        $(".navSelectedBorder").eq(0).css("width", "100%");
        $(".navSelectedBorder").eq(0).css("border", "1px solid #24cdd5");

        $(".navigations ul li").click(function () {
            $(".navSelectedBorder").css("width", "0");
            $(".navSelectedBorder").css("border", "1px solid transparent");
            $(this).children(".navSelectedBorder").css("width", "100%");
            $(this).children(".navSelectedBorder").css("border", "1px solid #24cdd5");
            let navigationIndex = $('.navigations ul li').index(this);
            scrollToNavSections(navigationIndex);
        });
    }

    function scrollToNavSections(navigationIndex) {
        switch (navigationIndex) {
            case 0:
                $("html, body").animate({
                    scrollTop: document.querySelector(".homeContainer").offsetTop
                }, "slow");
                break;
            case 1:
                $("html, body").animate({
                    scrollTop: document.querySelector(".aboutContainer").offsetTop
                }, "slow");
                break;
            case 2:
                $("html, body").animate({
                    scrollTop: document.querySelector(".pricingContainer").offsetTop
                }, "slow");
                break;
            case 3:
                $("html, body").animate({
                    scrollTop: document.querySelector(".portfolioContainer").offsetTop
                }, "slow");
                break;
            case 4:
                $("html, body").animate({
                    scrollTop: document.querySelector(".blogContainer").offsetTop
                }, "slow");
                break;
            case 5:
                $("html, body").animate({
                    scrollTop: document.querySelector(".contactContainer").offsetTop
                }, "slow");
                break;
            default:
                alert("Wrong Choice");
        }
    }

    function navbarBGResizeSetter() {
        $(window).resize(function () {
            if (window.scrollY > (document.querySelector("nav").offsetHeight + 60)) {
                $("nav").css("background-color", "white");
            } else {
                if ($(window).width() <= 880) {
                    $("nav").css("background-color", "rgba(38, 49, 60, 0.7)");
                } else {
                    $("nav").css("background-color", "transparent");
                }
            }
        });
    }

    function navbarScrollBarChangeSetter() {
        window.addEventListener("scroll", function () {
            if (window.scrollY > (document.querySelector("nav").offsetHeight + 60)) {
                $("nav").css({
                    "position": "fixed",
                    "background-color": "white",
                    "box-shadow": "0 10px 10px -10px rgba(0, 0, 0, 0.35)",
                    "animation-name": "navbarToShow",
                    "animation-duration": "0.5s"
                });

                $(".navImage img").attr("src", "media/logo.png");
                $(".navigations ul li p").css("color", "#26313C");
                $(".burgerButton div").css("border", "1px solid #26313C");
            } else {
                $("nav").css({
                    "position": "absolute",
                    "box-shadow": "0 10px 10px -10px rgba(0, 0, 0, 0)",
                    "animation-name": "none",
                    "animation-duration": "unset"
                });

                if ($(window).width() <= 880) {
                    $("nav").css("background-color", "rgba(38, 49, 60, 0.7)");
                } else {
                    $("nav").css("background-color", "transparent");
                }

                $(".navImage img").attr("src", "media/logo-transparent.png");
                $(".navigations ul li p").css("color", "white");
                $(".burgerButton div").css("border", "1px solid white");
            }
        });
    }




    //================================================================================== BURGER MENU SHOW AND HIDE (JQUERY)
    burgerMenuShowAndHide();
    burgerNavListClickSelected();
    textNearCursorHandler();;


    function burgerMenuShowAndHide() {
        let burgerModal = document.querySelector(".burgerMenu");


        $(".burgerButton").click(function () {
            $(".burgerMenu").fadeIn(500);
            $(".burgerMenuContainer").css("right", "0");
            $("body").css("overflow-y", "hidden");
        });

        $(".fa-exchange-alt").click(function () {
            $(".burgerMenu").fadeOut(500);
            $(".burgerMenuContainer").css("right", "-50%");
            $("body").css("overflow-y", "auto");
        })


        $(window).click(function () {
            if (event.target == burgerModal) {
                $(".burgerMenu").fadeOut(500);
                $(".burgerMenuContainer").css("right", "-50%");
                $("body").css("overflow-y", "auto");
            }
        });

        $(document).on('keydown', function (e) {
            if (e.keyCode === 27) { // ESC
                $(".burgerMenu").fadeOut(500);
                $(".burgerMenuContainer").css("right", "-50%");
                $("body").css("overflow-y", "auto");
            }
        });
    }

    function burgerNavListClickSelected() {
        $(".burgerSelectedBorder").eq(0).css("width", "100%");
        $(".burgerSelectedBorder").eq(0).css("border", "2px solid white");

        $(".burgerMenuNavigation ul li").click(function () {
            $(".burgerSelectedBorder").css("width", "0");
            $(".burgerSelectedBorder").css("border", "1px solid transparent");
            $(this).children(".burgerSelectedBorder").css("width", "100%");
            $(this).children(".burgerSelectedBorder").css("border", "2px solid white");
            let navigationIndex = $('.burgerMenuNavigation ul li').index(this);
            scrollToNavSections(navigationIndex);
            $("body").css("overflow-y", "auto");
            $(".burgerMenu").fadeOut(500);
            $(".burgerMenuContainer").css("right", "-50%");
        });
    }

    function textNearCursorHandler() {
        let burgerModal = document.querySelector(".burgerMenu");
        let Mycursor = document.querySelector(".cursorText");

        burgerModal.addEventListener("mousemove", function (e) {
            let x = e.clientX;
            let y = e.clientY;
            Mycursor.style.left = (x - 260) + "px";
            Mycursor.style.top = (y - 40) + "px";


            if (x > document.querySelector(".burgerMenuContainer").offsetLeft) {
                Mycursor.style.display = "none";
            } else {
                Mycursor.style.display = "block";
            }
        });
    }




    //============================================================================= HOME SLIDER (JQUERY)
    let idTimeOut;
    homeSlider();


    function homeSlider() {

        $(".homeSlider").fadeOut(0.0001);

        let sliderOrder = document.querySelectorAll(".orders p");
        let sliderHome = document.querySelectorAll(".homeSlider");

        for (let i = 0; i < sliderOrder.length; i++) {
            sliderOrder[i].addEventListener("click", function () {

                for (let j = 0; j < sliderHome.length; j++) {
                    $(".homeSlider").eq(j).fadeOut(1000);
                    $(".bottomBorder").eq(j).removeClass("selectedBorder");
                    $(".homeText").eq(j).fadeOut(0.0001);
                    $(".homeText h3 span").removeClass("animationClass");
                }

                $(".homeSlider").eq(i).fadeIn(1000);
                $(".bottomBorder").eq(i).addClass("selectedBorder");
                $(".homeText").eq(i).fadeIn(1000);


                if (i == 0) {
                    for (let x = 0; x < 4; x++) {
                        $(".homeText h3 span").eq(x).addClass("animationClass");
                    }
                } else if (i == 1) {
                    for (let x = 4; x < 8; x++) {
                        $(".homeText h3 span").eq(x).addClass("animationClass");
                    }
                } else {
                    for (let x = 8; x < 12; x++) {
                        $(".homeText h3 span").eq(x).addClass("animationClass");
                    }
                }
                clearTimeout(idTimeOut);
            });
        }
    }


    let slideIndex = 0;
    autoSliderHome();


    function autoSliderHome() {

        let number;
        let sliderHome = document.querySelectorAll(".homeSlider");

        for (let j = 0; j < sliderHome.length; j++) {
            $(".homeSlider").eq(j).fadeOut(1000);
            $(".bottomBorder").eq(j).removeClass("selectedBorder");
            $(".homeText").eq(j).fadeOut(0.0001);
            $(".homeText h3 span").removeClass("animationClass");
        }

        slideIndex++;
        if (slideIndex > sliderHome.length) {
            slideIndex = 1
        }
        number = slideIndex - 1;

        $(".homeSlider").eq(number).fadeIn(1000);
        $(".bottomBorder").eq(number).addClass("selectedBorder");
        $(".homeText").eq(number).fadeIn(1000);

        if (number == 0) {
            for (let x = 0; x < 4; x++) {
                $(".homeText h3 span").eq(x).addClass("animationClass");
            }
        } else if (number == 1) {
            for (let x = 4; x < 8; x++) {
                $(".homeText h3 span").eq(x).addClass("animationClass");
            }
        } else {
            for (let x = 8; x < 12; x++) {
                $(".homeText h3 span").eq(x).addClass("animationClass");
            }
        }

        idTimeOut = setTimeout(autoSliderHome, 5000);
    }


    //============================================================================= SET UP INTRO CAROUSEL (JQUERY)
    introCarouselHandler();


    function introCarouselHandler() {
        $(".introCarousel").owlCarousel({
            center: true,
            dots: false,
            nav: false,
            smartSpeed: 1000,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            autoplay: true,

            loop: true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 3
                }
            }
        });
    }




    //============================================================================= ABOUT SCROLLBAR MOVE AND CONTENT TO SHOW && IMAGE TO CENTER (JAVASCRIPT)
    aboutScrollbarAppear();


    function aboutScrollbarAppear() {
        let contentToRight = document.querySelector(".aboutContent");
        let imageToLeft = document.querySelector(".aboutImage");

        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".aboutContainer").offsetHeight / 1.2;
            let selfContainerTimesMore = document.querySelector(".aboutContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".aboutContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector(".workContainer").offsetTop - selfContainerTimesMore))) {
                imageToLeft.style.right = "0";
                imageToLeft.style.opacity = "1";

                setTimeout(function () {
                    contentToRight.style.left = "0";
                    contentToRight.style.opacity = "1";
                }, 500);
            }
        })
    }




    //==================================================================================== WORK LINKS HANDLER (JQUERY)
    workLinksHandler();
    cardsHideAndShow();


    function workLinksHandler() { //===================== WORK BACKGROUND CHANGE AND RESIZE LINKS HIDE (JQUERY)
        $('.workContainer').mouseleave(function () { //mouseout for commented
            // $(".workCardNumber h3").removeClass("workBackground");
            // $(".workCardNumber h3").eq(2).addClass("workBackground");
            $(".workCard").children().children("h3").removeClass("workBackground");
            $(".workCard").eq(2).children().children("h3").addClass("workBackground");
        })

        $(".workCard").hover(function () {
            // $(".workCardNumber h3").removeClass("workBackground");
            // $(this).addClass("workBackground");
            $(".workCard").children().children("h3").removeClass("workBackground");
            $(this).children().children("h3").addClass("workBackground");
        });

        linkHandler();

        $(window).resize(function () {
            linkHandler();
        });
    }

    function linkHandler() { //==================================== WORK RESPONSIVE LINKS HIDE AND SHOW (JQUERY)
        $(".line").eq(0).addClass("hiddenLine");
        $(".line").eq(9).addClass("hiddenLine");
        if ($(window).width() > 950) {
            $(".line").eq(3).removeClass("hiddenLine");
            $(".line").eq(4).removeClass("hiddenLine");
            $(".line").eq(7).removeClass("hiddenLine");
            $(".line").eq(8).removeClass("hiddenLine");
        } else if ($(window).width() > 568 && $(window).width() <= 950) {
            $(".line").removeClass("hiddenLine");
            $(".line").eq(0).addClass("hiddenLine");
            $(".line").eq(9).addClass("hiddenLine");

            $(".line").eq(3).addClass("hiddenLine");
            $(".line").eq(4).addClass("hiddenLine");
            $(".line").eq(7).addClass("hiddenLine");
            $(".line").eq(8).addClass("hiddenLine");
        } else if ($(window).width() <= 568) {
            $(".line").addClass("hiddenLine");
        }
    }

    function cardsHideAndShow() { //========================= WORK CARDS GETTING VISIBLE (JQUERY)
        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".workContainer").offsetHeight / 1.2;
            let selfContainerTimesMore = document.querySelector(".workContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".workContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector(".mobileContainer").offsetTop - selfContainerTimesMore))) {
                $(".workHeader p span").addClass("animationClass");
                $(".workHeader h2 span").addClass("animationClass");
                $(".workCard").eq(0).delay(1000).addClass("workCardVisibleOne");
                $(".workCard").eq(1).delay(3000).addClass("workCardVisibleTwo");
                $(".workCard").eq(2).delay(5000).addClass("workCardVisibleThree");
                $(".workCard").eq(3).delay(7000).addClass("workCardVisibleFour");
                $(".workCard").eq(4).delay(9000).addClass("workCardVisibleFive");
            }
            if (window.scrollY > document.querySelector(".workContainer").offsetTop) {
                $(".workCard").addClass("workCardVisibleTime");
            }
        })
    }




    //============================================================================= CAROUSEL INSIDE MOBILE IMAGE (JQUERY)
    let cursor = true;
    mobileCarouselHandler();
    mobileCarouselToShow();


    function mobileCarouselHandler() {
        $('.mobileCarousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }

    function mobileCarouselToShow() {
        $(".mobileCarouselContainer").fadeOut(0.001);
        $(".lockButton").click(function () {
            $(".mobileCarouselContainer div").css("border-radius", "20px");
            if (cursor == true) {
                $(".mobileContentCenter").css("cursor", "e-resize");
                cursor = false;
            } else {
                $(".mobileContentCenter").css("cursor", "default");
                cursor = true;
            }
            $(".mobileCarouselContainer").fadeToggle(500);
            $(".lockScreen").fadeToggle(500);
        });
    }


    //============================================================================= MOBILE SECTION PARTS TO CENTER IMAGE (JQUERY)
    mobileSectionsToCenter();


    function mobileSectionsToCenter() {
        let selfContainerTimesLess = document.querySelector(".mobileContainer").offsetHeight / 1.2;
        let selfContainerTimesMore = document.querySelector(".mobileContainer").offsetHeight * 0.83;
        window.addEventListener("scroll", function () {
            if ((window.scrollY > (document.querySelector(".mobileContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector(".counterContainer").offsetTop - selfContainerTimesMore))) {
                $(".mobileHeadingIntro p span").addClass("animationClass");
                $(".mobileHeadingIntro h3 span").addClass("animationClass");
                $(".mobileHeadingContent p span").addClass("animationClass");
            }
            if ((window.scrollY > (document.querySelector(".mobileContainer").offsetTop - selfContainerTimesLess + 100)) && (window.scrollY < (document.querySelector(".counterContainer").offsetTop - selfContainerTimesMore - 200))) {
                $(".mobileCardLeft").eq(0).addClass("leftCardToCenter");
                $(".mobileCardRight").eq(0).addClass("rightCardToCenter");
            }
            if ((window.scrollY > (document.querySelector(".mobileContainer").offsetTop - selfContainerTimesLess + 200)) && (window.scrollY < (document.querySelector(".counterContainer").offsetTop - selfContainerTimesMore - 100))) {
                $(".mobileCardLeft").eq(1).addClass("leftCardToCenter");
                $(".mobileCardRight").eq(1).addClass("rightCardToCenter");
            }
        });
    }




    // window.addEventListener("scroll", function () {
    //     document.querySelector(".counterContainer").style.cssText = "background-image: url('media/counter-bg.jpg'); background-size: cover; background-repeat: no-repeat; background-attachment: scroll";
    //     document.querySelector(".counterContainer").style.backgroundPosition = "center" + " " + (-1 * (window.scrollY / 3) + 600) + "px";
    // })





    //============================================================================= AUTO COUNTER (JAVASCRIPT)
    let sumLeft = 0;
    let sumRight = 0;
    let isScrollFired = false; //=============================== To Calculate Only One Time
    autoCalculators();


    function autoCalculators() {
        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".counterContainer").offsetHeight / 1.2;
            let selfContainerTimesMore = document.querySelector(".counterContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".counterContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector(".expertsContainer").offsetTop - selfContainerTimesMore - 100)) && isScrollFired == false) {
                autoIncrementLeft();
                autoIncrementRight();
                isScrollFired = true;
            }
        });
    }

    function autoIncrementLeft() {
        if (sumLeft <= 2007) {
            let counterOne = Math.floor(Math.random() * 50);
            sumLeft += counterOne;
        }
        document.querySelector('.leftCounter h2').innerText = sumLeft;
        setTimeout(autoIncrementLeft, 50);
    }

    function autoIncrementRight() {
        if (sumRight <= 895) {
            let counterOne = Math.floor(Math.random() * 30);
            sumRight += counterOne;
        }
        document.querySelector('.rightCounter h2').innerText = sumRight;
        setTimeout(autoIncrementRight, 70);
    }




    //============================================================================= EXPERTS SECTION "CAROUSEL, HEADINGS, CARDS"(JAVASCRIPT, JQUERY IU, JQUERY)
    carouselHandler();
    expertHeadingsToCenter();
    expertsCardHoverEffect();


    function carouselHandler() {
        $('.owlExperts').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                950: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    function expertHeadingsToCenter() {
        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".expertsContainer").offsetHeight / 1.2;
            let selfContainerTimesMore = document.querySelector(".expertsContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".expertsContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector(".pricingContainer").offsetTop - selfContainerTimesMore))) {
                document.querySelector(".expertsHeadingIntro p span").style.left = "0";
                document.querySelector(".expertsHeadingIntro p span").style.opacity = "1";
                document.querySelector(".expertsHeadingIntro h3 span").style.left = "0";
                document.querySelector(".expertsHeadingIntro h3 span").style.opacity = "1";
                document.querySelector(".expertsHeadingContent p span").style.right = "0";
                document.querySelector(".expertsHeadingContent p span").style.opacity = "1";
            }
            if ((window.scrollY > (document.querySelector(".expertsContainer").offsetTop - selfContainerTimesLess + 100)) && (window.scrollY < (document.querySelector(".pricingContainer").offsetTop - selfContainerTimesMore - 100))) {
                $(".expertsCarousel .item").css("opacity", "1");
            }
        });
    }

    function expertsCardHoverEffect() {
        $(".item").hover(function () {
            $(this).children(".itemContent").children(".itemHiddenContent").slideToggle({
                duration: 200,
                easing: "linear"
            });
            $(this).children(".itemImage").children().css("transform", "scale(1.2)");
        }, function () {
            $(this).children(".itemContent").children(".itemHiddenContent").slideToggle({
                duration: 200,
                easing: "linear"
            });
            $(this).children(".itemImage").children().css("transform", "scale(1)");
        })
    }




    //============================================================================= PRICING SECTION "CAROUSEL, HEADINGS, CARDS"(JAVASCRIPT, JQUERY IU, JQUERY)
    let monthly = document.querySelector(".monthly");
    let yearly = document.querySelector(".yearly");
    monthPriceAndChange();
    yearPriceAndChange();
    pricingCarouselHandler();
    pricingCardsHoverHandler();
    pricingCardsToShow();


    function monthPriceAndChange() {
        monthly.addEventListener("click", function () {
            yearly.classList.remove("activeYearlyMonthly");
            yearly.style.cursor = "pointer";
            monthly.style.cursor = "default";
            monthly.classList.add("activeYearlyMonthly");
            document.querySelector(".selectionButton").style.left = "0";
            document.querySelector(".selectionButton").style.backgroundPosition = "left center";

            $(".pricingCardPrice h2").eq(0).children("span").eq(0).text("$9.95");
            $(".pricingCardPrice h2").eq(1).children("span").eq(0).text("$19.95");
            $(".pricingCardPrice h2").eq(2).children("span").eq(0).text("$29.95");
            $(".pricingCardPrice h2").eq(3).children("span").eq(0).text("$49.95");

            for (let index = 0; index < 4; index++) {
                $(".pricingCardPrice h2").eq(index).children("span").eq(1).text(" /month");
            }
        });
    }

    function yearPriceAndChange() {
        yearly.addEventListener("click", function () {
            monthly.classList.remove("activeYearlyMonthly");
            monthly.style.cursor = "pointer";
            yearly.style.cursor = "default";
            yearly.classList.add("activeYearlyMonthly");
            document.querySelector(".selectionButton").style.left = "50%";
            document.querySelector(".selectionButton").style.backgroundPosition = "right center";

            $(".pricingCardPrice h2").eq(0).children("span").eq(0).text("$89.55");
            $(".pricingCardPrice h2").eq(1).children("span").eq(0).text("$179.55");
            $(".pricingCardPrice h2").eq(2).children("span").eq(0).text("$269.55");
            $(".pricingCardPrice h2").eq(3).children("span").eq(0).text("$449.55");

            for (let index = 0; index < 4; index++) {
                $(".pricingCardPrice h2").eq(index).children("span").eq(1).text(" /year");
            }
        });
    }

    function pricingCarouselHandler() {
        $('.owlPricing').owlCarousel({
            loop: false,
            margin: 30,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                900: {
                    items: 3
                }
            }
        })
    }

    function pricingCardsHoverHandler() {
        $('.pricingCarousel').mouseleave(function () {
            $(".owlPricing .item").eq(1).addClass("workBackgroundSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardHeading').children("h3").addClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardHeading').children("p").addClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardPrice').children("h2").children("span").eq(0).addClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardPrice').children("h2").children("span").eq(1).addClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardList').children().children().addClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardButton').children().addClass("backgroundForPricingButton");
        })

        $(".owlPricing .item").hover(function () {
            $(".owlPricing .item").eq(1).removeClass("workBackgroundSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardHeading').children("h3").removeClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardHeading').children("p").removeClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardPrice').children("h2").children("span").eq(0).removeClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardPrice').children("h2").children("span").eq(1).removeClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardList').children().children().removeClass("workColorSelected");
            $(".owlPricing .item").eq(1).children('.pricingCardButton').children().removeClass("backgroundForPricingButton");
        });
    }

    function pricingCardsToShow() {
        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".pricingContainer").offsetHeight / 1.2;
            let selfContainerTimesMore = document.querySelector(".pricingContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".pricingContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector(".portfolioContainer").offsetTop - selfContainerTimesMore))) {
                $(".pricingHeading p span").addClass("animationClass");
                $(".pricingHeading h2 span").addClass("animationClass");
                $(".pricingSwitch").css("opacity", "1");
            }
            if ((window.scrollY > (document.querySelector(".pricingContainer").offsetTop - selfContainerTimesLess + 200)) && (window.scrollY < (document.querySelector(".portfolioContainer").offsetTop - selfContainerTimesMore + 200))) {
                $(".pricingCarousel .item").css("opacity", "1");
            }
        });
    }



    //============================================================================= PORTFOLIO (GALLERY, SCROLL, MODAL) HANDLERS (JQUERY)
    portfolioGalleryHandler();
    portfolioCategorySelected();
    scrollPortfolioHeadingToShow();
    modalOpenImage();
    modalImageSliderButtons();

    
    function portfolioGalleryHandler() {
        jQuery('#grid-container').cubeportfolio({
            filters: '#filters-container',
            layoutMode: 'grid',
            defaultFilter: "*",
            animationType: "rotateSides",
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 3,
            }, {
                width: 1100,
                cols: 3,
            }, {
                width: 767,
                cols: 2,
            }, {
                width: 480,
                cols: 1,
            }]
        });
    }

    function portfolioCategorySelected() {
        $("#filters-container div").click(function () {
            $("#filters-container div").removeClass("portfolioGallerySelected");
            $(this).addClass("portfolioGallerySelected");
        });
    }

    function scrollPortfolioHeadingToShow() {
        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".portfolioContainer").offsetHeight / 3;
            let selfContainerTimesMore = document.querySelector(".portfolioContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".portfolioContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector(".testimonialContainer").offsetTop - selfContainerTimesMore))) {
                $(".portfolioHeadingContent p span").addClass("animationClass");
                $(".portfolioHeadingContent p span").css("opacity", "1");
                $(".portfolioHeadingContent h2 span").addClass("animationClass");
                $(".portfolioHeadingContent h2 span").css("opacity", "1");
            }
        });
    }

    function modalOpenImage() {
        let modal = document.getElementsByClassName("modal")[0];

        $(".fa-search-plus").click(function () {
            $imgsrc = $(this).parent().parent().parent().siblings().attr('src');
            $(".modal-content img").attr("src", $imgsrc);
            $(".modal").fadeIn(500);
            $("body").css("overflow-y", "hidden");
        });

        $(".modal span").click(function () {
            $(".modal").fadeOut(500);
            $("body").css("overflow-y", "auto");
        });

        $(window).click(function () {
            if (event.target == modal) {
                $("body").css("overflow-y", "auto");
                $(".modal").fadeOut(500);
            }
        });
    }

    function modalImageSliderButtons() {
        let images = document.querySelectorAll(".cbp-item img");
        let imgContainer = document.querySelector(".modal-content img");

        let i = 0;

        $(".fa-backward").click(function () {
            i--;

            if (i >= 0) {
                imgContainer.src = images[i].src
            } else {
                i = images.length - 1;
                imgContainer.src = images[i].src
            }
        });

        $(".fa-forward").click(function () {
            i++;

            if (i < images.length) {
                imgContainer.src = images[i].src
            } else {
                i = 0;
                imgContainer.src = images[i].src
            }
        });

    }



    //============================================================================= TESTIMONIALS CAROUSEL HANDLER (PEOPLE AND SPEECH) (JQUERY)
    let sliderIndex = 0;
    testimonialExamplesToSet();
    testimonialRightToShow();
    testimonialLeftToShow();
    testimonialIntroToShow();


    function testimonialExamplesToSet() {
        $(".imageZoom").css("opacity", "0");
        $(".imageZoom").eq(0).css("opacity", "1");
        $(".testimonialPersonName").css("opacity", "0");
        $(".testimonialPersonName").eq(0).css("opacity", "1");
        $(".testimonialExampleSpeech").css("opacity", "0");
        $(".testimonialExampleSpeech").eq(0).css("opacity", "1");
    }

    function testimonialRightToShow() {
        $(".rightButton").click(function () {
            sliderIndex++;
            $(".imageZoom").css("opacity", "0");
            $(".testimonialPersonName").css("opacity", "0");
            $(".testimonialExampleSpeech").css("opacity", "0");
            if (sliderIndex < $(".imageZoom").length) {
                $(".imageZoom").eq(sliderIndex).css("opacity", "1");
                $(".testimonialPersonName").eq(sliderIndex).css("opacity", "1");
                $(".testimonialExampleSpeech").eq(sliderIndex).css("opacity", "1");
            } else {
                sliderIndex = 0;
                $(".imageZoom").eq(sliderIndex).css("opacity", "1");
                $(".testimonialPersonName").eq(sliderIndex).css("opacity", "1");
                $(".testimonialExampleSpeech").eq(sliderIndex).css("opacity", "1");
            }
            console.log(sliderIndex);
        });
    }

    function testimonialLeftToShow() {
        $(".leftButton").click(function () {
            sliderIndex--;
            $(".imageZoom").css("opacity", "0");
            $(".testimonialPersonName").css("opacity", "0");
            $(".testimonialExampleSpeech").css("opacity", "0");
            if (sliderIndex >= 0) {
                $(".imageZoom").eq(sliderIndex).css("opacity", "1");
                $(".testimonialPersonName").eq(sliderIndex).css("opacity", "1");
                $(".testimonialExampleSpeech").eq(sliderIndex).css("opacity", "1");
            } else {
                sliderIndex = $(".imageZoom").length - 1;
                $(".imageZoom").eq(sliderIndex).css("opacity", "1");
                $(".testimonialPersonName").eq(sliderIndex).css("opacity", "1");
                $(".testimonialExampleSpeech").eq(sliderIndex).css("opacity", "1");
            }
            console.log(sliderIndex);
        });
    }

    function testimonialIntroToShow() {
        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".testimonialContainer").offsetHeight / 1.2;
            let selfContainerTimesMore = document.querySelector(".testimonialContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".testimonialContainer").offsetTop - selfContainerTimesLess - 200)) && (window.scrollY < (document.querySelector(".testimonialExample").offsetTop - selfContainerTimesMore - 100))) {
                $(".testimonialIntro").css("right", "0");
                $(".testimonialIntro").css("opacity", "1");
            }
        });
    }



    //============================================================================= TESTIMONIALS CAROUSEL HANDLER (ENVATO) (JQUERY)
    envatoCarouselHandler();


    function envatoCarouselHandler() {
        $('.envatoCarousel').owlCarousel({
            loop: true,
            margin: 0,
            smartSpeed: 2000,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            autoplayTimeout: 4000,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                750: {
                    items: 3
                },
                950: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }




    //============================================================================= BLOG CARDS CAROUSEL AND VISIBILITY HANDLER AND MODAL VIDEO (JQUERY)
    blogCarouselHandler();
    blogCardsToShow();
    modalOpenVideo();


    function blogCarouselHandler() {
        $('.blogCarousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

        // ============================== SET THE ARROW TO CAROUSEL NAVIGATION
        $(".owl-prev").html("<i class='fas fa-long-arrow-alt-left'></i>");
        $(".owl-next").html("<i class='fas fa-long-arrow-alt-right'></i>");
    }

    function blogCardsToShow() {
        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".blogContainer").offsetHeight / 1.2;
            let selfContainerTimesMore = document.querySelector(".blogContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".blogContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector(".contactContainer").offsetTop - selfContainerTimesMore))) {
                $(".blogHeadingContent p span").addClass("animationClass");
                $(".blogHeadingContent p span").css("opacity", "1");
                $(".blogHeadingContent h2 span").addClass("animationClass");
                $(".blogHeadingContent h2 span").css("opacity", "1");
            }
            if ((window.scrollY > (document.querySelector(".blogContainer").offsetTop - selfContainerTimesLess + 250)) && (window.scrollY < (document.querySelector(".contactContainer").offsetTop - selfContainerTimesMore - 100))) {
                $(".blogCard").css("opacity", "1");
                $(".blogCard").css("bottom", "0");
            }
            if ((window.scrollY > (document.querySelector(".blogContainer").offsetTop - selfContainerTimesLess + 300)) && (window.scrollY < (document.querySelector(".contactContainer").offsetTop - selfContainerTimesMore - 300))) {
                $(".blogCard").addClass("blogCardTransitionSetter");
            }
        });
    }


    //============================================================================= MODAL VIDEO HANDLER (JQUERY, JAVASCRIPT)
    function modalOpenVideo() {
        let playIcon = document.querySelector(".playVideoButton");
        let modalVIdeo = document.querySelectorAll(".modal-content-video iframe")[0];
        let modal = document.getElementsByClassName("modal-video")[0];

        $(".modal-video").fadeOut(0.001);

        playIcon.addEventListener("click", function () {
            $(".modal-video").fadeIn(500);
            document.querySelector("body").style.overflowY = "hidden";

            modalVIdeo.style.width = "100%";
        })

        let exit = document.querySelector(".modal-content-video span");

        exit.addEventListener("click", function () {
            $(".modal-video").fadeOut(500);
            document.querySelector("body").style.overflowY = "auto";
        })

        window.addEventListener("click", function () {
            if (event.target == modal) {
                document.querySelector("body").style.overflowY = "auto";
                $(".modal-video").fadeOut(500);
            }
        })
    }




    //============================================================================= CONTACT PARTS TO SHOW (JQUERY)
    contactPartsToShow();


    function contactPartsToShow() {
        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".contactContainer").offsetHeight / 1.2;
            let selfContainerTimesMore = document.querySelector(".contactContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".contactContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector(".mapContainer").offsetTop - selfContainerTimesMore))) {
                $(".contactInfo").css("right", "0");
                $(".contactInfo").css("opacity", "1");
                $(".contactInput").css("left", "0");
                $(".contactInput").css("opacity", "1");

                $(".contactHeading p span").addClass("animationClass");
                $(".contactHeading p span").css("opacity", "1");
                $(".contactHeading h2 span").addClass("animationClass");
                $(".contactHeading h2 span").css("opacity", "1");
            }
        });
    }




    //============================================================================= LOCATION IMAGE MAKE DRAGGABLE (JQUERY UI)
    locationImageDraggable();

    function locationImageDraggable() {
        $(".locationImage").draggable({
            revert: "invalid",
            cursor: "grab"
        });


        $(".mapContainer").droppable({
            accept: ".locationImage"
        });
    }




    //============================================================================= CONNECT PARTS TO SHOW (JQUERY)
    connectPartsToShow();


    function connectPartsToShow() {
        window.addEventListener("scroll", function () {
            let selfContainerTimesLess = document.querySelector(".mapContainer").offsetHeight / 1.2;
            let selfContainerTimesMore = document.querySelector(".mapContainer").offsetHeight * 0.83;
            if ((window.scrollY > (document.querySelector(".mapContainer").offsetTop - selfContainerTimesLess)) && (window.scrollY < (document.querySelector("footer").offsetTop - selfContainerTimesMore))) {
                $(".connectedMainBox h2 span").addClass("animationClass");
                $(".connectedInput form").addClass("animationClass");
                $(".connectedMainBox h2 span").css("opacity", "1");
                $(".connectedInput form").css("opacity", "1");
            }
        });
    }




    //============================================================================= FOOTER ICONS TO SHOW (JQUERY)
    footerIconsToShow();
    footerNavbarToWork();


    function footerIconsToShow() {
        window.addEventListener("scroll", function () {
            if (window.scrollY > document.querySelector(".mapContainer").offsetTop - 200) {
                $(".footerIconsContainer").css({
                    "opacity": "1",
                    "top": "0"
                });
            }
        });
    }

    function footerNavbarToWork() {
        $(".footerInfo ul li").click(function () {
            let navigationIndex = $('.footerInfo ul li').index(this);
            scrollToNavSections(navigationIndex);
        });
    }




    //============================================================================= SCROLL TO TOP MOVER (JQUERY)
    scrollTopMoverIcon();

    function scrollTopMoverIcon() {
        window.addEventListener("scroll", function () {
            if (window.scrollY > document.querySelector(".homeContainer").offsetHeight) {
                $(".toTopButton").fadeIn(500);
                $(".toTopButton").css("display", "flex");
            } else {
                $(".toTopButton").fadeOut(500);
            }
        });

        $(".toTopButton").on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
        });
    }




});