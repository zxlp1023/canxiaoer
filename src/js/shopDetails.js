// 店铺详情
var shopId = GetCustomUrl('shopid'); //获取商户ID
var shopDetails = 'http://119.23.135.79:8001/api/ServiceForApp/GetBusinessInfoList?Key=CanXiao2App';  //获取商家列表
var shopSetMeal = 'http://119.23.135.79:8001/api/ServiceForApp/GetDishesSetByBIID?Key=CanXiao2App&BIID='+shopId;  //获取商家套餐


GetData(shopDetails, {}, function (json) {
    if (json.IsResult)
    {
        $.each(json.Data, function (i,item)
        {
            var pic = item.ImagePath,
                shopName = item.Name,
                score = item.Score,
                renjun = item.PerPersonCost,
                addr = item.Address,
                phone = item.MobilePhone;

            var shopPhone = 'tel:'+phone;

            if(this.ID == shopId){
                ( pic == null ) ? $('.head-img img').attr('src', 'img/upload/n_banner1.jpg') : $('.head-img img').attr('src', pic);  //没图片就使用默认图片
                // alert(pic);
                $('.info .title').html(shopName);
                var star = $('.star');
                star.addClass('star-' + score);


                $('.rating .yellow').html(score + '分');
                $('.rating span:last-of-type').html('人均:¥' + renjun);
                $('.address').html(addr);
                $('.addr p ').append(
                    '<a href='+ shopPhone+'>'+
                    '<i class="icon-shop icon-shop-tel"></i>'+
                    '</a>'
                )
            }

            $('#yuding').click(function () {
                // if( !isLogin()){ re isLogin() }
                $('#yuding').attr('href','reserve.html'+'?shopid='+shopId); /*预定链接的shopId*/
                var backUrl = $('#yuding').attr('href');

                if( isLogin() == false ){
                    gotoLogin(backUrl);
                    return false;
                }else{
                    $('#yuding').attr('href','reserve.html'+'?shopid='+shopId); /*预定链接的shopId*/
                }
            });

        });
    }
});

/*function isLogin() {
    
}*/

//套餐信息
GetData(shopSetMeal, {}, function (json) {
    if (json.IsResult)
    {
        $.each(json.Data, function (i,item)
        {
            var title = item.Name,
                oldPrice = item.OriginalPrice,
                price = item.Price,
                setMealId = item.ID;

            var setMealUrl = 'shopDetailsSetMeal.html?setMealId='+setMealId;

            if(shopId == this.BIID ){
                $('#taocan').append(
                    '<a href='+setMealUrl+' class="dis-f">'+
                    '<i class="icon-mark icon-mark-taocan"></i>'+
                    '<dl>'+
                    '<dt>'+'<img src="img/upload/n-a1.jpg" alt="">'+'</dt>'+
                    '<dd>'+
                    '<div class="title">'+title+'</div>'+
                    '<div class="price">'+
                    '<span class="yellow">'+price+'.00'+'</span>'+
                    '<span class="hui94 fz12">'+'原价:¥'+oldPrice+'.00'+'</span>'+
                    '</div>'+
                    '</dd>'+
                    '</dl>'+
                    '</a>'
                );



            }

        });
    }
});

