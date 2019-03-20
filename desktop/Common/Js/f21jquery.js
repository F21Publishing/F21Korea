$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut("fast");
    }
});
$('.scrollToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 200);
    return false;
});

// restore desktop megamenu
$(window).resize(function () {
    if ($(window).width() >= 1085 && $('#' + $('.hdSelectedSubMenu').val()).css('display') == 'none') {
        $('.mega_submenu').css('display', 'none');
        $('#' + $('.hdSelectedSubMenu').val()).css('display', 'block');
    }
});

$(window).load(function () {
    var dpr = window.devicePixelRatio;
    var screensize = screen.width;
    if (dpr > 1) {
        $(".pre_header > div[class^='t_'] span").click(function () {
            $(this).closest(".pre_header > div[class^='t_']").children(".t_submenu").slideToggle("fast");
            $(this).closest(".pre_header > div[class^='t_']").siblings().children().next().hide();
            return false;
        });
        $(".pre_header > .top_left > .t_search a").click(function () {
            $(".search_input").slideToggle("fast");
        });
        $(document).bind('click', function (e) {
            if (!$(e.target).hasClass(".pre_header div[class^='t_']")) $(".t_submenu").hide();
        });
    } else { }
    $(".pre_header > .top_left > .t_search a").click(function () {
        $(".search_input").slideToggle("fast");
    });

    $('.mega_mobile .icon_t_menu').click(function () {
        // initialize left mega menu
        //$('.mega_submenu').css('display', 'none');

        // show left mega menu
        $('#divMegamenu').addClass('show');
        $('#overlay').addClass('show');
        $('#main').addClass('show');
    });

    //    $("#addtowishlist").click(function () {
    //        $("#wishlist_list").slideToggle("fast");
    //    });
    $("#addnewwish").click(function () {
        $("#addnewwishlist").slideToggle("fast");
        $("#wishlists").hide();
    });
    $("#showHide").click(function () {
        if ($(".password").attr("type") == "password") {
            $(".password").attr("type", "text");
        } else {
            $(".password").attr("type", "password");
        }
    });

    var dropdowns = $(".dropdown");
    dropdowns.find("dt").click(function () {
        dropdowns.find("dd > ul").hide();
        $(this).next().children().slideToggle("fast");
    });
    dropdowns.find("dd > ul li a").click(function () {
        var leSpan = $(this).parents(".dropdown").find("dt a span");
        $(this).parents(".dropdown").find('dd a').each(function () {
            $(this).removeClass('selected');
        });
        leSpan.html($(this).html());
        if ($(this).hasClass('default')) {
            leSpan.removeClass('selected')
        } else {
            leSpan.addClass('selected');
            $(this).addClass('selected');
        }
        $(this).parents("dd > ul").hide();
    });

    $(document).bind('click', function (d) {
        if (!$(d.target).parents().hasClass("dropdown")) $(".dropdown > dd ul").hide();
    });
    $("#sliderbar").hide().fadeIn(1000);
    $("#slider_tag").click(function () {
        $("#slider_content").show("fast");
        $(".slider_close").show("fast");
    });
    $(".slider_close").click(function () {
        $("#slider_content").hide("fast");
        $(".slider_close").hide("fast");
    });

    $('#divMegamenu .close_popup.menu').bind('click', function (d) {
        $('#divMegamenu').removeClass('show');
        $('#overlay').removeClass('show');
        $('#main').removeClass('show');
    });

    $('#overlay').bind('click', function (d) {
        $('#divMegamenu').removeClass('show');
        $('#overlay').removeClass('show');
        $('#main').removeClass('show');
    });
});

function gocategorylist(Category, Brand) {
    location.href = AppPath + '/Product/Category.aspx?br=' + Brand + '&category=' + Category;
}