        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var map;
                
        var pickup = new google.maps.LatLng(-1.957926, 30.069485);
        var dropoff = new google.maps.LatLng(-1.944676, 30.0897449);
        
        var mapOptions = {
            zoom:14,
            center:pickup
        }        
        map = new google.maps.Map(document.getElementById('canvas'), mapOptions);
        directionsDisplay.setMap(map);
        function calculateRoute(){
            var request = {
                origin: pickup,
                destination: dropoff,
                travelMode:'DRIVING'
            }
            directionsService.route(request,function(result, status){
                if(status == 'OK'){
                    directionsDisplay.setDirections(result);
                }
            });
        }
        calculateRoute();