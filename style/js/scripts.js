$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER
	/*-----------------------------------------------------------------------------------*/
        var options = {
            offset: 300,
            offsetSide: 'top',
            classes: {
                clone:   'banner--clone fixed',
                stick:   'banner--stick',
                unstick: 'banner--unstick'
            },
            onStick: function() {
	            $($.SmartMenus.Bootstrap.init);
            }
        };
        var banner = new Headhesive('.navbar', options);
    /*-----------------------------------------------------------------------------------*/
    /*	HAMBURGER MENU ICON
	/*-----------------------------------------------------------------------------------*/
    var toggles = document.querySelectorAll(".nav-bars");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
        });
    };
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE PORTFOLIO GRID
	/*-----------------------------------------------------------------------------------*/
    var $portfoliogrid = $('.portfolio-grid .isotope');
    $portfoliogrid.isotope({
        itemSelector: '.item',
        transitionDuration: '0.7s',
        masonry: {
            columnWidth: $portfoliogrid.width() / 12
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $portfoliogrid.isotope({
            masonry: {
                columnWidth: $portfoliogrid.width() / 12
            }
        });
    });
    $('.portfolio-grid .isotope-filter').on('click', '.button', function() {
        var filterValue = $(this).attr('data-filter');
        $portfoliogrid.isotope({
            filter: filterValue
        });
    });
    $('.portfolio-grid .button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
    $portfoliogrid.imagesLoaded(function() {
        $portfoliogrid.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE GRID VIEW COL3
    /*-----------------------------------------------------------------------------------*/
    var $gridviewcol4 = $('.grid-view.col4 .isotope');
    $gridviewcol4.isotope({
        itemSelector: '.grid-view-post',
        transitionDuration: '0.6s',
        masonry: {
            columnWidth: '.col-sm-6.col-md-3'
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $gridviewcol4.isotope({
            masonry: {
                columnWidth: '.col-sm-6.col-md-3'
            }
        });
    });
    $gridviewcol4.imagesLoaded(function() {
        $gridviewcol4.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE GRID VIEW COL3
    /*-----------------------------------------------------------------------------------*/
    var $gridviewcol3 = $('.grid-view.col3 .isotope');
    $gridviewcol3.isotope({
        itemSelector: '.grid-view-post',
        transitionDuration: '0.6s',
        masonry: {
            columnWidth: '.col-sm-6.col-md-4'
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $gridviewcol3.isotope({
            masonry: {
                columnWidth: '.col-sm-6.col-md-4'
            }
        });
    });
    $gridviewcol3.imagesLoaded(function() {
        $gridviewcol3.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE GRID VIEW COL2
    /*-----------------------------------------------------------------------------------*/
    var $gridviewcol2 = $('.grid-view.col2 .isotope');
    $gridviewcol2.isotope({
        itemSelector: '.grid-view-post',
        transitionDuration: '0.6s',
        masonry: {
            columnWidth: '.col-md-6.col-sm-12'
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $gridviewcol2.isotope({
            masonry: {
                columnWidth: '.col-md-6.col-sm-12'
            }
        });
    });
    $gridviewcol2.imagesLoaded(function() {
        $gridviewcol2.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	LIGHTGALLERY
	/*-----------------------------------------------------------------------------------*/
    $('.light-gallery').lightGallery({
        thumbnail: true,
        selector: '.lgitem',
        animateThumb: true,
        showThumbByDefault: false,
        download: false,
        autoplayControls: false,
        thumbWidth: 100,
        thumbContHeight: 80,
        videoMaxWidth: '1000px'
    });
    /*-----------------------------------------------------------------------------------*/
    /*	OWL CAROUSEL
	/*-----------------------------------------------------------------------------------*/
    $('.owl-info').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 1
    });
    $('.portfolio-carousel').owlCarousel({
        margin: 20,
        stagePadding: 20,
        loop: true,
        nav: false,
        navText: ['', ''],
        dots: true,
        responsive: {
            0: {
	            items: 1
	        },
	        768: {
	            items: 2
	
	        },
            1024: {
                items: 3
            },
			1441: {
                items: 4
            },
            1950: {
                items: 5
            }
        }
    });
    $('.portfolio-carousel2').owlCarousel({
        margin: 30,
        loop: false,
        nav: false,
        navText: ['', ''],
        dots: true,
        responsive: {
            0: {
	            items: 1
	        },
	        768: {
	            items: 2
	
	        },
            1024: {
                items: 3
            }
        }
    });
    $('.blog-carousel').owlCarousel({
        margin: 30,
        loop: false,
        nav: false,
        navText: ['', ''],
        items: 5,
        dots: true,
        responsive: {
	        0: {
	            items: 1
	        },
	        768: {
	            items: 2
	
	        },
	        992: {
	            items: 3
	        }
	    }
    });
    $('.blog-carousel2').owlCarousel({
        margin: 30,
        stagePadding: 20,
        loop: false,
        nav: false,
        navText: ['', ''],
        items: 5,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
			1441: {
                items: 4
            },
            1950: {
                items: 5
            }
        }
    });
    $('.testimonials1').owlCarousel({
        autoplay: true,
        autoplayTimeout: 8000,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 1
    });
    $('.testimonials2').owlCarousel({
        autoplay: true,
        autoplayTimeout: 8000,
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
	        0: {
	            items: 1
	        },
	        768: {
	            items: 2
	
	        },
	        992: {
	            items: 3
	        }
	    }
    });
    $('.team').owlCarousel({
        autoplay: false,
        autoplayTimeout: 8000,
        loop: false,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
	        0: {
	            items: 1
	        },
	        768: {
	            items: 2
	
	        },
	        992: {
	            items: 4
	        }
	    }
    });
    $('.clients').owlCarousel({
	    autoplay: true,
	    autoplayTimeout: 3000,
	    loop: true,
	    margin: 50,
	    nav: false,
	    dots: false,
	    responsive: {
	        0: {
	            items: 3
	        },
	        768: {
	            items: 5
	        },
	        1200: {
	            items: 6
	        }
	    }
	});
	$('.basic-slider').owlCarousel({
        items: 1,
        nav: true,
        navText: ['', ''],
        dots: true,
        autoHeight: false,
        loop: true,
        margin: 0
    });  
    /*-----------------------------------------------------------------------------------*/
    /*	REVOLUTION
	/*-----------------------------------------------------------------------------------*/
    $("#slider1").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        /*fullScreenOffsetContainer: ".navbar",*/
        spinner: "off",
        delay: 9000,
        shadow: 0,
        gridwidth: 1170,
        gridheight: 600,
        responsiveLevels: [4096, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch:{
	        	touchenabled:"on",
            },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20,
                tmp:''
            }
        }
    });
    $("#slider2").revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "off",
        delay: 9000,
        shadow: 0,
        gridwidth: 1170,
        gridheight: 600,
        responsiveLevels: [4096, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch:{
	        	touchenabled:"on",
            },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20,
                tmp:''
            }
        }
    });
    $("#slider3").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        /*fullScreenOffsetContainer: ".navbar",*/
        spinner: "off",
        delay: 9000,
        shadow: 0,
        gridwidth: 1170,
        gridheight: 600,
        responsiveLevels: [4096, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch:{
	        	touchenabled:"on",
            },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20,
                tmp:''
            }
        }
    });
    $("#flow").revolution({
        sliderType: "carousel",

        sliderLayout: "auto",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch:{
	        	touchenabled:"on",
            },
            bullets: {
                enable: false,
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                space: 5,
                h_offset: 0,
                v_offset: 20
            }
        },
        carousel: {
            maxRotation: 10,
            vary_rotation: "on",
            minScale: 10,
            vary_scale: "off",
            horizontal_align: "center",
            vertical_align: "center",
            fadeout: "on",
            vary_fade: "on",
            maxVisibleItems: 5,
            infinity: "on",
            space: 10,
            stretch: "off"
        },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: 750,
        gridheight: 500,
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }

    });
    $("#slider-video").revolution({
        sliderType: "standard",
        jsFileLocation: "../../revolution/js/",
        sliderLayout: "auto",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch:{
	        	touchenabled:"on",
            },
            bullets: {
                enable: false,
                hide_onleave: false,
                h_align: "center",
                v_align: "bottom",
                space: 5,
                h_offset: 0,
                v_offset: 20
            },
            thumbnails: {
                style: "erinyen",
                enable: true,
                width: 120,
                height: 68,
                min_width: 90,
                wrapper_padding: 0,
                wrapper_color: "transparent",
                wrapper_opacity: "1",
                tmp: '<span class="tp-thumb-over"></span><span class="tp-thumb-image"></span>',
                visibleAmount: 10,
                hide_onmobile: false,
                hide_onleave: false,
                direction: "horizontal",
                span: true,
                position: "outer-bottom",
                space: 10,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 0
            }
        },
        gridwidth: 1230,
        gridheight: 692,
        lazyType: "none",
        shadow: 0,
        spinner: "spinner2",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: 1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PARALLAX
	/*-----------------------------------------------------------------------------------*/
    parallaxInit('.parallax')
    /*-----------------------------------------------------------------------------------*/
    /*	BACKGROUND VIDEO PARALLAX
	/*-----------------------------------------------------------------------------------*/
    $('#video-work').backgroundVideo({
        $outerWrap: $('.outer-wrap'),
        pauseVideoOnViewLoss: false,
        parallaxOptions: {
            effect: 1.9
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
	/*-----------------------------------------------------------------------------------*/
    $('.overlay.icon .info').prepend('<span class="icon-more"></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	TAB COLLAPSE
	/*-----------------------------------------------------------------------------------*/
    $('#tab1').tabCollapse({
		tabsClass: 'hidden-sm hidden-xs',
		accordionClass: 'visible-sm visible-xs'
	});
	$('#tab1').on('shown-accordion.bs.tabcollapse', function(){
	    $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
	    $('.panel-group').on('shown.bs.collapse', function(e) {
	        $(e.target).closest('.panel-default').addClass(' panel-active');
	    }).on('hidden.bs.collapse', function(e) {
	        $(e.target).closest('.panel-default').removeClass(' panel-active');
	    });
	});
    /*-----------------------------------------------------------------------------------*/
    /*	TOGGLE
	/*-----------------------------------------------------------------------------------*/
    $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
    $('.panel-group').on('shown.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').addClass(' panel-active');
    }).on('hidden.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').removeClass(' panel-active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PROGRESS BAR
	/*-----------------------------------------------------------------------------------*/
    $('.progress-list .progress .bar').progressBar({
        shadow: false,
        percentage: false,
        animation: true,
        height: 4
    });
    /*-----------------------------------------------------------------------------------*/
    /*	DATA REL
	/*-----------------------------------------------------------------------------------*/
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
    /*-----------------------------------------------------------------------------------*/
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
	/*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint()
    /*-----------------------------------------------------------------------------------*/
    /*	COUNTER UP
	/*-----------------------------------------------------------------------------------*/
    $('.counter').counterUp({
        delay: 50,
        time: 1000
    });
    /*-----------------------------------------------------------------------------------*/
    /*	VANILLA
    /*-----------------------------------------------------------------------------------*/
    var myForm;
    myForm = new VanillaForm($("form.vanilla-form"));
    /*-----------------------------------------------------------------------------------*/
    /*	GO TO TOP
    /*-----------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp',
        // Element ID
        scrollDistance: 300,
        // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',
        // 'top' or 'bottom'
        scrollSpeed: 300,
        // Speed back to top (ms)
        easingType: 'linear',
        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',
        // Fade, slide, none
        animationInSpeed: 200,
        // Animation in speed (ms)
        animationOutSpeed: 200,
        // Animation out speed (ms)
        scrollText: '<span class="btn btn-square"><i class="ion-chevron-up"></i></span>',
        // Text for element, can contain HTML
        scrollTitle: false,
        // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false,
        // Set true to use image
        activeOverlay: false,
        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 1001 // Z-Index for the overlay
    });
    /*-----------------------------------------------------------------------------------*/
    /*	INSTAGRAM
    /*-----------------------------------------------------------------------------------*/
    var instagramFeed = new Instafeed({
        target: 'instafeed-widget',
        get: 'user',
        limit: 6,
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.dad6ca96bd7642519b573d52c3ef467f',
        resolution: 'low_resolution',
        template: '<div class="item col-xs-4 col-sm-6 col-md-4"><figure><a href="{{link}}" target="_blank"><div class="overlay icon"><div class="info"></div></div><img src="{{image}}" /></a></figure></div>',
        after: function() {
            $('#instafeed-widget .overlay.icon .info').prepend('<span class="icon-more"></span>');
        }
    });
    $('#instafeed-widget').each(function() {
        instagramFeed.run();
    });
    /*-----------------------------------------------------------------------------------*/
    /*	FITVIDS VIDEO
	/*-----------------------------------------------------------------------------------*/
    $('.player').fitVids();
    /*-----------------------------------------------------------------------------------*/
    /*	CIRCLE PROGRESS
    /*-----------------------------------------------------------------------------------*/
    if ($('.circle-progress-wrapper').length) {
        var circle1 = new ProgressBar.Circle('.circle.first', {
            color: '#7bc4e6',
            trailColor: 'rgba(255,255,255,0.1)',
            strokeWidth:2,
            trailWidth: 2,
            duration: 4500,
            easing: 'easeInOut',
            text: {
                value: '0.4'
            },
            step: function(state, bar) {
                bar.setText((bar.value() * 100).toFixed(0));
            }
        });
        circle1.animate(0.4);
        var circle2 = new ProgressBar.Circle('.circle.second', {
            color: '#63c5cb',
            trailColor: 'rgba(255,255,255,0.1)',
            strokeWidth: 2,
            trailWidth: 2,
            duration: 4500,
            easing: 'easeInOut',
            text: {
                value: '0.8'
            },
            step: function(state, bar) {
                bar.setText((bar.value() * 100).toFixed(0));
            }
        });
        circle2.animate(0.8);
        var circle3 = new ProgressBar.Circle('.circle.third', {
            color: '#c1d87a',
            trailColor: 'rgba(255,255,255,0.1)',
            strokeWidth: 2,
            trailWidth: 2,
            duration: 4500,
            easing: 'easeInOut',
            text: {
                value: '0.34'
            },
            step: function(state, bar) {
                bar.setText((bar.value() * 100).toFixed(0));
            }
        });
        circle3.animate(0.34);
        var circle4 = new ProgressBar.Circle('.circle.fourth', {
            color: '#f47285',
            trailColor: 'rgba(255,255,255,0.1)',
            strokeWidth: 2,
            trailWidth: 2,
            duration: 4500,
            easing: 'easeInOut',
            text: {
                value: '0.45'
            },
            step: function(state, bar) {
                bar.setText((bar.value() * 100).toFixed(0));
            }
        });
        circle4.animate(0.45);
    }
    /*-----------------------------------------------------------------------------------*/
	/*	WOW ANIMATION
	/*-----------------------------------------------------------------------------------*/
	new WOW().init();
	/*-----------------------------------------------------------------------------------*/
	/*	LAZY LOAD GOOGLE MAPS
	/*-----------------------------------------------------------------------------------*/
	// ;
	// (function($, window, document, undefined) {
	//     var $window = $(window),
	//         mapInstances = [],
	//         $pluginInstance = $('.google-map').lazyLoadGoogleMaps({
	//             callback: function(container, map) {
	//                 var $container = $(container),
	//                     center = new google.maps.LatLng($container.attr('data-lat'), $container.attr('data-lng'));
	
    //                 map.setOptions({
	//                     center: center,
	//                     zoom: 15,
	//                     zoomControl: true,
	//                     zoomControlOptions: {
	//                         style: google.maps.ZoomControlStyle.DEFAULT,
	//                     },
	//                     disableDoubleClickZoom: false,
	//                     mapTypeControl: true,
	//                     mapTypeControlOptions: {
	//                         style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
	//                     },
	//                     scaleControl: true,
	//                     scrollwheel: false,
	//                     streetViewControl: true,
	//                     draggable: true,
	//                     overviewMapControl: false,
	//                     mapTypeId: google.maps.MapTypeId.ROADMAP,
	//                     styles: [{
	//                         stylers: [{
	//                             saturation: -100
	//                         }, {
	//                             gamma: 1
	//                         }]
	//                     }, {
	//                         elementType: "labels.text.stroke",
	//                         stylers: [{
	//                             visibility: "off"
	//                         }]
	//                     }, {
	//                         featureType: "poi.business",
	//                         elementType: "labels.text",
	//                         stylers: [{
	//                             visibility: "off"
	//                         }]
	//                     }, {
	//                         featureType: "poi.business",
	//                         elementType: "labels.icon",
	//                         stylers: [{
	//                             visibility: "off"
	//                         }]
	//                     }, {
	//                         featureType: "poi.place_of_worship",
	//                         elementType: "labels.text",
	//                         stylers: [{
	//                             visibility: "off"
	//                         }]
	//                     }, {
	//                         featureType: "poi.place_of_worship",
	//                         elementType: "labels.icon",
	//                         stylers: [{
	//                             visibility: "off"
	//                         }]
	//                     }, {
	//                         featureType: "road",
	//                         elementType: "geometry",
	//                         stylers: [{
	//                             visibility: "simplified"
	//                         }]
	//                     }, {
	//                         featureType: "water",
	//                         stylers: [{
	//                             visibility: "on"
	//                         }, {
	//                             saturation: 50
	//                         }, {
	//                             gamma: 0
	//                         }, {
	//                             hue: "#50a5d1"
	//                         }]
	//                     }, {
	//                         featureType: "administrative.neighborhood",
	//                         elementType: "labels.text.fill",
	//                         stylers: [{
	//                             color: "#333333"
	//                         }]
	//                     }, {
	//                         featureType: "road.local",
	//                         elementType: "labels.text",
	//                         stylers: [{
	//                             weight: 0.5
	//                         }, {
	//                             color: "#333333"
	//                         }]
	//                     }, {
	//                         featureType: "transit.station",
	//                         elementType: "labels.icon",
	//                         stylers: [{
	//                             gamma: 1
	//                         }, {
	//                             saturation: 50
	//                         }]
	//                     }]
	//                 });
	//                 new google.maps.Marker({
	//                     position: center,
	//                     map: map
	//                 });
	
	//                 $.data(map, 'center', center);
	//                 mapInstances.push(map);
	
	//                 var updateCenter = function() {
	//                     $.data(map, 'center', map.getCenter());
	//                 };
	//                 google.maps.event.addListener(map, 'dragend', updateCenter);
	//                 google.maps.event.addListener(map, 'zoom_changed', updateCenter);
	//                 google.maps.event.addListenerOnce(map, 'idle', function() {
	//                     $container.addClass('is-loaded');
	//                 });
	//             }
	//         });
	
	//     $window.on('resize', $pluginInstance.debounce(1000, function() {
	//         $.each(mapInstances, function() {
	//             this.setCenter($.data(this, 'center'));
	//         });
	//     }));
	
	// })(jQuery, window, document);
	/*-----------------------------------------------------------------------------------*/
	/*	LOADING
	/*-----------------------------------------------------------------------------------*/
	$(window).load(function() {
	    $(".circle-progress-wrapper h4").css("visibility", "visible");
	    $('#status').fadeOut();
	    $('#preloader').delay(350).fadeOut('slow');
	    $('#preloader .textload').delay(0).fadeOut('slow');
	    $('body').delay(350).css({
	        'overflow': 'visible'
	    });
    });
    /*-----------------------------------------------------------------------------------*/
	/*	NAVBAR SCROLL To
	/*-----------------------------------------------------------------------------------*/
    var navLinks = {
        "oferta": $("#oferta")[0],
        "galeria": $("#galeria")[0],
        "kontakt": $("#kontakt")[0]
    }
    $(".navbar-nav").on("click", ".nav-link", function (event) {
        event.preventDefault();
        var element = $(this), // element[0].dataset["targetId"] return value for data-target-id html attribute
            target = navLinks[element[0].dataset["targetId"]]    
        $.scrollTo(target, 500, {
            offset: {
                top: -65,
                left: 0
            }
        })
    })
});