// 店铺详情
var shopId = location.search.slice(4); //获取商户ID
var shopDetails = 'http://119.23.135.79:8001/api/ServiceForApp/GetBusinessInfoList?Key=CanXiao2App';  //商家列表
var shopSetMeal = 'http://119.23.135.79:8001/api/ServiceForApp/GetDishesSetByBIID?Key=CanXiao2App&BIID='+shopId;  //商家套餐

GetData(shopDetails, {}, function (json) {
    if (json.IsResult)
    {
        $.each(json.Data, function (i,item)
        {
            var pic = item.pic,
                shopName = item.Name,
                score = item.Score,
                renjun = item.PerPersonCost,
                addr = item.Address,
                phone = item.MobilePhone;

            var shopPhone = 'tel:'+phone;

            if(this.ID == shopId){
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

        });
    }
});

//套餐信息
GetData(shopSetMeal, {}, function (json) {
    if (json.IsResult)
    {
        $.each(json.Data, function (i,item)
        {
            var title = item.Name,
                oldPrice = item.OriginalPrice,
                Price = item.Price,
                setMealId = item.ID;

            var setMealUrl = 'shopDetailsSetMeal.html?id='+setMealId;

            if(shopId == this.BIID ){
                $('#taocan').append(
                    '<a href='+setMealUrl+' class="dis-f">'+
                    '<i class="icon-mark icon-mark-taocan"></i>'+
                    '<dl>'+
                    '<dt>'+'<img src="img/upload/n-a1.jpg" alt="">'+'</dt>'+
                    '<dd>'+
                    '<div class="title">'+title+'</div>'+
                    '<div class="price">'+
                    '<span class="yellow">'+Price+'.00'+'</span>'+
                    '<span class="hui94 fz12">'+'原价:¥'+oldPrice+'.00'+'</span>'+
                    '</div>'+
                    '</dd>'+
                    '</dl>'+
                    '</a>'
                )
            }

        });
    }
});
