
mapboxgl.accessToken = 'pk.eyJ1IjoiYXRhbnV3ZWJnaXMiLCJhIjoiY2xrdTNhb2lrMDRwYjNrcnpuMmxncThtcyJ9.b48pLvav8oakGWzEN0hBoQ';
var map
function mapint() {

    map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
    });
    feedData()

}

function feedData() {
    fetch('https://photoapp-c26f6-default-rtdb.firebaseio.com/feed.json')
        .then((response) => {
            return response.json()

        })
        .then((data) => {
            var ids = Object.keys(data)
            for (i = 0; i < ids.length; i++) {
                // create the popup
                const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                    '<p> Status:' + data[ids[i]].status + '</p> <img src' + data[ids[i]].image + '/><p> Email:' + data[ids[i]].email + '</p>'
                );

                // create DOM element for the marker
                const el = document.createElement('div');
                el.id = 'marker';

                // create the marker
                new mapboxgl.Marker()
                    .setLngLat(data[ids[i]].location.longitude, data[ids[i]].location.latitude)
                    .setPopup(popup) // sets a popup on this marker
                    .addTo(map);

            }
        })
}