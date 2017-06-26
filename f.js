var request=require('request');

module.exports.google=(text,callback)=>{
    var url=encodeURIComponent(text);
     
    request({
        url:'https://maps.googleapis.com/maps/api/geocode/json?address='+url,
        json:true
    },(error,response,body)=>{
       if(error){
           callback(error);
       } 
        if(body.status=="OK"){
            
            var obj={ address:body.results[0].formatted_address,
                    latitude:body.results[0].geometry.location.lat,
                    longtiude:body.results[0].geometry.location.lng};
          
            callback(undefined,obj);
        }
    });

}