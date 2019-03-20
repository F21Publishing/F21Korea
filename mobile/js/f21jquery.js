//--------- ver 161031
//-- fnBindHeaderInfo();
$(document).ready(function() {
	try {
		var curBrand = getUrlParameter('br');
		var curCategory = getUrlParameter('category');

		if (curCategory.toLowerCase().indexOf('acc_beauty') >= 0)
			fnShowSubMenu(4);
		else if (curBrand.toLowerCase() == 'plus')
			fnShowSubMenu(1);
		else if (curBrand.toLowerCase() == '21men')
			fnShowSubMenu(2);
		else if (curBrand.toLowerCase() == 'girls')
			fnShowSubMenu(3);
		else
			fnShowSubMenu(0);

		if ($('#divLandingLinks').length > 0) {
			$('header').addClass('p_fixed');
			$('header').addClass('p_high_index');
			$('main').addClass('fixedheader');
			$('footer').addClass('fixedheader');
		}
	}
	catch (err) {
		fnShowSubMenu(0);
	}
});
//-- hamburger menu 1depth
function fnShowSubMenu(seq) {
	var topList = $('div.span_16_of_16.mega_menu ul li a');
	var subList = $('div.span_16_of_16.sub_menu');
	
	subList.css('display', 'none');
	topList.removeClass('active');
	$(topList[seq]).addClass('active');

	if (subList.length - 1 >= seq) {
	$('#' + subList[seq].id).css('display', 'block');
	}
	else {
	$('#' + subList[0].id).css('display', 'block');
	}
}

// -- navigation
function fnToggleLeftMenu() {	
	if ($('#global').hasClass('open_menu')) { 
		$('#mobile_wrapper, #global').removeClass('open_menu'); 
		$('#global_mobile').removeClass('close'); 
	}
	else {
		$('#mobile_wrapper, #global').addClass('open_menu');
		$('#global_mobile').addClass('close');
	}
}

// -- navigation sub not yet
function fnToggleSubMenu(id) {
	$('#global .g_nav li ul').each(function () {
		if (this.id != id) {
			$(this).slideUp('500');
			$.removeCookie(this.id, { expires: 1, path: '/' });
		}
	});
	if ($('#' + id).is(':hidden')) {
		$('#' + id).slideDown('500', function () {
			$.cookie(id, 'open', { expires: 1, path: '/' });

			$('#global').animate({
				scrollTop: $('#' + id).offset().top + $('#global').scrollTop()
			}, "slow")
		});
	}
	else {
		$('#' + id).slideUp('500', function () {
			$.removeCookie(id, { expires: 1, path: '/' });

			$('#global').animate({
				scrollTop: $('#global').offset().top
			}, "slow")
		});
	}
}

// -- Slider
$(window).load(function(){	
	//-- 2depth
	$('#owl-depth-two').owlCarousel ({
		loop: false,
		margin: 15,
		nav: true,
		dots: false,
		autoWidth: true
	}); 
});

$(document).ready(function() {
	// -- main banner
	$("#m1_banner").owlCarousel ({
		nav: false,
		dots: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		autoPlay: 4000,
		items:1
	}); 

	// -- free shipping
	var carouselList = ["#owl-season-one",
						"#owl-season-two",
						"#owl-season-three",
						"#owl-season-four",
						"#owl-season-five",
						"#owl-season-six",
						"#owl-season-seven",
						"#owl-season-eight"];

	$.each(carouselList, function (index, value) {
		$(value).owlCarousel({
			nav: false,
			dots: true,
			slideSpeed: 300,
			paginationSpeed: 400,
			autoPlay: false,
			rewindNav: false,
			margin:10,
			items:1
		});
	});

	$("#owl-best-item").owlCarousel ({
		loop:true,
		margin:10,
		nav: false,
		dots: true,
		items:1
	});

	search = $('#whatsnewArea #f21');

	for (var i = 4; i < search.length; i++) {
		$(search[i]).hide();
	}

});

//-- Search
function fnSlideSearchArea(type) {
    if (type == 'close') {
        $('#btnSubSearch').hide();
        $('#search_suggestion_sub').hide();
        $('#ihKeyword').val('');
    }

    $("#divSubSearchArea").animate({ width: 'toggle' }, 350, function () {
        if (type == 'open') {
            $('#btnSubSearch').show();
			$('.btn_search').addClass('btn_close');
        }
    });
    
}

