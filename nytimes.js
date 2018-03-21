"use script";
$(document).ready(function(){

});


/**
 *  Used to diaply News articles to the page
 * 
 * @method renderNewsStories
 */
function renderNewsStories(){
    const newsTemplate = `<div class="well">
    <h3> <lable class="label-primary">${count}</lable> ${Title}</h3>
    <h5>${author}</h5>
    </div>`;

    $('.results').append(newsTemplate);
}