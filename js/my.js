var extent =  [568854.4864347089,5406343.550979999 , 569026.947477955,5406479.704434809 ];//w=3551,h=2938
var projection = new ol.proj.Projection({
	code: 'xkcd-image',
	units: 'pixels',
	extent: extent
});

var localMap = new ol.Map({
	target: 'map',
	layers: [

		new ol.layer.Tile({
			source: new ol.source.OSM()
		}),/*
		new ol.layer.Image({
			extent: [-13884991, 2870341, -7455066, 6338219],
			source: new ol.source.ImageWMS({
				url: 'https://ahocevar.com/geoserver/wms',
				params: {'LAYERS': 'topp:states'},
				ratio: 1,
				serverType: 'geoserver'
			})
		})*/

		/*
		new ol.layer.Tile({
			source: new ol.source.OSM(),
			zIndex: 0
		}),*/
		new ol.layer.Image({
			source: new ol.source.ImageStatic({
				attributions: '',
				url: 'img/BDE_rdc.png',
				projection: projection,
				imageExtent: extent,
			})
			//minResolution: 18,

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
		localMap.getView().animate({zoom: 18},{center: ol.proj.fromLonLat([5.114377, 43.619726])},{zoom: 20});
	});
	localMap.on('click',function (e) {
		// Suivi de la position de la souris dans la console
		//console.log(`Position de la souris : X = ${event.clientX} | Y = ${event.clientY}`);
		console.log(e.coordinate);
	});
});