//-- Depth
$(document).ready(function() {
	var openTwoDepth = false;
	$('.open_depth').click(function () {
		if (openTwoDepth == false) {
			$('.depth_two').addClass('active');
			openTwoDepth = true;
		} else {
			$('.depth_two').removeClass('active');
			openTwoDepth = false;
		}
	});

	var openThreeDepth = false;
	$('.depth_two a').click(function () {
		$('.depth_three').slideDown();
		$('.depth_two a').removeClass('active');
		$(this).addClass('active');
	});

	$('.depth_three .close').click(function () {
		$('.depth_three').slideUp();
		$('.depth_two a').removeClass('active');
	});
});


//-- Depth
$(window).load(function () {
    $('.depth_three li a').click(function () {
        $('.depth_three li').removeClass('active');
        $(this).parent().addClass('active');
    });
});


// --Countru List
function fnViewCountryList() {
	$(".f_submenu").toggle();
}

function fnApplyView() {
	if (divID == 'filter_list') {
		$('#shoppingbag_list').removeClass('open_right');
		$('#filter_list').addClass('open_right');
		$('body, #mobile_wrapper').addClass('open_right');
	}
	else {
		$('#filter_list').removeClass('open_right');
		$('#shoppingbag_list').addClass('open_right');
		$('body, #mobile_wrapper').addClass('open_right');
	}
}

//-- Filter List
function fnShowDiv(divID) {
	if (divID == 'filter_list') {
		$('#shoppingbag_list').removeClass('open_right');
		$('#filter_list').addClass('open_right');
		$('body, #mobile_wrapper').addClass('open_right');
	}
	else {
		$('#filter_list').removeClass('open_right');
		$('#shoppingbag_list').addClass('open_right');
		$('body, #mobile_wrapper').addClass('open_right');
	} 
}

$(document).ready(function() {
    $('.right_wrapper').append('<a class=right_close></a>');

	$('.right_close').click(function () {
		$('.right_wrapper').removeClass('open_right');
        $('body, #mobile_wrapper').removeClass('open_right');
	});
});

// $(document).bind('click', function (d) {
//     if (!$(d.target).parents().hasClass("c_filter")) {
// 	$("#filter_list").removeClass('open_right');
// 	$('body, #mobile_wrapper').removeClass('open_right');
// 	}
// });

// Set price filter
$(document).ready(function() {
	$("#slider").rangeSlider({
		bounds:{min: 0, max: 15000},
		defaultValues: { min: 0, max: 15000 },
		step: 1
	});
	if(0 != '')
		$("#slider").rangeSlider("min", 0);

	if(100000 != '')
		$("#slider").rangeSlider("max", 100000);

	//todo: uncomment
	/*$("#slider").bind("valuesChanged", function (e, data) {
		fnCheckFilterClose('price');
	});*/
});

// -- Accordion
function fnToggleContent(titleId, contentId) {
	if ($('#' + titleId).hasClass('selected')) {
		$('#' + contentId).slideUp();
		$('#' + contentId).hasClass('');
		$('#' + titleId).removeClass('selected');
		scroll = "hide";
	}
	else {
		$('#' + contentId).slideDown();
		$('#' + titleId).addClass('selected');
		scroll = "show";
	}
}

function fnToggleContent2(titleId, contentId1, contentId2) {
	if ($('#' + titleId).hasClass('selected')) {
		$('#' + contentId1).slideUp();
		$('#' + contentId1).hasClass('');
		$('#' + contentId2).slideUp();
		$('#' + contentId2).hasClass('');
		$('#' + titleId).removeClass('selected');
		scroll = "hide";
	}
	else {
		$('#' + contentId1).slideDown();
		$('#' + contentId2).slideDown();
		$('#' + titleId).addClass('selected');
		scroll = "show";
	}
}

//-- Category List View
$(document).ready(function() {
	$('.fnApplyView1').click(function () {
		$('.category_wrapper .category_list').removeClass('half');
	});
	$('.fnApplyView2').click(function () {
		$('.category_wrapper .category_list').addClass('half');
	});
});

