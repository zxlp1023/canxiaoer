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


