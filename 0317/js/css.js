$(function(){

    // jQuery 클릭 이벤트 등록
    
    // 글자색 변경
    $('#color').on('click', function(){  // jQuery에서는 on이라는 함수로 이벤트를 등록
        $('h1').css('color', '#F97F51');
    });

    // 배경색 변경
    $('#bgcolor').on('click', function(){
        $('body').css('background-color', '#F8EFBA');
    });

    // 글자 크기 변경
    $('#size').on('click', function(){

        // $('h1').css('width', '100px');
        // $('h1').css('font-size', '16px');

        // $('h1').css('width', '100px')
        //        .css('font-size', '16px');

        // 스타일 속성을 객체 구조로 구성해서 적용
        $('h1').css({
            'width' : '100px',
            'font-size' : '20px',
        });

    });

});