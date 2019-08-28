//fullpage prac
$(function(){
    $('#fullpage').fullpage({
        //패럴렉스 제이쿼리 
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['page01','page02','page03','page04','page05'],
        menu: '#pagebtn',
        onLeave : function(){
            $('.s2 .contentbox > *').removeClass('on');
            $('.s3 .contentbox > *').removeClass('on');
            $('.s4 .contentbox > *').removeClass('on');
            $('.s5 .contentbox > *').removeClass('on');
            $('.s2 h2, .s3 h2, .s4 h2, .s5 h2').removeClass('on');
        },
        afterLoad: function(origin, destination, direction){
            $('.s2 .contentbox > *').addClass('on');
            $('.s3 .contentbox > *').addClass('on');
            $('.s4 .contentbox > *').addClass('on');
            $('.s5 .contentbox > *').addClass('on');
            $('.s2 h2, .s3 h2, .s4 h2, .s5 h2').addClass('on');
        },
    });
});



/*popup*/
$(document).ready(function(){
    
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };

    $('.popup a').click(function(){
        var chk = $('#chkBox').prop('checked');

        if(chk){ 
            setCookie('maindiv','done',1);
        }

        $('.popup').fadeOut('fast');
    });


    cookiedata = document.cookie;
    if(cookiedata. indexOf('maindiv=done') < 0 ){   
        $('.popup').css('display','block');  
    }else{                                  
        $('.popup').css('display','none');   
    }
    
    
    //디데이 카운터
    var countDownDate = new Date("sep 10, 2019 00:00:00").getTime(); 
        //1초마다 갱신되도록 함수 생성,실행 
        var x = setInterval(function() { 
            // 오늘 날짜 등록 
            var now = new Date().getTime(); 
            // 종료일자에서 현재일자를 뺀 시간 
            var distance = countDownDate - now; 
            // 각 변수에 일, 시, 분, 초를 등록 
            var d = Math.floor(distance / (1000 * 60 * 60 * 24)); var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); var s = Math.floor((distance % (1000 * 60)) / 1000); //id가 d-day인 HTML코드에 내용 삽입 
            document.getElementById("ddaycount").innerHTML = d +"일 " + h + "시간 " + m + "분 " + s+"초"; }); 


});//popup 


