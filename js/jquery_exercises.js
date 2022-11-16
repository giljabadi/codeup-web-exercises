"use strict";
(function() {
    $(document).ready(function () {
       $('h1').click(function () {
           $(this).css('background-color', 'green')
       })
        $('p').dblclick(function () {
            $(this).css('font-size', 18)
        })
        $('ul').hover(
            function () {
            $(this).css("color", "red")
        },
            function () {
                $(this).css("color", "black")
            })
    })
})()