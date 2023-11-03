$(document).ready(function () {
    // 애니메이트 인자는 3개 
    // 1은 변화 2는 스피드 3은 애니메이션끝나고나서실행하는것

    // 영원히 배너3개를 실행하라~~
    // setInterval(function () {

    //     $(".swiper-wrapper").animate({
    //         "marginLeft": -1200
    //     }, 400, function () {
    //         // $= swiper-wrapper
    //         // this안의 div 제이쿼리고유표현

    //         $("div:first-child", this).appendTo($(this))
    //         $(this).css("marginLeft", 0)
    //     })
    // }, 3000)


    // })

    // -------------------------------------------------------------------

    // 수직으로 움직이는법
    setInterval(function () {
        $(".swiper-wrapper").animate({ "marginTop": -300 }, 400, function () {
            $(".swiper-wrapper div:first-child").appendTo($(".swiper-wrapper"))
            $(".swiper-wrapper").css("marginTop", 0)
        })
    }, 3000)


})

// 근데 위의 식은 웹기능사식 배너지실제로는 swiper 쓴다...............