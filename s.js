
const request=require ('request');


module.exports.tw=(lat,lng,callback)=>{
    
    request({
    url:'https://api.forecast.io/forecast/37e724d3a55996fb991bdf2072b9db27/'+lat+','+lng,
    JSON:true
},(error,response,body)=>{
    if(!error && response.statusCode==200){
        var parse=JSON.parse(body);
           
           callback(undefined,
                    {
              temp:parse.currently.temperature,
              apparenttemp:parse.currently.apparentTemperature,
              weather:parse.currently.summary,
              expectedweather:parse.hourly.summary,
              humidity:parse.currently.humidity,
                       });
      
        }
        
    else{
        console.log("fail");
    }
    });  

}