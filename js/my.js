var map = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([5.110652, 43.617629]),
		zoom: 20,
		rotation: 196 * Math.PI / 180
	})
});

$( document ).ready(function() {
    $("#room").click(function(){
		map.getView().animate({zoom: 18},{center: ol.proj.fromLonLat([5.114377, 43.619726])},{zoom: 20});
	});
});
