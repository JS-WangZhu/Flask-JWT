//通用接口地址设置
var basic_url = "http://127.0.0.1:5000";
function getBasicUrl(){
  return basic_url;
}

function convert_unicode(str){
            var value='';
            for (var i = 0; i < str.length; i++) {
                value += '\\u' + left_zero_4(parseInt(str.charCodeAt(i)).toString(16));
            }
            return value;
        }
        function left_zero_4(str) {
            if (str != null && str != '' && str != 'undefined') {
                if (str.length == 2) {
                    return '00' + str;
                }
            }
            return str;
        }