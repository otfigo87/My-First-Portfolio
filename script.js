(function ($) {
    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("menu");
    var close = document.getElementById("menu-close");

    toggle.addEventListener("click", function (e) {
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
            menu.style.backgroundColor ="#232323";
        } else {
            menu.classList.add("open");
            
        }
    });

    close.addEventListener("click", function (e) {
        menu.classList.remove("open");
    });

})(jQuery);

$(".main-menu li:first").addClass("active");

var showSection = function showSection(section, isAnimate) {
    var direction = section.replace(/#/, ""),
        reqSection = $(".section").filter(
            '[data-section="' + direction + '"]'
        ),
        reqSectionPos = reqSection.offset().top - 0;

    if (isAnimate) {
        $("body, html").animate(
            {
                scrollTop: reqSectionPos
            },
            800
        );
    } else {
        $("body, html").scrollTop(reqSectionPos);
    }
};

var checkSection = function checkSection() {
    $(".section").each(function () {
        var $this = $(this),
            topEdge = $this.offset().top - 80,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
        if (topEdge < wScroll && bottomEdge > wScroll) {
            var currentId = $this.data("section"),
                reqLink = $("a").filter("[href*=\\#" + currentId + "]");
            reqLink
                .closest("li")
                .addClass("active")
                .siblings()
                .removeClass("active");
        }
    });
};

$(".main-menu").on("click", "a", function (e) {
    e.preventDefault();
    showSection($(this).attr("href"), true);
});

$(window).scroll(function () {
    checkSection();
});
