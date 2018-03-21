"use script";
$(document).ready(function(){


    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q"+searchfield+
     "facet_field=source&begin_date="+beginyear+"0101&end_date="+endyear+"1231&api-key=7ed0a22d92cc4cd9b5fd37efbca49ff9";
    // varq=obama&facet_field=source&begin_date=20120101&end_date=20121231

    $("#search-button").on("click",function(){
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function renderNewsStories(response){
          console.log(response);
        // const newsTemplate = `<div class="well">
        // <h3> <lable class="label-primary">${count}</lable> ${Title}</h3>
        // <h5>${author}</h5>
        // </div>`;
    
        // $('.results').append(newsTemplate);
   
        });
    });
});




// /**
//  *  Used to diaply News articles to the page
//  * 
//  * @method renderNewsStories
//  */
// function renderNewsStories(){
//     const newsTemplate = `<div class="well">
//     <h3> <lable class="label-primary">${count}</lable> ${Title}</h3>
//     <h5>${author}</h5>
//     </div>`;

//     $('.results').append(newsTemplate);
// }
