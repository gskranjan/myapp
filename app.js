var request=require('request');
var fs=require('fs');
var express=require('express');
var hbs=require('hbs');

var f=require('./f.js');
var s=require('./s.js');


const port=process.env.PORT || 3000;
var app =express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');


app.get('/',(req,res)=>{
   
    res.render('india',{});
    
});




f.google('hyderabad',(error,response)=>{
    
 if(response){
     
     s.tw(response.latitude,response.longtiude,(error,response)=>{
          if(response){
              
              app.get('/hyderabad',(req,res)=>{
                  
                  res.render('about',{
                    place:'Hyderabad',  
                    temperature:response.temp,
                    apparentTemperature:response.apparenttemp,
                    humidity:response.humidity,
                    expectedweather:response.expectedweather,
                    weather:response.weather
                      
                  });
                  
                  
              })
              
              
           
              
          }
          
          });
 }
         
         });

f.google('pune',(error,response)=>{
    
 if(response){
     
     s.tw(response.latitude,response.longtiude,(error,response)=>{
          if(response){
              
              app.get('/pune',(req,res)=>{
                  
                  res.render('about',{
                    place:'Pune',  
                    temperature:response.temp,
                    apparentTemperature:response.apparenttemp,
                    humidity:response.humidity,
                    expectedweather:response.expectedweather,
                    weather:response.weather
                      
                  });
                  
                  
              })
              
              
           
              
          }
          
          });
 }
         
         });


f.google('mumbai',(error,response)=>{
    
 if(response){
     
     s.tw(response.latitude,response.longtiude,(error,response)=>{
          if(response){
              
              app.get('/mumbai',(req,res)=>{
                  
                  res.render('about',{
                    place:'Mumbai',  
                    temperature:response.temp,
                    apparentTemperature:response.apparenttemp,
                    humidity:response.humidity,
                    expectedweather:response.expectedweather,
                    weather:response.weather
                      
                  });
                  
                  
              })
              
              
            
              
          }
          
          });
 }
         
         });
f.google('delhi',(error,response)=>{
    
 if(response){
     
     s.tw(response.latitude,response.longtiude,(error,response)=>{
          if(response){
              
              app.get('/delhi',(req,res)=>{
                  
                  res.render('about',{
                    place:'Delhi',  
                    temperature:response.temp,
                    apparentTemperature:response.apparenttemp,
                    humidity:response.humidity,
                    expectedweather:response.expectedweather,
                    weather:response.weather
                      
                  });
                  
                  
              })
              
              
           
              
          }
          
          });
 }
         
         });

f.google('bengaluru',(error,response)=>{
    
 if(response){
     
     s.tw(response.latitude,response.longtiude,(error,response)=>{
          if(response){
              
              app.get('/bnglr',(req,res)=>{
                  
                  res.render('about',{
                    place:'Bengaluru',  
                    temperature:response.temp,
                    apparentTemperature:response.apparenttemp,
                    humidity:response.humidity,
                    expectedweather:response.expectedweather,
                    weather:response.weather
                      
                  });
                  
                  
              })
              
              
           
              
          }
          
          });
 }
         
         });

f.google('kolkata',(error,response)=>{
    
 if(response){
     
     s.tw(response.latitude,response.longtiude,(error,response)=>{
          if(response){
              
              app.get('/kolkata',(req,res)=>{
                  
                  res.render('about',{
                    place:'Kolkata',  
                    temperature:response.temp,
                    apparentTemperature:response.apparenttemp,
                    humidity:response.humidity,
                    expectedweather:response.expectedweather,
                    weather:response.weather
                      
                  });
                  
                  
              })
              
              
           
              
          }
          
          });
 }
         
         });

f.google('ahmedabad',(error,response)=>{
    
 if(response){
     
     s.tw(response.latitude,response.longtiude,(error,response)=>{
          if(response){
              
              app.get('/ahmedabad',(req,res)=>{
                  
                  res.render('about',{
                    place:'Ahmedabad',  
                    temperature:response.temp,
                    apparentTemperature:response.apparenttemp,
                    humidity:response.humidity,
                    expectedweather:response.expectedweather,
                    weather:response.weather
                      
                  });
                  
                  
              })
              
              
           
              
          }
          
          });
 }
         
         });



f.google('chandigarh',(error,response)=>{
    
 if(response){
     
     s.tw(response.latitude,response.longtiude,(error,response)=>{
          if(response){
              
              app.get('/chandigarh',(req,res)=>{
                  
                  res.render('about',{
                    place:'Chandigarh',  
                    temperature:response.temp,
                    apparentTemperature:response.apparenttemp,
                    humidity:response.humidity,
                    expectedweather:response.expectedweather,
                    weather:response.weather
                      
                  });
                  
                  
              })
              
              
           
              
          }
          
          });
 }
         
         });

f.google('surat',(error,response)=>{
    
 if(response){
     
     s.tw(response.latitude,response.longtiude,(error,response)=>{
          if(response){
              
              app.get('/surat',(req,res)=>{
                  
                  res.render('about',{
                    place:'Surat',  
                    temperature:response.temp,
                    apparentTemperature:response.apparenttemp,
                    humidity:response.humidity,
                    expectedweather:response.expectedweather,
                    weather:response.weather
                      
                  });
                  
                  
              })
              
              
           
              
          }
          
          });
 }
         
         });





app.listen(port);
