//animation
$(".toggle").on("click", function () {
  $(".container").stop().addClass("active");
});

$(".close").on("click", function () {
  $(".container").stop().removeClass("active");
});

//page control
var basic_request_url = getBasicUrl();

//login
$(document).ready(function(){
  $("#login").click(function(){
  	var auth = '';
	var llist = {
		"username":$("#login_username").val(),
		"password":$("#login_password").val(),
	};
	 $.ajax({
	     type: "POST",
	     url: basic_request_url+"/login",
	     data: llist,
	     async: false,
	     dataType: "json",
	     success: function(data){
	     	console.log(data)
	     	if (data.status===true){
	          toastr.success(data.msg);
	          auth = data.data;
	          //存cookie
			  $.removeCookie('auth',{ path: '/'});
    		  $.cookie('auth', auth, { expires: 7, path: '/' });
	          $(location).attr('href', 'index.html');
	     	}else{
	     		toastr.error(data.msg);
	     	}
    }
 });
  });
});

//regist

  $("#regist").click(function(){
		var r_username = $("#r_username").val();
		var r_email = $("#r_email").val();
		var r_passwprd = $("#r_password").val();
		var r_password_r = $("#r_password_r").val();
		if (r_passwprd!=r_password_r){
			$.confirm({
						title: '确认',
						content: '两次密码输入不一致，请重新输入！',
						type: 'red',
						icon: 'glyphicon glyphicon-question-sign',
						buttons: {
							ok: {
								text: '确认',
								btnClass: 'btn-primary'
							}
						}
					})
		}else {
			var rlist = {
  			"r_username":r_username,
  			"r_email":r_email,
  			"r_password":r_passwprd
  		}
		$.ajax({
			type: "POST",
			url: basic_request_url+"/regist",
			data: rlist,
			async: false,
			contentType: "application/x-www-form-urlencoded",
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status===false){
					$.confirm({
						title: '确认',
						content: '注册失败，请检查确定信息是否正确！',
						type: 'red',
						icon: 'glyphicon glyphicon-question-sign',
						buttons: {
							ok: {
								text: '确认',
								btnClass: 'btn-primary'
							}
						}
					})
				}else{
					$.confirm({
						title: '确认',
						content: '注册成功，即将跳转登录页！',
						type: 'green',
						icon: 'glyphicon glyphicon-question-sign',
						buttons: {
							ok: {
								text: '确认',
								btnClass: 'btn-primary',
								action: function() {
									location.href = 'login.html'; //指向下载资源（此处为目标文件的输出数据流）
								}
							}
                    }
                });
				}

			}
			});
		}

  });
