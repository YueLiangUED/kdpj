(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //根据每个星星(li)的类名(active)个数显示黄色星星个数以及对应文字描述
    function getActiveStartNum() {
        var $mes1 = $('#mes1'),
            $mes2 = $('#mes2'),
            num1 = $('#estimateOne li.active').length,
            num2 = $('#estimateTwo li.active').length;
        if(num1 == 1){
            $mes1.text('极不满意');
        }else if(num1 == 2){
            $mes1.text('不满意');
        }else if(num1 == 3){
            $mes1.text('一般');
        }else if(num1 == 4){
            $mes1.text('满意');
        }else if(num1 == 5){
            $mes1.text('非常满意');
        }
        if(num2 == 1){
            $mes2.text('极不满意');
        }else if(num2 == 2){
            $mes2.text('不满意');
        }else if(num2 == 3){
            $mes2.text('一般');
        }else if(num2 == 4){
            $mes2.text('满意');
        }else if(num2 == 5){
            $mes2.text('非常满意');
        }
    }
    getActiveStartNum();
});
