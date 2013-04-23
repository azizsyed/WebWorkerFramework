var fetchIt = function (message, callback) {

	timeStampIt();

	var fetch = function(){
		$.ajax({
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

		//console.log(result);

		timeStampIt();

		//$.send(result);

		if (callback){
			callback();	
		}
	}

	//setTimeout(fetch, message.delay);
	//setTimeout(process, message.delay);
	fetch();
};