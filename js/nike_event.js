/* Video 제어버튼 CSS */
/* 제이쿼리로 css 잡기 */
$('figure').find('button').css({
    position: 'absolute',
    right: '400px',
    top: '50px',
    cursor: 'pointer',
    background: 'none',
    ouline: 'none'
});
$('figure').find('i').css({
    fontSize: '30px',
    color: '#fff'
});
$('figure').find('button').eq(0).css({
    right: '540px'
});
$('figure').find('button').eq(1).css({
    right: '470px'
});


/* 스크립트 */
// 내가 작성한 코드
const btn = $('.vid button');
const video = $('.vid video');
btn.eq(0).click(function(){
    video.get(0).play();
});
btn.eq(1).click(function(){
    video.get(0).pause();
});
btn.eq(2).click(function(){
    video.get(0).load();
});
// 선생님이 작성한 코드
$('figure button').eq(0).click(function(){
    $('figure').find('video').get(0).play();
});
$('figure button').eq(1).click(function(){
    $('figure').find('video').get(0).pause();
});
$('figure button').eq(2).click(function(){
    $('figure').find('video').get(0).load();
});