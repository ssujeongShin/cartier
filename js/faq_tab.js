/* <tab>영역 클릭시 경고창
    각각 눌러야하니까 .tab_btn이 선택자X */
$('.tab_btn li').click(function(){
    //각각의 탭 index값 리턴 메서드
    //이벤트 탭 클릭했을 때 index 번호[=index()]메서드를 콘솔창에 출력
    // this -> 이벤트 실행 DOM객체
    // 또 this 생각못함...
    const idx = $(this).index();
    console.log(idx);
    // 탭 영역에 각각 on클래스 적용
    // 가린 후 보이게
    $('.tab_btn li').removeClass('on');
    $(this).addClass('on');
    
    // 해당탭 내용만 보이도록 코딩
    const contents = $('.tab_contents .list');
    contents.hide();
    /* 만들어 놓은 idx데이터를 매개변수로 
    작성하여 번호로 사용 */
    contents.eq(idx).stop().show();
});

/* 해당 질문과 답 | 화살표 방향 스크립트 */
$('.tab_contents .list .question').click(function(){
    //빈 hasClass() return 타입 =true/false
    if($(this).hasClass('active')) {//클래스명 active가 있으면 실행
        $(this).removeClass('active');
        // 화살표 방향 바꾸기(커서 흐름 생각해보자)
        $(this).children('dd').removeClass('up');
        $(this).children('dd').addClass('down');
        // 해당 내용 가리기
        // 방법1
        $(this).next().slideUp();
        // 방법2
        $(this).siblings('.answer').slideUp();
    } else {//클래스명 active가 없으면 실행
        $(this).addClass('active');
        // 화살표 방향 바꾸기(커서 흐름 생각해보자)
        $(this).children('dd').removeClass('down');
        $(this).children('dd').addClass('up');
        // 해당 내용 보여주기
        //방법 1
        $(this).next().slideDown();
        //방법 2
        $(this).siblings('.answer').slideDown();
    }
});