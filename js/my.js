/*
var GeoportailFrance_orthos = L.tileLayer('https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
    attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
    bounds: [[-75, -180], [81, 180]],
    minZoom: 2,
    maxZoom: 19,
    apikey: 'choisirgeoportail',
    format: 'image/jpeg',
    style: 'normal'
});
*/

var layers = [
    new ol.layer.Tile({
        source: new ol.source.OSM()
    })

];

function buildLayers(build) {
    var proj = new ol.proj.Projection({
        code: 'xkcd-image',
        units: 'pixels',
        extent: build.extent
    });

    var layer = new ol.layer.Image({
        source: new ol.source.ImageStatic({
            attributions: '',
            url: build.path,
            projection: proj,
            imageExtent: build.extent
        }),
    });

    layers.push(layer);
}



var localMap = null;

$(document).ready(function () {

    //construction des layers batiments
    $.getJSON("json/buildings.json",function (jsonList) {
        jsonList.forEach(function (item) {
            buildLayers(item);
        });
        localMap = new ol.Map({
            target: 'map',
            layers: layers,
            view: new ol.View({
                center: ol.proj.fromLonLat([5.110652, 43.617629]),
                zoom: 20,
                rotation: 196 * Math.PI / 180
            })
        });

        //animation
        $("#room").click(function () {
            localMap.getView().animate({zoom: 18}, {center: ol.proj.fromLonLat([5.114377, 43.619726])}, {zoom: 20});
        });

        // lecture coordonnée en console
        localMap.on('click', function (e) {
            // Suivi de la position de la souris dans la console
            //console.log(`Position de la souris : X = ${event.clientX} | Y = ${event.clientY}`);
            console.log(e.coordinate.toString());
        });
    });
});




