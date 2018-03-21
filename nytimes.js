"use script";
$(document).ready(function(){


    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q"+searchfield+
     "facet_field=source&begin_date="+beginyear+"0101&end_date="+endyear+"1231&api-key=7ed0a22d92cc4cd9b5fd37efbca49ff9";
    // varq=obama&facet_field=source&begin_date=20120101&end_date=20121231

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
});
});