// -- Dropdown
$(document).ready(function() {
	var dropdowns = $(".dropdown");
	dropdowns.find("dt").click(function () {

		if (dropdowns.find("dd > ul").css('display') == 'block') {
			dropdowns.find("dd > ul").css('display', 'none');
		}
		else {
			dropdowns.find("dd > ul").hide();
			$(this).next().children().slideToggle("fast");
		}
	});
	dropdowns.find("dd > ul li a").click(function () {
		var leSpan = $(this).parents(".dropdown").find("dt a span");
		$(this).parents(".dropdown").find('dd a').each(function () {
			$(this).removeClass('selected');
		});
		leSpan.html($(this).html());
		//add value for checkout country
		leSpan.attr("value", $(this).attr("value"));
		if ($(this).hasClass('default')) {
			leSpan.removeClass('selected')
		} else {
			leSpan.addClass('selected');
			$(this).addClass('selected');
		}
		$(this).parents("dd > ul").hide();
	});
});

$(document).bind('click', function (d) {
    if (!$(d.target).parents().hasClass("dropdown")) $(".dropdown > dd ul").hide();
});

//-- Back To Top
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.btn_top').fadeIn();
    } else {
        $('.btn_top').fadeOut("fast");
    }
});
$('.btn_top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 200);
    return false;
});


//--------- ver 160621
window.addEventListener('popstate', function () {
    // If fresh page is false that means it is a cached page, remove html and reload page.
    if (!freshPage) {
        $('html').remove();
        window.location.reload();
    } else {
        freshPage = false;
    }
});

$(".btn_addtobag.fixed").click(function () {
    $('html,body').animate({ scrollTop: $(".pdp_option").offset().top }, 'fast');
    $(".pdp_option").css("margin-top", "5em");
    $(".color_p .dropdown #tooltip").slideToggle("fast");
});

// Tablet & Mobile
var dpr = window.devicePixelRatio;
if (dpr > 0) {
    $(".pre_header div[class^='t_']:has(.t_submenu) span").click(function () {
        $(this).closest(".pre_header div[class^='t_']").children(".t_submenu").slideToggle("fast");
        $(this).closest(".pre_header div[class^='t_']").siblings().children().next().hide();
        return false;
    })
    $(".quick_view").css("display", "block");
    $(".f_country").click(function () {
        $(".f_submenu").slideToggle("fast");
    })
} else { }

$(document).bind('click', function (e) {
    if (!$(e.target).hasClass(".pre_header div[class^='t_']")) $(".t_submenu").hide();
});

// Filter
var openCate = false;
$('.seo_cat').click(function () {
    if (openCate == false) {
        $('.left_nav').slideDown();
        $(this).parents('html').addClass('open_category');
        openCate = true;
    } else {
        $(".left_nav").slideUp();
        $(this).parents('html').removeClass('open_category');
        openCate = false;
    }
});

var openCate2 = false;
$('.wishlist_top').click(function () {
    if (openCate2 == false) {
        $('.topmenu_nav').slideDown();
        $(this).parents('html').addClass('open_category');
        openCate2 = true;
    } else {
        $(".topmenu_nav").slideUp();
        $(this).parents('html').removeClass('open_category');
        openCate2 = false;
    }
});

$(document).bind('click', function (e) {
    if (!$(e.target).hasClass("seo_cat")) {
        $(".left_nav").slideUp();
        $(this).parents('html').removeClass('open_category');
        openCate = false;
    }
});

// PDP Wishlist 
$("#addtowishlist").click(function () {
    $("#wishlist_list").slideToggle("fast");
});

$("#addnewwish").click(function () {
    $("#addnewwishlist").slideToggle("fast");
    $("#wishlists").hide();
});

// Show password
$("#showHide").click(function () {
    if ($(".password").attr("type") == "password") {
        $(".password").attr("type", "text");
    } else {
        $(".password").attr("type", "password");
    }
});

// $('a#global_mobile').on('click', function (e) {
//     $("nav#global, body, html, #mobile_wrapper").toggleClass('open_menu');

//     if ($('.open_menu').css('display') != 'none') {
//         $('#global .g_nav li ul').each(function () {
//             if ($.cookie(this.id) == 'open') {
//                 $(this).slideDown('500', function () {
//                     $('.open_menu').animate({
//                         scrollTop: $('#' + this.id).offset().top + $('#global').scrollTop()
//                     }, "fast")
//                 });
//                 $(this).show();
//             } else {
//                 $(this).slideUp('500');
//                 $(this).hide();
//             }
//         });
//     }
//     //$('#main button').css('display', 'none');
//     return false;
// });

$('.go_back').on('click', function (e) {
    $("#global.open_menu .submenu").removeClass('open_submenu');
});


