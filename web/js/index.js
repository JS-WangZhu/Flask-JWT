//cookie验证
var auth = $.cookie('auth');
var basic_request_url = getBasicUrl();
$(function () {
    var auth = $.cookie('auth');
    if (auth==null) {
        toastr.error("请先进行登录！");
        setTimeout(function (){toastr.error("即将跳转登录页！")},1000);
        setTimeout(function (){$(location).attr('href', 'login.html')},1000);
    }else {
        $.ajax({
         type: "GET",
         headers:{
             "Authorization": "JWT "+auth
         },
	     url: basic_request_url+"/user",
	     dataType: "json",
	     success: function(data){
             console.log(data)
             if (data.status===false){
                 toastr.error(data.msg);
                 setTimeout(function (){toastr.error("即将跳转登陆页")},3000);
                 setTimeout(function (){$(location).attr('href', 'login.html')}, 2000);
             }else {
                 toastr.success("登录成功");
                 setTimeout(function (){toastr.success("欢迎用户"+data.data['username']+"进站访问！")},1000)
                 $("#index").css("visibility","inherit")
             }
         },
         async: false,

    });
    }



})