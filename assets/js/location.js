// Initialize and add the map
    // Credit to Simen Daehlin for his help in getting this working
    // function initMapAngler() {

    function initMap() {
        // location of Anglers
        const anglerLat = parseFloat(document.getElementById('lat-angler').value);
        const anglerLng = parseFloat(document.getElementById('lng-angler').value);
        const options = [{
            // anglers
                zoom: 13,
                center: {
                    lat: anglerLat,
                    lng: anglerLng,
                },
            },
        ];
        // Position marker
        // for (let i = 0; i < options.length; i++) {
        //     const map = new google.maps.Map(document.getElementById(`map-${i + 1}`), options[i]);
            const marker = new google.maps.Marker({
                position: {
                    lat: options[i].center.lat,
                    lng: options[i].center.lng,
                    icon: options[i].icon,
                    map,
                },
            });
            marker.setMap(map)
        // }
    // }
    // Initialize and add the map
    // Credit to Simen Daehlin for his help in getting this working

    // function initMapWoodkirk() {
        // location of church
        const woodkirkLat = parseFloat(document.getElementById('lat-woodkirk').value);
        const woodkikrLng = parseFloat(document.getElementById('lng-woodkirk').value);
       
        const options = [{
            // church
                zoom: 13,
                center: {
                    lat: woodkirkLat,
                    lng: woodkirkLng,
                },
            },
        ];
        // Position marker
        // for (let i = 0; i < options.length; i++) {
        //     const map = new google.maps.Map(document.getElementById(`map-${i + 1}`), options[i]);
            const marker = new google.maps.Marker({
                position: {
                    lat: options[i].center.lat,
                    lng: options[i].center.lng,
                    icon: options[i].icon,
                    map,
                },
            });
            marker.setMap(map)
        // }
    }