$('div#left_overlay').on('click', function () {
    $('.open_menu').scrollTop(0);
    $("nav#global, body, html, #mobile_wrapper").removeClass('open_menu');
    $("#global .submenu").removeClass('open_submenu');
    $(".g_nav").show();
    $(".left_footer").show();
})

// Checkout Page
$("#add_new, #ck_change, .t_shoppingbag, #filters, #forgotpassword, #findstore").on('click', function () {
    $('.open_right').scrollTop(0);
    $("body, html, .right_wrapper, #mobile_wrapper").toggleClass('open_right');
    return false;
});

$('div#right_overlay, #close_cancel').on('click', function () {
    $('.open_right').scrollTop(0);
    $("body, html, .right_wrapper, #mobile_wrapper").removeClass('open_right');
})

$("#redeem").click(function () {
    $("#giftcard_form").slideToggle('fast');
    $(this).hide();
})

$("#coupon_show").click(function () {
    $("#coupon_form").slideToggle('fast');
    $(this).hide();
})

$("#point_show").click(function () {
    $("#point_form").slideToggle('fast');
    $(this).hide();
})


$("#apply_promo").click(function () {
    $("#promotion_form").slideToggle('fast');
    $(this).hide();
})

$(".pdp_social .close_popup").click(function () {
    $(".pdp_social").hide();
    $(".icon_pdp_social").slideToggle("fast");
});

$('#pdp_zoom #product_image').bind('click', fnCloseSlideMenus);

$('#pdp_zoom #product_image').bind('touchend', fnCloseSlideMenus);

function fnCloseSlideMenus() {
    if ($("#pdp_zoom #PriceAddtobag").css('display') == 'none')
        $("#pdp_zoom #PriceAddtobag").css('display', 'block');

    if ($('.slideup_wrapper.review').hasClass('slide_up'))
        $('.slideup_wrapper.review').removeClass('slide_up');

    if ($('.slideup_wrapper.sizechart').hasClass('slide_up'))
        $('.slideup_wrapper.sizechart').removeClass('slide_up');

    if ($('.slideup_wrapper.color_option').hasClass('slide_up'))
        $('.slideup_wrapper.color_option').removeClass('slide_up');

    if ($('#size_info').hasClass('slide_up'))
        $('#size_info').removeClass('slide_up');

    if ($('#detail_info').hasClass('slide_up'))
        $('#detail_info').removeClass('slide_up');
}

//pdp_info click
$(".pdp_info").click(function () {

    var isSlideup = false;
    if ($(".slideup_wrapper.detail_info").hasClass('slide_up')) {
        isSlideup = true;
    }

    $("#pdp_zoom #PriceAddtobag").css('display', 'none');
    $('.slideup_wrapper.color_option').removeClass('slide_up');
    $(".slideup_wrapper.size_option").removeClass('slide_up');
    $(".select_size").removeClass('selected');

    if (!isSlideup) {
        $(".slideup_wrapper.detail_info").toggleClass('slide_up');
        $('body').addClass('pdp_body_click_info');
    }
})

//pdp_info Close
$(".slideup_wrapper.detail_info .close_popup").click(function () {
    //$(".slideup_wrapper.detail_info").slideToggle("fast");
    $(".slideup_wrapper.detail_info").removeClass('slide_up');
    $('body').removeClass('pdp_body_click_info');

    if ($("#pdp_zoom #PriceAddtobag").css('display') == 'none')
        $("#pdp_zoom #PriceAddtobag").css('display', 'block');
})

//Color Click
$(".pdp_color_wrapper").click(function () {
    var isSlideup = false;
    if ($(".slideup_wrapper.color_option").hasClass('slide_up')) {
        isSlideup = true;
    }

    $("#pdp_zoom #PriceAddtobag").css('display', 'none');
    $(".slideup_wrapper.detail_info").removeClass('slide_up');
    $(".slideup_wrapper.size_option").removeClass('slide_up');
    $(".select_size").removeClass('selected');

    if (!isSlideup) {
        $(".slideup_wrapper.color_option").toggleClass('slide_up');
        $('body').addClass('pdp_body_click_info');
    }
})

//Color Close
$(".slideup_wrapper.color_option .close_popup").click(function () {
    $('.slideup_wrapper.color_option').removeClass('slide_up');

    if ($("#pdp_zoom #PriceAddtobag").css('display') == 'none')
        $("#pdp_zoom #PriceAddtobag").css('display', 'block');
})

