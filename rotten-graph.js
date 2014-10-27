var songTemplateFunction = Handlebars.compile($('#page-template').html());


var search = function(searchTerm){
	searchTerm = encodeURIComponent(searchTerm);
	var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=' + searchTerm +'&page_limit=40&page=1&apikey=ptn25up9stejtm5s5pcvy2nu&callback=?';
	$.getJSON(url, function(response){  //can use $ or jQuery
		console.log(response);

		var html = '';

		for(var i = 0; i < response.movies.length; i++){
			html += songTemplateFunction(response.movies[i]);
		}

		$('#results').html(html);
	});
};

$('form').on('submit', function(e){
	e.preventDefault();

	var searchTerm = $('#search-term').val();

	console.log(searchTerm);

	$('#results').html('Loading....');
	search(searchTerm);
});
