var counterw=0;
var counterl=0;
var curScore=0;
var hiScore=0;
var basScore=100;
function winTrack()
{
    counterw++;
    localStorage.setItem("win",counterw);
}
function lossTrack()
{
counterl++;
localStorage.setItem("loss",counterl);
}
(function(){
    
 var app=angular.module("UIX",["ngRoute"]);   
    
    app.config(function($routeProvider){
    $routeProvider
    .when("/main",{
        templateUrl:"Views/ui.html",
        controller:"UI"
    })
        
     
    
    .when("/Easy",{
        templateUrl:"Views/Easy.html",
        controller:"MSEasy"
    })
        .when("/Hard",{
        templateUrl:"Views/Hard.html",
        controller:"MSHard"
    })
        .when("/Medium",{
        templateUrl:"Views/Med.html",
        controller:"MSMed"
    })
         .when("/Time",{
        templateUrl:"Views/Timed.html",
        controller:"MSTim"
    })
        
          .otherwise({redirectTo:"/main"}) 
    
    });
    
    
}());
function Changebck(a){
    console.log(a);
    if (a=='i1')
    {document.getElementById('area').style.backgroundImage="url(https://www.pixelstalk.net/wp-content/uploads/2016/07/8-Bit-Backgrounds.jpg)";}
     if (a=='i2')
    {document.getElementById('area').style.backgroundImage="url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/dHnxL5V/retro-video-game-3d-landscape-computer-vector-8-bit-arcade-flyover-wireframe-terrain-4k_nwly8eeae__F0000.png)";}
     if (a=='i3')
    {document.getElementById('area').style.backgroundImage="url(https://media.giphy.com/media/l0HlM6oMVfvqZgSMU/giphy.gif)";}
     if (a=='i4')
    {document.getElementById('area').style.backgroundImage="url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/geometric-8-bit-game_wjbjcv-r__F0000.png)";}
}


