$(document).ready(function(){
  $(".showContent").click(function(){        //当“钱箱打不开”按钮点击的时候
    $(".content").show();             //展示未完全显示的那部分内容
    $(this).parent().hide();           //此处需要注意隐藏简略说明的文字，因为原来文字里面最后有省略号，不隐藏的后果就是展开后省略号仍旧在那里
  });
  $(".hideContent").click(function(){         //当“收起全文”按钮点击的时候
    $(this).parent().hide();           //隐藏已经显示出来的文字
    $(".showContent").parent().show();       //将简略说明的文字显示出来
  });
});
