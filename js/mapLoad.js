// require([
// 	"esri/config",
// 	"esri/Map",
// 	"esri/views/MapView",
// 	"esri/layers/FeatureLayer",
// 	"esri/Graphic"
// ], function(esriConfig, Map, MapView, FL, Graphic) {
// 	esriConfig.apiKey =
// 		"AAPK56e3ac027f044c4089d8ceec232fc05dYaOuzVRzm8tMRqvzOvDvIEevbqJ85yppn9PacU6cy4duurJrVK9wo_8BcWO8i8bi";
// 	const map = new Map({
// 		basemap: "osm-standard" // Basemap layer service
// 	});
// 	const layer_2022 = new FL({
// 		url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/FeatureServer/0"
// 	});
// 	map.add(layer_2022);
// 	const view = new MapView({
// 		map: map,
// 		center: [114, 32], // Longitude, latitude
// 		zoom: 3, // Zoom level
// 		container: "viewDiv" // Div element
// 	});
// });


