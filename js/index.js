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
        window.location.href = '';
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
                    $labelOne.html('<li>安装速度慢</li><li>服务态度恶劣</li><li>未按指定时间到达安装</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>网速速度差</li><li>信号差</li><li>网速下载速度很慢</li>');
                }
            }else if(e.target == $lis[1]){
                $mesT.text('不满意');
                if(e.target.parentNode.id == 'estimateOne'){
                    $labelOne.html('<li>安装速度慢</li><li>服务态度恶劣</li><li>未按指定时间到达安装</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>网速速度差</li><li>信号差</li><li>网速下载速度很慢</li>');
                }
            }else if(e.target == $lis[2]){
                $mesT.text('一般');
                if(e.target.parentNode.id == 'estimateOne'){
                    $labelOne.html('<li>安装速度慢</li><li>服务态度差</li><li>未按指定时间到达安装</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>网速速度慢</li><li>信号弱</li><li>网速下载速度慢</li>');
                }
            }else if(e.target == $lis[3]){
                $mesT.text('满意');
                if(e.target.parentNode.id == 'estimateOne'){
                    $labelOne.html('<li>安装速度较快</li><li>服务态度不好</li><li>未按指定时间到达安装</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>网速速度慢</li><li>信号弱</li><li>网速下载速度慢</li>');
                }
            }else if(e.target == $lis[4]){
                $mesT.text('非常满意');
                if(e.target.parentNode.id == 'estimateOne'){
                    $labelOne.html('<li>安装速度快</li><li>随叫随到</li><li>态度友好</li><li>按指定时间到达安装</li>');
                }else if(e.target.parentNode.id == 'estimateTwo'){
                    $labelTwo.html('<li>网速速度快</li><li>信号强</li><li>网速下载速度快</li>');
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

});
