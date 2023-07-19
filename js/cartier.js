// 제이쿼리 animate
$('article').mouseenter(function(){
    $(this).stop().animate({width:'35%'},500);
    $(this).find('video').get(0).play();
});
$('article').mouseleave(function(){
    $(this).stop().animate({width:'12%'},300);
    $(this).find('video').get(0).pause();
});