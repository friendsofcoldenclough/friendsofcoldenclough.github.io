/**
 * Leafletjs functions for SpaceFinder
 */
document.addEventListener( 'DOMContentLoaded', () => {
    initMap();
});
var focc = {
    currentLoc: {
        lat: 53.74691335748559,
        lng: -2.0338482556515936
    },
    startZoom: 15
};
/**
 * Initialise map and set listeners to set up markers when loaded
 */
function initMap() {
    focc.map = L.map( 'map' ).setView([focc.currentLoc.lat, focc.currentLoc.lng], focc.startZoom );
    /* change leaflet attribution */
    focc.map.attributionControl.setPrefix( '<a href="https://leafletjs.com" target="external" title="A JavaScript library for interactive maps" aria-label="Leaflet - a JavaScript library for interactive maps"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8"><path fill="#4C7BE1" d="M0 0h12v4H0z"></path><path fill="#FFD500" d="M0 4h12v3H0z"></path><path fill="#E0BC00" d="M0 7h12v1H0z"></path></svg> Leaflet</a>' );
    focc.osm = L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a target="external" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo( focc.map );
    focc.esri_sat = L.tileLayer( 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
	    attribution: 'Tiles © Esri - Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    focc.survey = L.tileLayer( 'https://allmaps.xyz/images/a51b7d4cdaadee59/{z}/{x}/{y}@2x.png', {
        maxZoom: 19,
	    attribution: 'Tiles served by <a target="external" href="https://allmaps.org">Allmaps</a>'
    });
    focc.map.addControl( new L.Control.Fullscreen( { position: 'topright' } ) );
    focc.mapLoaded = true;
    focc.viewdata = {
        'street': {
            btnText: 'Street',
            btnLabel: 'Switch to Street View',
            btnClass: 'maptype-street',
            tileLayer: focc.osm
        },
        'satellite': {
            btnText: 'Satellite',
            btnLabel: 'Switch to Satellite View',
            btnClass: 'maptype-satellite',
            tileLayer: focc.esri_sat
        }
    };
    baseMaps = {
        "OpenStreetMap": focc.osm,
        "Satellite": focc.esri_sat
    };
    overlayMaps = {
        "Survey": focc.survey
    };
    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(focc.map);

    document.dispatchEvent( new Event( 'maploaded' ) );
}