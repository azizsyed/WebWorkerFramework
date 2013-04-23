//  The main window 

var count = 0;

var doIt = function () {
	timeStampIt();

	var message = {
				data: { /* huge data object */ },
				filter: 'foo',
				count: ++count,
				delay: 0//Math.round(Math.random() * 5000)
			};

	var obj = $.Hive.create({
		//  optional. if no 'count' property is set, Hive creates only 1 worker
		count: 2, 
		//  the worker file  
		worker: 'assets/scripts/test.js',
		//  the receive ( convenience to writing out the addEventListener)
		receive: function (response) {
			/*
				
				jQuery.Hive manages serialization/deserialization
			
			*/
			//console.log(response);

			timeStampIt();

			$.Hive.destroy(obj[0].id);
 			
 			//runTest2();
		}, 
		created: function ( $hive ) {
			/*
			
				the `created` callback fires after the worker is created,
				the first argument is an array of the workers
				
				$().send() is the wrapper for postMessage() with complete
				serialization/deserialization
				
			*/
			$( $hive ).send(message);
		
		}
	});

	console.log(obj[0]);
}

var timeStampIt = function(){
	console.log(+(new Date()));
}

var runTest2 = function(){
	console.log("Running test 2...");

	fetchIt(null, doIt);
}

$(runTest2);

