importScripts('jQuery.Hive/jquery.hive.pollen.js', 'lib/Handlebars.js');

var count = 0;

var fetchIt = function (message) {

	var fetch = function(){
		$.ajax.get({
			url: "/assets/ajax/ajax_01.html",
			data: {

			},
			dataType: "json",
			cache: false,
			success: function(response){
				process(response);
			}
		})	
	};

	var process = function(data){
		var source = '{{#games}}<div class="entry"><h1>{{title}}</h1></div>{{/games}}';

		var template = Handlebars.compile(source);

		var result = template(data);

		$.send(result);
	}

	//setTimeout(fetch, message.delay);
	//setTimeout(process, message.delay);
	fetch();
};

$(fetchIt); 