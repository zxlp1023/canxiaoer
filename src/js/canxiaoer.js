function GetData(url, prams, success, error)//请求的url，请求传的参数，请求成功的方法 ，请求失败的方法（没有传就默认失败时弹出请求失败）
{
    if (!error) {
        error = function () {
            alert("请求出错");
        };
    }
    $.ajax(
        {
            url: url,
            type: "post",
            dataType: "json",
            data: prams,
            success: success,
            error: error
        }
    );
}


// var loginUrl = location.host + location.pathname;
// alert( loginUrl )
// 登陆提示  设置一个自执行方法 如果用户id不成立, 就跳转到固定的登陆页面
(function login() {
    if( !localStorage.uid || localStorage.uid == ''){

    }
})();
// var reUrl = location.href;
function isLogin() {
    if(!localStorage.id){
        // console.log( reUrl );
        // alert(reUrl);
        // location.href = 'member/login.html'
        return false;
    }
}

function GetCustomUrl(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    // if(r!=null)return  unescape(r[2]); return null;  //es3已经废弃unescape()函数
    if(r!=null)return  encodeURI(r[2]); return null;
}

function gotoLogin( backUrl ) {
    location.href = 'member/login.html?back='+backUrl;
}

function backUrl(url) {
    location.href = url;
}

