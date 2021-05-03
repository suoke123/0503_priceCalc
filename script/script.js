$(function(){

    $("button#calcBtn").click(function(){

        var salesPrice = 16000;   // 판매가격
        var grinding = 0;              // 분쇄도선택
        var cnt = 0;                     // 수량

        grinding = parseInt($("#grinding").val());
        /*alert("grinding : " + typeof grinding);*/
        cnt = parseInt($("#cnt").val());
        /*alert("cnt : " + cnt);*/

        var priceSum = salesPrice*cnt + grinding;
        //                     -----------  ---    ----------
        //                  기본판매가격 * 수량 + 분쇄옵션추가금액
        $("#priceSum").text(priceSum);

    });

});
