// JavaScript Document

$(document).ready(function(e) {

    // ToolTip 觸發
    $("[data-toggle='tooltip']").tooltip();


    // 弹出框功能初始化
    $(function() {
        $('[data-toggle="popover"]').popover();
    });

    // mobile menu 開啟/關閉 
    $(".btn_menu").click(function(e) {
        $(".menu").addClass("open");
    });

    $(".btn_close_menu").click(function(e) {
        $(".menu").removeClass("open");
    });



    // 滾動前往錨點區塊
    $("a[href^='#Registration']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 30
        }, 700, function() {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });



    // mobile navbar選單選項點擊關閉控制
    $("#navbar ul li").click(function() {
        $(".navbar-collapse").removeClass("in");
        $("header").removeClass("mobile_nav_bg");
    });

    $(".navbar-toggle").click(function() {
        $("header").addClass("mobile_nav_bg");
    });



    // 置頂部按鈕偵測
    $(".btn_back_top").click(function() {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 600);

        return false;
    });


    // 上傳檔案
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            var fileName = '';
            if (this.files && this.files.length > 1) {
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            } else {
                fileName = e.target.value.split("\ ").pop();
            }

            if (fileName) {
                label.querySelector('span').innerHTML = fileName;
            } else {
                label.innerHTML = labelVal;
            }
        });
    });


    // 圖片輪播
    $('.slider').slick({
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });


});