$(document).ready( function(){
	// Esconder flecha - Etapa 1 
    $(".js-back").hide();
    $(".js-menu").show(); 
    // Incorporar nueva noticia
   	(function printNews (ev) {
   		$(".callout-news").append("<p>NUEVAS RECETAS</p>");
   	}) ();
   	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	avatar(activities[0]);
});	
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray){ 
	for ( var i=0; i < recipesArray.length ; ++i){
		if(recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]);
		}
	}
}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
    var forRecipe = '<a class="item-recipe" target="_blank" href="' + recipe.source.url + '">' +
				    '<span class="attribution">' +
			    		'<span class="title-recipe">' + recipe.title + '</span>' +
			    		'<span class="metadata-recipe">' +
			      			'<span class="author-recipe">' + recipe.source.name + '</span>' +
			      			'<span class="bookmarks-recipe">' +
			        			'<span class="icon-bookmark"></span>' + 
			      			'</span>' +
			    			'</span>' +
			  		'</span>' + 
		  			'<img src="img/recipes/640x800/' + recipe.name + '.jpg"/>'+'</a>';

    $('.list-recipes').append(forRecipe);		
};
/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
}

function renderActivities(activitiesArray){
	for ( var i=0; i < activitiesArray.length ; ++i){
		renderActivity(activitiesArray[i]);
	}
	if( activitiesArray.length > 0){
		$('.wrapper-message').hide();
	}
};
function avatar (activities) {
	var newHTML = '<a href="#" class="item-activity">' + 
  					'<span class="attribution">' +   
    					'<span class="avatar">' +
      						'<img src="' +activities.userAvatar+ '" class="image-avatar">' +
      					'</span>' +      
				    '<span class="meta">' +
				      	'<span class="author">' +activities.userName[0]+activities.userName[1]+activities.userName[2]+activities.userName[3]+ '  </span>' +
				      	'<span class="recipe">' +activities.recipeName+ '</span>' +
				      	'<span class="location">&mdash;' +activities.place+ '</span>' +
					    '</span>' +				  
					  	'</span>' +
				    '<div class="bg-image" style="background-image: url('+activities.image+');">' +
				    '</div>';


 $(".list-activities").append(newHTML);
 
};

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


