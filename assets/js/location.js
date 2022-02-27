// // Initialize and add the map
// // Credit to Simen Daehlin for his help in getting this working
// // function initMapAngler() {

// function initMap() {
//     // location of angler
//     const anglerLat = parseFloat(document.getElementById('lat-1').value);
//     const anglerLng = parseFloat(document.getElementById('lng-1').value);
//     // location of woodkirk
//     // const woodkirkLat = parseFloat(document.getElementById('lat-2').value);
//     // const woodkirkLng = parseFloat(document.getElementById('lng-2').value);
//     const options = [{
//             // angler
//             zoom: 13,
//             center: {
//                 lat: anglerLat,
//                 lng: anglerLng,
//             },
//         },
//         // {
//         //     // woodkirk
//         //     zoom: 13,
//         //     center: {
//         //         lat: woodkirkLat,
//         //         lng: woodkirkLng,
//         //     },
//         // },
//     ];
//     // Position marker
//     for (let i = 0; i < options.length; i++) {
//         const map = new google.maps.Map(document.getElementById(`map-${i + 1}`), options[i]);
//         const marker = new google.maps.Marker({
//             position: {
//                 lat: options[i].center.lat,
//                 lng: options[i].center.lng,
//                 icon: options[i].icon,
//                 map,
//             },
//         });
//         marker.setMap(map)
//     }
// }