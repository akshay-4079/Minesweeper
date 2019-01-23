(function(){
    var app=angular.module("UIX");
    function display(){
    document.getElementById("wins").innerHTML=counterw;
    document.getElementById("loss").innerHTML=counterl;
        if(curScore>hiScore)
            {
                hiScore=curScore;
                document.getElementById("score").innerHTML=curScore;
            }
        else
            {
                document.getElementById("score").innerHTML=hiScore;
            }
}
    var UI=function($scope)
    {
        $scope.ok=display();
    }
    app.controller("UI",UI);
   
}());
