(function(){
	FoodTruck.maps.init = init = function (){
		var map,
			currentLocation = new google.maps.LatLng(37.34, -121.89694); 	
			mapOptions = {
	          zoom: 15,
	          center: currentLocation,
	          mapTypeId: google.maps.MapTypeId.HYBRID
	        };
	    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	    FoodTruck.location = currentLocation;
	    FoodTruck.map = map;

	}

	FoodTruck.maps.setMarker = setMarker = function(query) {
		if (!query){
      console.log('No query specified');
      return;
    }
    var currentLocation = FoodTruck.location,
			map = FoodTruck.map, 	
			request = {
				location: currentLocation,
				radius: '200',
				query: query  	
			};
		service = new google.maps.places.PlacesService(map);
		service.textSearch(request, function(data) {
			if (!(data instanceof Array)){
				console.log('ERROR: invalid response from server');
				return;
			}
      console.log(data);
			data.forEach(function(obj){
				 var marker = new google.maps.Marker({
		            position: obj.geometry.location,
		            map: map,
		            title: obj.name
		        });
			});
		});
	}

	init();

  ['schools',  'parking'].forEach(function(query){
    setMarker(query);
  });

}());
