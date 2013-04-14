(function(){
	FoodTruck.maps.init = init = function (){
		var map,
			myLatlng = new google.maps.LatLng(-25.363882,131.044922); 	
			mapOptions = {
	          zoom: 8,
	          center: new google.maps.LatLng(-34.397, 150.644),
	          mapTypeId: google.maps.MapTypeId.ROADMAP
	        };
	    map = new google.maps.Map(document.getElementById('map-canvas'),
	            mapOptions);
	}

	FoodTruck.maps.setMarker = setMarker = function() {
		if (!Maps.map) {
			console.log('map is not initialized')
		}
		
	}

	init();

}());
