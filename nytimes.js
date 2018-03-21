"use script";
$(document).ready(function(){
    
    
    

    $("#search-button").on("click",function(){

        let searchField = $("#search-input").val()
        let beginYear = $("#end-year").val()
        let endYear = $("#start-year").val()
        let dropDown= $("#num-records").val()

        let queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchField+"&api-key=7ed0a22d92cc4cd9b5fd37efbca49ff9";
   
        $.ajax({
        url:queryURL,
        method: "GET"
        }).then(function(response){
            for(let i = 0 ; i  < response.response.docs.length; i++ ){
                const newsTemplate = `<div class="well">
                 <h3> <lable class="label-primary label-styling">${i}</lable> ${response.response.docs[i].headline.print_headline}</h3>
                 <h5>${response.response.docs[i].byline.original}</h5>
                 </div>`;

                 $('.results').append(newsTemplate);
            }
          console.log(response.response.docs[0]);
          console.log(searchField);

   
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
