function AMapWX(a){this.key=a.key,this.getRegeo=function(a){var b=this;wx.getLocation({type:"wgs84",success:function(c){var d=c.longitude+","+c.latitude;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:b.key,location:d,extensions:"all",s:"rsx",platform:"WXJS",appname:b.key,sdkversion:"1.0.0"},method:"GET",header:{"content-type":"application/json"},success:function(b){var d,e,f,g,h;b.data.status&&"1"==b.data.status?(d=b.data.regeocode,e=d.addressComponent,f=[],g=d.roads[0].name+"附近",d.pois&&d.pois[0]&&(g=d.pois[0].name+"附近"),e.provice&&f.push(e.provice),e.city&&f.push(e.city),e.district&&f.push(e.district),e.streetNumber&&e.streetNumber.street&&e.streetNumber.number?(f.push(e.streetNumber.street),f.push(e.streetNumber.number)):f.push(d.roads[0].name),f=f.join(""),h=[{iconPath:a.iconPath,width:a.iconWidth,height:a.iconHeight,name:f,desc:g,longitude:c.longitude,latitude:c.latitude,id:0,regeocodeData:d}],a.success(h)):a.fail({errCode:b.data.infocode,errMsg:b.data.info})},fail:function(b){a.fail({errCode:"0",errMsg:b.errMsg||""})}})},fail:function(b){a.fail({errCode:"0",errMsg:b.errMsg||""})}})},this.getWeather=function(a){function c(c){wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:b.key,city:c,extension:"base",s:"rsx",platform:"WXJS",appname:b.key,sdkversion:"1.0.0"},method:"GET",header:{"content-type":"application/json"},success:function(b){var c,d;b.data.status&&"1"==b.data.status?(c=b.data.lives,d={},c&&c.length>0&&(c=c[0],d={city:{text:"城市",data:c.city},weather:{text:"天气",data:c.weather},temperature:{text:"温度",data:c.temperature},winddirection:{text:"风向",data:c.winddirection+"风"},windpower:{text:"风力",data:c.windpower+"级"},humidity:{text:"湿度",data:c.humidity+"%"},liveData:c},a.success(d))):a.fail({errCode:b.data.infocode,errMsg:b.data.info})},fail:function(b){a.fail({errCode:"0",errMsg:b.errMsg||""})}})}var b=this;wx.getLocation({type:"wgs84",success:function(d){var e=d.longitude+","+d.latitude;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:b.key,location:e,extensions:"all",s:"rsx",platform:"WXJS",appname:b.key,sdkversion:"1.0.0"},method:"GET",header:{"content-type":"application/json"},success:function(b){var d,e;b.data.status&&"1"==b.data.status?(e=b.data.regeocode,e.addressComponent?d=e.addressComponent.adcode:e.aois&&e.aois.length>0&&(d=e.aois[0].adcode),c(d)):a.fail({errCode:b.data.infocode,errMsg:b.data.info})},fail:function(b){a.fail({errCode:"0",errMsg:b.errMsg||""})}})},fail:function(b){a.fail({errCode:"0",errMsg:b.errMsg||""})}})},this.getPoiAround=function(a){var b=this;wx.getLocation({type:"wgs84",success:function(c){var d=c.longitude+","+c.latitude;wx.request({url:"https://restapi.amap.com/v3/place/around",data:{key:b.key,location:d,s:"rsx",platform:"WXJS",appname:b.key,sdkversion:"1.0.0"},method:"GET",header:{"content-type":"application/json"},success:function(b){var c,d,e,f;if(b.data.status&&"1"==b.data.status){if(b=b.data,b&&b.pois){for(c=[],d=0;d<b.pois.length;d++)e=0==d?a.iconPathSelected:a.iconPath,c.push({latitude:parseFloat(b.pois[d].location.split(",")[1]),longitude:parseFloat(b.pois[d].location.split(",")[0]),iconPath:e,width:22,height:32,id:d,name:b.pois[d].name,address:b.pois[d].address});f={markers:c,poisData:b.pois},a.success(f)}}else a.fail({errCode:b.data.infocode,errMsg:b.data.info})},fail:function(b){a.fail({errCode:"0",errMsg:b.errMsg||""})}})},fail:function(b){a.fail({errCode:"0",errMsg:b.errMsg||""})}})}}module.exports.AMapWX=AMapWX;