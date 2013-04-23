(function(_w){
	var obj = {};

	if(typeof(Worker)!=="undefined"){
		_w.AZIZ = "ok";
		//alert(Worker);
	}
	else{
		// Sorry! No Web Worker support..
	}
})(window);

function startWorker(){
	if(typeof(Worker)!=="undefined"){
		if(typeof(w)=="undefined"){
			w=new Worker("assets/scripts/test.js");
		}

		w.onmessage = function (event) {
			alert(event.data);
		};
	}
	else{
		alert("Sorry, your browser does not support Web Workers...");
	}
}

function stopWorker(){ 
	w.terminate();
}

startWorker();