//AddToBag Click
$("button#addtobag").click(function () {

    var isSlideup = false;
    if ($(".slideup_wrapper.size_option").hasClass('slide_up')) {
        isSlideup = true;
    }

    $("#pdp_zoom #PriceAddtobag").css('display', 'none');
    $(".slideup_wrapper.detail_info").removeClass('slide_up');
    $('.slideup_wrapper.color_option').removeClass('slide_up');
    $(".select_size").removeClass('selected');

    if (!isSlideup) {
        $(".slideup_wrapper.size_option").toggleClass('slide_up');
        $('body').addClass('pdp_body_click_info');
    }
})

//AddToBag Close
$(".slideup_wrapper.size_option .close_popup").click(function () {
    $('.slideup_wrapper.size_option').removeClass('slide_up');
    $(".select_size").removeClass('selected');

    if ($("#pdp_zoom #PriceAddtobag").css('display') == 'none')
        $("#pdp_zoom #PriceAddtobag").css('display', 'block');
})

//All Popup close
function fnClosePopup(isSizeClose) {
    $(".slideup_wrapper.detail_info").removeClass('slide_up');
    $('.slideup_wrapper.color_option').removeClass('slide_up');

    if(isSizeClose=="1")
        $(".slideup_wrapper.size_option").removeClass('slide_up');

    $(".select_size").removeClass('selected');
    $('body').removeClass('pdp_body_click_info');

    if ($("#pdp_zoom #PriceAddtobag").css('display') == 'none')
        $("#pdp_zoom #PriceAddtobag").css('display', 'block');
}


$("button.select_size").click(function () {
    $(".slideup_wrapper.size_option").removeClass('slide_up');
})

$('.top_icon_search').click(function () {
    if ($('.search_wrapper.new').css('display') == 'none') {
        $('.search_wrapper.new').css('display', 'block');
        $('#clSearch2').focus();
    }
    else {
        $('.search_wrapper.new').css('display', 'none');
        $('#clSearch2').val('');
        $('.new_search #search_suggestion').css('display', 'none');
    }
})
$('.top_icon_search2').click(function () {
    if ($('.search_wrapper.new').css('display') == 'none') {
        $('.search_wrapper.new').css({ left: 0, top: 50 });
        $('.search_wrapper.new').css('display', 'block');
        $('#clSearch2').focus();
    }
    else {
        $('.search_wrapper.new').css('display', 'none');
        $('#clSearch2').val('');
        $('.new_search #search_suggestion').css('display', 'none');
    }
})
$('.new_search .close_popup').click(function () {
    $('.search_wrapper.new').css('display', 'none');
    $('#clSearch2').val('');
    $('.new_search #search_suggestion').css('display', 'none');
})
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookieName(cname) {
    var user = getCookie(cname);
    return user;
}

function checkCookieValue(cname, pname) {
    var user = getCookie(cname);
    var name = pname + "=";
    var ca = user.split('&');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function fnOnBlock(message) {
    $.blockUI({
        message: '<div style="background:#333; display:block; margin:auto; line-height:1.5em; width:50%; padding: 1em; text-align:center; color: #fff;"><img src="/images/en/mobile/common/ajax-loader.gif" style="width:40px;" /><br/><br/>' + message + '</div>',
        css: {
            border: 'none',
            backgroundColor: 'rbga(51,51,51,0.5)',
            width: '100%',
            height: '100%',
            left: '0'
        },
        overlayCSS: {
            opacity: '0'
        }

    });
}

function fnOnBlockUseCustomerImage(message, imgName) {
    $.blockUI({
        message: '<div style="background:#333; display:block; margin:auto; line-height:1.5em; width:50%; padding: 1em; text-align:center; color: #fff;"><img src="/images/en/mobile/common/' + imgName + '" style="width:40px;" /><br/><br/>' + message + '</div>',
        css: {
            border: 'none',
            backgroundColor: 'rbga(51,51,51,0.5)',
            width: '100%',
            height: '100%',
            left: '0'
        },
        overlayCSS: {
            opacity: '0'
        }
    });
}


function fnOnBlock_Loading() {
    $.blockUI({
        message: "<h1 style='font-family: Arial, Helvetica, sans-serif;'><img src='/images/en/mobile/common/loading.gif' style='width:40px; height:10px;' /></h1>",
        css: {
            width: '20%',
            top: '50%',
            left: '40%',
            border: 'none',
            padding: '15px',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff'
        }
    });
}

function fnUnBlock() {
    $.unblockUI();
}

function fnRemoveDOM(id) {
    $('#' + id).remove();
}
