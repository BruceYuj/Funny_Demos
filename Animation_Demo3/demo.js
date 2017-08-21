
function isElementInViewport(elem, offset) {
    const h = offset || 20;
    var box = elem.getBoundingClientRect(),
        top = (box.top >= 0),
        left = (box.left >= 0),
        bottom = (box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + h),
        right = (box.right <= (window.innerHeight || document.documentElement.clientHeight) + h);
    return top && left && bottom && right;
}

$(function () {
    $(window).scroll(function () {
        $(".box").each(function () {
            console.log(isElementInViewport(this, 100));
            if (isElementInViewport(this, 100)) {
                var that = this;
                setTimeout(function () {
                    $(that).css("background-color", "green");
                }, 1000);
                
            }
        });
    });    
});


