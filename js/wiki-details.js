$(document).ready(function () {
    $("header").load("./framework/header.html");
    $("aside").load("./framework/sidebar.html");
    $("footer").load("./framework/footer.html");

    // 选项卡切换功能
    $('.tablinks').on('click', function() {
        // 移除所有按钮的高亮颜色
        $('.tablinks').css('background-color', '');
        $('.tablinks').css('color','white')
        // 设置当前按钮的颜色
        $(this).css('background-color', '#242424');
        $(this).css('color','red')
        // 获取所点击按钮的自定义属性
        var tabId = $(this).data('tab'); // 使用data-tab属性获取相应的内容ID
        
        // 隐藏所有内容
        $('#0,#1, #2, #3, #4').hide();
        
        // 显示对应内容
        $('#' + tabId).show(); 
    });
});
