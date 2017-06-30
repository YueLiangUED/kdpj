(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //提交评价按钮
    $('.button').on('touchend',function () {
        $('.tc').fadeIn();
        showMask();
    });
    //弹窗是
    $('#yes').on('touchend',function () {

    });
    //弹窗否
    $('#no').on('touchend',function () {
        $('.tc').fadeOut();
        hideMask();
    });

    /*评价*/
    function pingjia($selector) {
        $($selector).on('touchend','li',function (e) {
            var $lis = $($selector).children(),
                $this = $(this),
                $mesT = $($selector).parent().next('div').find('p'),
                $labelOne = $('#labelOne'),
                $labelTwo = $('#labelTwo');
            $this.addClass('active');
            $this.prev().addClass('active');
            $this.prev().prev().addClass('active');
            $this.prev().prev().prev().addClass('active');
            $this.prev().prev().prev().prev().addClass('active');
            $this.next().removeClass('active');
            $this.next().next().removeClass('active');
            $this.next().next().next().removeClass('active');
            $this.next().next().next().next().removeClass('active');
            if(e.target == $lis[0]){
                $mesT.text('极不满意');
                if(e.target.parentNode.id == 'estimateOne'){
                    $labelOne.html('<li>安装较不及时</li><li>安装人员态度差</li><li>未按预约时间到达</li><li>未指导使用宽带并测速</li><li>未提供装维联系卡</li><li>未穿鞋套</li><li>装机布线不规范</li><li>未着工装、工牌</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>信号差</li><li>网速慢</li><li>价格贵</li><li>优惠活动少</li><li>售后处理差</li>');
                }
            }else if(e.target == $lis[1]){
                $mesT.text('不满意');
                if(e.target.parentNode.id == 'estimateOne'){
                    $labelOne.html('<li>安装较不及时</li><li>安装人员态度差</li><li>未按预约时间到达</li><li>未指导使用宽带并测速</li><li>未提供装维联系卡</li><li>未穿鞋套</li><li>装机布线不规范</li><li>未着工装、工牌</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>信号差</li><li>网速慢</li><li>价格贵</li><li>优惠活动少</li><li>售后处理差</li>');
                }
            }else if(e.target == $lis[2]){
                $mesT.text('一般');
                if(e.target.parentNode.id == 'estimateOne'){
                    $labelOne.html('<li>安装较及时</li><li>安装人员态度一般</li><li>按预约时间到达</li><li>指导使用宽带并测速</li><li>提供装维联系卡</li><li>装机布线规范</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>信号一般</li><li>网速较快</li><li>价格便宜</li><li>优惠活动好</li><li>售后处理到位</li>');
                }
            }else if(e.target == $lis[3]){
                $mesT.text('满意');
                if(e.target.parentNode.id == 'estimateOne'){
                    $labelOne.html('<li>安装较及时</li><li>安装人员态度一般</li><li>按预约时间到达</li><li>指导使用宽带并测速</li><li>提供装维联系卡</li><li>装机布线规范</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>信号较好</li><li>网速较快</li><li>价格便宜</li><li>优惠活动较好</li><li>售后处理到位</li>');
                }
            }else if(e.target == $lis[4]){
                $mesT.text('非常满意');
                if(e.target.parentNode.id == 'estimateOne'){
                    $labelOne.html('<li>安装及时</li><li>安装人员态度友好</li><li>按预约时间到达</li><li>指导使用宽带并测速</li><li>提供装维联系卡</li><li>装机布线规范</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>信号十分稳定</li><li>网速快</li><li>价格十分便宜</li><li>优惠活动好</li><li>售后处理到位</li>');
                }
            }
        });
    }
    pingjia($('#estimateOne'));
    pingjia($('#estimateTwo'));
    $('.detail').on('touchend','li',function () {
        if($(this).hasClass('act')){
            $(this).removeClass('act');
        }else{
            $(this).addClass('act');
        }
    });

    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
        $('#mask').on('touchend',function () {
            showMask();
        });
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
    }
});
