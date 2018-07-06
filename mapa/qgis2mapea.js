var proxy = false
var layerName_lin = 'Vías ciclistas (OMS 06/07/08)'
var fillColor_lin = '#ff7f00'
var strokeColor_lin = 'blue'

var layerName_lin_dera = 'Carril bici (DERA)'
var fillColor_lin_dera = 'blue'
var strokeColor_lin_dera = 'blue'

var layerName_pun = 'Parking bicis(OMS 06/07/08)'
var fillColor_pun = '#54b04a'
var strokeColor_pun = 'red'

var bb = [-4.848915,37.863588,-4.720262,37.912964]
var basemaps = ['cdau_satelite']

M.proxy(proxy);

mapajs = M.map({
    container: "map",
    controls:['layerswitcher', 'scale', 'mouse',  'Scaleline', 'panzoombar',  'location'],
    // zoom: 7,
    bbox : bb,
    wmcfiles: basemaps
  });
  
mapajs.setProjection ("EPSG:4326*d");

// Define estilo line

let estiloLayer_lin = new M.style.Line({
    fill: {
       color: fillColor_lin,
       width: 3
    }
});




var cycleways = new M.layer.GeoJSON(
  {name: layerName_lin, 
  source: geocycleways

});

cycleways.setStyle(estiloLayer_lin);
mapajs.addLayers(cycleways);

let estiloLayer_lin_dera = new M.style.Line({
    fill: {
       color: fillColor_lin_dera,
       width: 3
    }
});

var carrildera = new M.layer.GeoJSON(
  {name: layerName_lin_dera, 
  source: geocarrildera

});

carrildera.setStyle(estiloLayer_lin_dera);
mapajs.addLayers(carrildera);

let estiloLayer_pun = new M.style.Point({
  radius: 5, 
  fill: {  
    color: fillColor_pun
    //opacity: 0.5
   },
   stroke: {
    color: '#FFFFFF',
    width: 2
   }
 });


// Crea capa

var parkins = new M.layer.GeoJSON(
  {name: layerName_pun, 
  source: geoparkings

});

parkins.setStyle(estiloLayer_pun);
mapajs.addLayers(parkins);
