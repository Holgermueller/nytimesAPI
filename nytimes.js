"use script";
$(document).ready(function(){


    $.ajax({
        url: "https://api.nytimes.com/svc/archive/v1/2016/1.json?api-key=e23ed19aa58241c0a78b6d663b44e23f",
        method: 'GET',
    }).then(function(response){
        console.log(response); 
    })

    });