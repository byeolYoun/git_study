$(function(){

    let horse = 0;
    
    $('body').on('keyup', move);
    $('.left').on('click', leftMove);
    $('.right').on('click', rightMove);

    // left 버튼
    function leftMove(){
        // 말이 앞으로 이동
        if(horse < 1200){
            horse += 100;
        } 
        $('#horse').css('right', `${horse}px`);
    }

    // right 버튼
    function rightMove(){
        // 말이 뒤로 이동
        if(horse > 0){
            horse -= 100;
        }
        $('#horse').css('right', `${horse}px`);   
    }
    function move(event){
        console.log('내가 누른 key >> ', event.key, '/', event.keyCode);

        if(event.keyCode === 37){
            leftMove();
        }
        else if(event.keyCode === 39){
            rightMove();
        }
        else if(event.keyCode === 32){
            // animate() : 처리 대상에 대한 애니메이션 효과를 줄 때 사용하는 메소드
            // stop(true) : 키보드를 대지 않았을 때 멈출 수 있게 하는 함수
            $('img').stop(true).animate({'bottom': '400px'}, 100)
                    .animate({'bottom': '200px'}, 100);
        }

    }

});