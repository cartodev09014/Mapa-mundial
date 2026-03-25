const BJ_BOUNDS = { //Buffer a 1km
  north: 19.431174759,
  south: 19.329890733,
  west: -99.220695432,
  east: -99.102374776
};

const LIMITES_REALES_BJ = { 
  north: 19.4063,
  south: 19.3528,
  west: -99.1914,
  east: -99.1245
};

const COLORES_BJ = [
  "#0053A1", // Azul fuerte
  "#E60B95", // Rosa/Magenta
  "#3FFF00", // Verde vibrante
  "#FFFFFF"  // Blanco
];

//Limite territorial, hay que minimizar
const geojsonBJ = {
"type": "FeatureCollection",
"features": [
{ "type": "Feature", "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -99.17295679, 19.36030768 ], [ -99.1733243, 19.36064421 ], [ -99.1734752, 19.36078645 ], [ -99.1736419, 19.36098421 ], [ -99.17373221, 19.36109135 ], [ -99.17437956, 19.36204906 ], [ -99.17452787, 19.36222321 ], [ -99.17476491, 19.36242521 ], [ -99.17657387, 19.36415848 ], [ -99.17711081, 19.36467294 ], [ -99.17757356, 19.36511632 ], [ -99.1776804, 19.3650249 ], [ -99.17782191, 19.36490381 ], [ -99.17825996, 19.36452897 ], [ -99.1786825, 19.36412474 ], [ -99.17885685, 19.36393026 ], [ -99.17903766, 19.36373373 ], [ -99.17921264, 19.36346752 ], [ -99.17925307, 19.3633999 ], [ -99.17938576, 19.36325267 ], [ -99.17945403, 19.36318217 ], [ -99.17952545, 19.3631072 ], [ -99.17968872, 19.3629579 ], [ -99.17980393, 19.36288313 ], [ -99.17992347, 19.36282779 ], [ -99.1800732, 19.3627806 ], [ -99.18022939, 19.36274056 ], [ -99.18060404, 19.36276046 ], [ -99.18125498, 19.36274975 ], [ -99.18152559, 19.36267791 ], [ -99.1825399, 19.36234826 ], [ -99.18267546, 19.36222917 ], [ -99.18280936, 19.3621147 ], [ -99.18359196, 19.36173115 ], [ -99.18405492, 19.36159452 ], [ -99.18473535, 19.36169893 ], [ -99.184975780000016, 19.36165311 ], [ -99.18513131, 19.36164401 ], [ -99.18553502, 19.36162038 ], [ -99.18579779, 19.36169249 ], [ -99.18606057, 19.36176461 ], [ -99.1862207, 19.36183134 ], [ -99.18667663, 19.36202134 ], [ -99.18672032, 19.36204797 ], [ -99.18689362, 19.36211398 ], [ -99.18758115, 19.36257267 ], [ -99.188005, 19.36286198 ], [ -99.18812954000002, 19.36292598 ], [ -99.18899207, 19.3629398 ], [ -99.188982670000016, 19.36308118 ], [ -99.18903758, 19.36308415 ], [ -99.18908103, 19.3630865 ], [ -99.18914773, 19.36308942 ], [ -99.18921444, 19.36309234 ], [ -99.189216825711384, 19.363092903247573 ], [ -99.189257940000019, 19.36310261 ], [ -99.19018954, 19.36332245 ], [ -99.19092912, 19.36353612 ], [ -99.19104675, 19.36357969 ], [ -99.19116203, 19.36361429 ], [ -99.19097324, 19.36482022 ], [ -99.19088301, 19.36539654 ], [ -99.19082846, 19.36589208 ], [ -99.19079586, 19.36618818 ], [ -99.19074459, 19.36664546 ], [ -99.19076679, 19.36688593 ], [ -99.19076565, 19.36693551 ], [ -99.1907797, 19.3669886 ], [ -99.1908437, 19.36723042 ], [ -99.19098392, 19.36753509 ], [ -99.19125634000001, 19.36801763 ], [ -99.19142919, 19.36831352 ], [ -99.19169939, 19.36894788 ], [ -99.19174409, 19.36912145 ], [ -99.19182324, 19.36943084 ], [ -99.19183349, 19.36947093 ], [ -99.19181926, 19.36998242 ], [ -99.19177402, 19.3704083 ], [ -99.19172879, 19.37083418 ], [ -99.191657820000017, 19.37145599 ], [ -99.19165089, 19.37187127 ], [ -99.19172108, 19.37219511 ], [ -99.19174037, 19.37228411 ], [ -99.19190196, 19.37262655 ], [ -99.192050030000019, 19.37299034 ], [ -99.19210487, 19.373157479999989 ], [ -99.1921206, 19.37321735 ], [ -99.1921397, 19.37339543 ], [ -99.192125570000016, 19.37363302 ], [ -99.1920962, 19.37386558 ], [ -99.19205382, 19.37425363 ], [ -99.19191513, 19.37528342 ], [ -99.19184285, 19.37592591 ], [ -99.191811967515179, 19.376148996481657 ], [ -99.191783220000019, 19.37635666 ], [ -99.19178008, 19.37637936 ], [ -99.19160976, 19.37760987 ], [ -99.19160752, 19.37801347 ], [ -99.19162821, 19.37826457 ], [ -99.19168512, 19.37895538 ], [ -99.19171923, 19.37964053 ], [ -99.19174396, 19.38013727 ], [ -99.19174604, 19.38017909 ], [ -99.19174711, 19.38020064 ], [ -99.19175334, 19.38032568 ], [ -99.19174894, 19.38092135 ], [ -99.19174527, 19.38141915 ], [ -99.19174365, 19.38162212 ], [ -99.1917265, 19.38275908 ], [ -99.19169676, 19.38297967 ], [ -99.19159967, 19.38329639 ], [ -99.19096173, 19.38473477 ], [ -99.19093014, 19.38480646 ], [ -99.19091543, 19.38484012 ], [ -99.19089045, 19.38489727 ], [ -99.190794971402369, 19.385115737715111 ], [ -99.19036327, 19.38610352 ], [ -99.19003732, 19.38736439 ], [ -99.19003247, 19.38738313 ], [ -99.18983214, 19.38815804 ], [ -99.189486832490161, 19.389434019021582 ], [ -99.189028480000019, 19.39112769 ], [ -99.1887999, 19.39207571 ], [ -99.18871472, 19.39231909 ], [ -99.18836178, 19.39340662 ], [ -99.18836192, 19.39352319 ], [ -99.18835679, 19.39371073 ], [ -99.18838372, 19.3939033 ], [ -99.188432, 19.394080639999988 ], [ -99.18860874, 19.39449607 ], [ -99.18875291, 19.39484186 ], [ -99.18907698, 19.39563004 ], [ -99.18900746, 19.39563447 ], [ -99.1889721, 19.39563675 ], [ -99.18894631, 19.3956384 ], [ -99.18889453, 19.39564173 ], [ -99.18862283, 19.39565913 ], [ -99.18851636, 19.39566595 ], [ -99.18782449, 19.39571025 ], [ -99.18765436, 19.39570525 ], [ -99.18755144, 19.39570222 ], [ -99.18650346, 19.39563889 ], [ -99.18598119, 19.39577839 ], [ -99.18531478, 19.39595639 ], [ -99.18509858, 19.39602228 ], [ -99.18435395, 19.39614447 ], [ -99.1840751, 19.39619023 ], [ -99.18346131, 19.39642748 ], [ -99.18243696, 19.3967956 ], [ -99.18233508, 19.39690004 ], [ -99.18223029, 19.39691852 ], [ -99.18145049, 19.39705603 ], [ -99.18120296, 19.39710237 ], [ -99.1809269, 19.3971435 ], [ -99.18085521, 19.39715898 ], [ -99.18014072, 19.39731328 ], [ -99.17961501, 19.39743565 ], [ -99.1794962, 19.39749198 ], [ -99.17887725, 19.3976446 ], [ -99.17847513, 19.39773853 ], [ -99.17812841, 19.39781756 ], [ -99.17775205, 19.39790386 ], [ -99.17766647, 19.39792097 ], [ -99.17658108, 19.3981259 ], [ -99.17647138, 19.39815677 ], [ -99.17638412, 19.39823776 ], [ -99.17635095, 19.39832856 ], [ -99.176342730000016, 19.39842329 ], [ -99.17635943, 19.3984805 ], [ -99.17640318, 19.39855348 ], [ -99.17619512, 19.3984629 ], [ -99.17604115, 19.39839399 ], [ -99.1758435, 19.39832116 ], [ -99.17564113, 19.39824305 ], [ -99.17553562, 19.39822674 ], [ -99.17543626, 19.39822389 ], [ -99.17533617, 19.39824929 ], [ -99.1751492, 19.39832362 ], [ -99.17287242, 19.39901271 ], [ -99.1721614, 19.39921861 ], [ -99.17164418, 19.39938901 ], [ -99.17072305, 19.39971311 ], [ -99.170697070000017, 19.39972225 ], [ -99.170611850000014, 19.39975224 ], [ -99.17057722, 19.39976264 ], [ -99.17053527, 19.39977524 ], [ -99.17049833, 19.39978633 ], [ -99.17034855, 19.3998247 ], [ -99.1702802, 19.3998413 ], [ -99.17023132, 19.39985317 ], [ -99.17017233, 19.3998674 ], [ -99.16791085, 19.4003979 ], [ -99.16528404, 19.4013145 ], [ -99.16303543, 19.40214019 ], [ -99.16276055, 19.40223635 ], [ -99.162444578212657, 19.402346866614288 ], [ -99.162408794434995, 19.4023001019549 ], [ -99.162278200000017, 19.40240506 ], [ -99.16221285, 19.4024258 ], [ -99.16219105, 19.40243271 ], [ -99.16216851, 19.40243987 ], [ -99.16129538, 19.40271689 ], [ -99.16050021, 19.40295389 ], [ -99.1604782, 19.40296045 ], [ -99.16045099, 19.40296856 ], [ -99.16028724, 19.40301736 ], [ -99.16025419, 19.40302721 ], [ -99.16022255, 19.40303664 ], [ -99.16020273, 19.40304255 ], [ -99.1601795, 19.40304947 ], [ -99.15970198, 19.40319179 ], [ -99.1591373, 19.40335374 ], [ -99.15768261, 19.40378554 ], [ -99.1571472, 19.40394484 ], [ -99.15667886, 19.4040273 ], [ -99.1562362, 19.40405321 ], [ -99.15558595, 19.40405532 ], [ -99.15554826, 19.40405544 ], [ -99.15550826, 19.40405557 ], [ -99.15539299, 19.40405594 ], [ -99.15529171, 19.40405631 ], [ -99.15526369, 19.40405641 ], [ -99.15522633, 19.40405655 ], [ -99.15241918, 19.40406668 ], [ -99.15040642, 19.40404527 ], [ -99.15037249, 19.40404491 ], [ -99.15032183, 19.40404437 ], [ -99.15029369, 19.40404407 ], [ -99.14972635, 19.40403898 ], [ -99.14762689, 19.40401995 ], [ -99.14512242, 19.40388525 ], [ -99.14508822, 19.40388341 ], [ -99.1449902, 19.40387982 ], [ -99.14471996, 19.4038637 ], [ -99.14414078, 19.40383245 ], [ -99.14338381, 19.40379189 ], [ -99.14273906, 19.40375706 ], [ -99.14269099000002, 19.40375445 ], [ -99.14090439, 19.40366577 ], [ -99.14015612, 19.40362337 ], [ -99.14007886, 19.40361899 ], [ -99.13908621, 19.40356269 ], [ -99.13829676, 19.40352042 ], [ -99.13819912, 19.40351519 ], [ -99.1373424, 19.40345809 ], [ -99.13661236, 19.40342883 ], [ -99.13650098, 19.40342436 ], [ -99.13654818, 19.40311022 ], [ -99.13658139, 19.40289085 ], [ -99.13681176, 19.40136876 ], [ -99.13694493, 19.40045386 ], [ -99.13702211, 19.39992361 ], [ -99.13714891, 19.39905245 ], [ -99.13636579, 19.39901334 ], [ -99.13586916, 19.39898854 ], [ -99.13529993, 19.39896011 ], [ -99.13473069, 19.39893167 ], [ -99.13408835, 19.39889958 ], [ -99.13354242, 19.39888444 ], [ -99.1329915, 19.39887037 ], [ -99.13246785, 19.39884561 ], [ -99.131942150000015, 19.39881908 ], [ -99.13159948, 19.39881933 ], [ -99.13097234, 19.39880398 ], [ -99.13099397, 19.3976814 ], [ -99.13102328, 19.396918 ], [ -99.13117921, 19.39658559 ], [ -99.13139513, 19.39605296 ], [ -99.1314859, 19.39562393 ], [ -99.13173615, 19.39457715 ], [ -99.13197575, 19.39348439 ], [ -99.13208363, 19.39300831 ], [ -99.13210554, 19.39289617 ], [ -99.13217204, 19.39255567 ], [ -99.13249048, 19.39121869 ], [ -99.13261461, 19.3912306 ], [ -99.13281752, 19.39027614 ], [ -99.13303542, 19.38928606 ], [ -99.13321708, 19.38846066 ], [ -99.13345014, 19.38740251 ], [ -99.13345014, 19.38740251 ], [ -99.13354386, 19.38697697 ], [ -99.13364712, 19.38650817 ], [ -99.13380788, 19.38577828 ], [ -99.13407816, 19.3845644 ], [ -99.13432261, 19.38329219 ], [ -99.13446306, 19.38261824 ], [ -99.1345654, 19.38208719 ], [ -99.13470702, 19.38141096 ], [ -99.13484472, 19.38070813 ], [ -99.13514245, 19.37936353 ], [ -99.13543651, 19.37803107 ], [ -99.1355851, 19.37727664 ], [ -99.13591067, 19.37588559 ], [ -99.13613721, 19.37491932 ], [ -99.13635941, 19.37387695 ], [ -99.13657495, 19.37290639 ], [ -99.13686031, 19.37165302 ], [ -99.13705421, 19.37078981 ], [ -99.13732344, 19.36964759 ], [ -99.13756525, 19.36866234 ], [ -99.13770594, 19.36800516 ], [ -99.13787314, 19.36726077 ], [ -99.13799869, 19.36671229 ], [ -99.13812434, 19.36612853 ], [ -99.13825983, 19.36552047 ], [ -99.13839108, 19.36490522 ], [ -99.1385201, 19.36429459 ], [ -99.13865822, 19.36365429 ], [ -99.13865822, 19.36365429 ], [ -99.13878705, 19.36308221 ], [ -99.13891973, 19.36249306 ], [ -99.13907007, 19.36182548 ], [ -99.13921992, 19.36116006 ], [ -99.1393525, 19.36051956 ], [ -99.139561891919925, 19.359578368619029 ], [ -99.13956243, 19.35957595 ], [ -99.13957453, 19.3595185 ], [ -99.13999279, 19.35753215 ], [ -99.14008394, 19.35725328 ], [ -99.14009574, 19.35719675 ], [ -99.14013016, 19.35703185 ], [ -99.14014606, 19.35695566 ], [ -99.14015312, 19.35692184 ], [ -99.14015721, 19.35690224 ], [ -99.14017171, 19.35683576 ], [ -99.14020677, 19.35667425 ], [ -99.14021339, 19.35664351 ], [ -99.14309695, 19.35682255 ], [ -99.14400059, 19.35635646 ], [ -99.14409028, 19.35631019 ], [ -99.14385044, 19.35725833 ], [ -99.143853824952018, 19.357258492778964 ], [ -99.14401763, 19.35726637 ], [ -99.14626678, 19.3573655 ], [ -99.14964366, 19.35750195 ], [ -99.15299378, 19.35769862 ], [ -99.1532083, 19.35770941 ], [ -99.15669725, 19.35789951 ], [ -99.157142480000019, 19.35792502 ], [ -99.157155815034073, 19.357925784045459 ], [ -99.157161172688205, 19.357926091017873 ], [ -99.16185923, 19.35819521 ], [ -99.16346976, 19.35827893 ], [ -99.16727267, 19.35848611 ], [ -99.16757146, 19.35850455 ], [ -99.16847288, 19.35856017 ], [ -99.16881507, 19.35857605 ], [ -99.16930387, 19.35859872 ], [ -99.16964139, 19.35861806 ], [ -99.17008497, 19.35869282 ], [ -99.17029582, 19.35875622 ], [ -99.17046469, 19.35883036 ], [ -99.17057908, 19.35888661 ], [ -99.17103106, 19.35912712 ], [ -99.17166333, 19.35952466 ], [ -99.17180292, 19.35960108 ], [ -99.17243842, 19.35998301 ], [ -99.17295679, 19.36030768 ] ] ] } }
]
}

// Función para convertir GeoJSON a formato Google Maps {lat, lng}
const RUTA_FRONTERA_REAL = geojsonBJ.features[0].geometry.coordinates[0].map(coord => ({
    lat: coord[1],
    lng: coord[0]
}));

let lineaLimite; // Variable global para la línea
let stepColor = 0;
const VELOCIDAD_ANIMACION = 0.0005;

function mezclarColores(c1, c2, factor) {
    const hex = (c) => parseInt(c.replace('#', ''), 16);
    const r1 = hex(c1) >> 16, g1 = (hex(c1) >> 8) & 0xff, b1 = hex(c1) & 0xff;
    const r2 = hex(c2) >> 16, g2 = (hex(c2) >> 8) & 0xff, b2 = hex(c2) & 0xff;
    
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function iniciarLimiteAnimado() {
    lineaLimite = new google.maps.Polyline({
        path: RUTA_FRONTERA_REAL,
        geodesic: true,
        strokeOpacity: 1.0,
        strokeWeight: 6,
        map: map,
        zIndex: 1,
        clickable: false
    });

    function frame() {
        stepColor += VELOCIDAD_ANIMACION;
        if (stepColor >= 1) stepColor = 0;

        const n = COLORES_BJ.length;
        const indexActual = Math.floor(stepColor * n);
        const indexSiguiente = (indexActual + 1) % n;
        const factorInterp = (stepColor * n) % 1;

        const colorActual = mezclarColores(
            COLORES_BJ[indexActual], 
            COLORES_BJ[indexSiguiente], 
            factorInterp
        );

        lineaLimite.setOptions({ strokeColor: colorActual });
        requestAnimationFrame(frame);
    }

    frame();
}

// Radio de búsqueda (m) para nearbySearch
const RADIO_BUSQUEDA = 2000;

// General
let userMarker = null; 
let userCircle = null;
let userInfoWindow = null;
let map, placesService, infoWindow;
let markers = [];
let userLocation = null; // coordenadas GPS del usuario
let searchDebounce = null; // timer del debounce, configurado más adelante a 2 segundos de espera

const resultsContainer = document.getElementById('results-list');

// CARGA DEL SDK
function loadGoogleMaps() {
  if (document.getElementById('gm-script')) return;
  const script = document.createElement('script');
  script.id = 'gm-script';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&v=weekly&libraries=places,marker&language=es&region=MX`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Inicializar el mapa
window.initMap = function () {

  const esMovil = window.innerWidth <= 768;

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 19.380642416532467, lng: -99.16113465807204},
    zoom: esMovil ? 13 : 14,
    mapId: "BJ",
    restriction: { latLngBounds: BJ_BOUNDS, strictBounds: false },
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    cameraControl: false,
    rotateControl: false
  });

  infoWindow = new google.maps.InfoWindow({ maxWidth: 210 });
  placesService = new google.maps.places.PlacesService(map);

  initSearch();
  cargarDatosLocales();

  // Pedir GPS al cargar
  pedirUbicacionAlCargar(); //si esta línea se comenta, ya no pedirá el GPS al abrir y el mapa cargará en el centro de la alcaldía
  
  iniciarLimiteAnimado();
  
  // DIBUJAR EL LÍMITE (Solo para depurar, bórralo cuando termines)
  // new google.maps.Rectangle({
  //   bounds: BJ_BOUNDS,
  //   editable: false,
  //   map: map,
  //   fillColor: '#FF0000',
  //   fillOpacity: 0.05,
  //   strokeColor: '#FF0000',
  //   strokeOpacity: 0.2,
  //   strokeWeight: 1,
  //   clickable: false
  // });
};

// Geolocalización
function pedirUbicacionAlCargar() {
  if (!navigator.geolocation) return;

  // Intentar varias veces hasta obtener buena precisión
  let intentos = 0;
  const maxIntentos = 5;

  function intentarUbicacion() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        intentos++;
        const precision = pos.coords.accuracy; // metros

        if (precision <= 70 || intentos >= maxIntentos) {
          // Precisión aceptable o ya no hay más intentos
          userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          colocarMarcadorUsuario(userLocation);
          map.setCenter(userLocation);
          map.setZoom(15);

          setTimeout(() => {
            if (userMarker && userMarker.map) {
              userMarker.map = null; // Quita el marcador avanzado
            }
            if (userCircle) {
              userCircle.setMap(null); // Quita el círculo azul
            }
            userLocation = null; // Limpia la variable de referencia
            console.log("Ubicación inicial removida tras 10s");
          }, 10000); // 10000 milisegundos = 10 segundos
        } else {
          // Precisión mala, esperar 1.5s e intentar de nuevo
          setTimeout(intentarUbicacion, 1500);
        }
      },
      err => console.warn('GPS no disponible:', err.message),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  intentarUbicacion();
}

// Variable global para controlar el estado
let gpsActivo = false;

// 1. Modificar la función del botón
function centrarEnUsuario() {
  const btn = document.querySelector('.btn-gps');

  // SI YA ESTÁ ACTIVO -> LO APAGAMOS
  if (gpsActivo) {
    if (userMarker) userMarker.map = null;
    if (userCircle) userCircle.setMap(null);
    if (userInfoWindow) userInfoWindow.close();

    userLocation = null;
    gpsActivo = false;

    map.setCenter({ lat: 19.380642416532467, lng: -99.16113465807204 });
    map.setZoom(13);

    btn.innerText = "📍 Mi Ubicación";
    btn.style.background = "#E60B95";
    return;
  }

  // SI ESTÁ APAGADO -> LO ACTIVAMOS
  if (!navigator.geolocation) {
    alert('GPS no disponible');
    return;
  }

  btn.innerText = "Buscando...";

  navigator.geolocation.getCurrentPosition(
    pos => {
      userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };

      // Verificamos si está en BJ
      if (!new google.maps.LatLngBounds(LIMITES_REALES_BJ).contains(userLocation)) {
        alert('Estás fuera de Benito Juárez');
        // Aun así marcamos para que pueda apagarlo si quiere
      }

      colocarMarcadorUsuario(userLocation);
      map.panTo(userLocation);
      map.setZoom(15);

      // Cambiamos estado a ACTIVO
      gpsActivo = true;
      btn.innerText = "Apagar GPS";
      btn.style.background = "#e74c3c"; // Color rojo (puedes usar el que gustes)
    },
    () => {
      alert('No se pudo obtener tu ubicación');
      btn.innerText = "📍 Mi Ubicación";
      btn.style.background = "#E60B95";
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
  );
}

// Marcador del usuario
async function colocarMarcadorUsuario(pos) {
  const { AdvancedMarkerElement, PinElement} = await google.maps.importLibrary("marker");
  if (userMarker) userMarker.map = null;
  if (userCircle) userCircle.setMap(null);
  if (userInfoWindow) userInfoWindow.close();

  const pinPersonalizado = new PinElement({
    background: "#E60B95",
    glyphColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    scale: 1.0
  });

  userMarker = new AdvancedMarkerElement({
    map: map,
    position: pos,
    title: 'Tu ubicación actual',
    content: pinPersonalizado,
    zIndex: 1000
  });

  userInfoWindow = new google.maps.InfoWindow({
    content: `<div style="color: #202124; font-family: 'Roboto', Arial; font-size: 13px; font-weight: 500; padding: 2px 5px;">
                Usted está aquí
              </div>`,
    disableAutoPan: true // Evita que el mapa se mueva bruscamente al abrirlo
  });

  // Abrir el popup sobre el marcador inmediatamente
  userInfoWindow.open(map, userMarker);

  userCircle = new google.maps.Circle({
    map,
    center: pos,
    radius: 80,
    fillColor: '#E60B95',
    fillOpacity: 0.15,
    strokeColor: '#E60B95',
    strokeOpacity: 0.4,
    strokeWeight: 1,
    zIndex: 999,
    clickable: false
  });
}

// BUSCADOR — mínimo costo de uso de las request de PLACES API
// Tiene un AutocompleteService con debounce 2000ms (2 segundos):
//   - Solo llama cuando el usuario DEJA de escribir, es decir, no llama en cada letra (a diferencia del widget Autocomplete nativo)
//   - Muestra dropdown manual con sugerencias (el dropdown de la API también cuesta, por eso se hizo uno manual)
// Geocoder solo al SELECCIONAR una sugerencia (1 llamada)
// textSearch solo al presionar ENTER (1 llamada)
// Llamadas estimadas, mínimo 2 pero pueden ser hasta 4 o 10, depende de los clics
function initSearch() {
  const input = document.getElementById('pac-input');
  const dropdown = crearDropdown(input);
  const acSvc = new google.maps.places.AutocompleteService();
  const geocoder = new google.maps.Geocoder();

  input.addEventListener('input', () => {
    const q = input.value.trim();
    clearTimeout(searchDebounce);
    dropdown.hide();
    if (q.length < 2) return;

    // Debounce 2000ms — solo llama si el usuario pausó de escribir
    searchDebounce = setTimeout(() => {
      // Primero buca en el JSON
      const qLower = q.toLowerCase();
      const sugerenciasLocales = marcadoresLocales
        .filter(m => m.title.toLowerCase().includes(qLower) || m.categoria.toLowerCase().includes(qLower))
        .slice(0, 3) // Tomamos las 3 mejores coincidencias locales
        .map(m => ({
          isLocal: true, // Bandera para saber que es de tu JSON
          marker: m,
          structured_formatting: {
            main_text: m.title,
            secondary_text: `Sugerencia: ${m.categoria}`
          }
        }));
      
      // Busca en Google Places
      acSvc.getPlacePredictions({
        input: q,
        componentRestrictions: { country: 'mx' },
        locationBias: {
          center: new google.maps.LatLng(
            userLocation?.lat || 19.380642416532467,
            userLocation?.lng || -99.16113465807204
          ),
          radius: 5000,
        },
      }, (predictions, status) => {
        let combinados = sugerenciasLocales;
        
        if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
          combinados = [...sugerenciasLocales, ...predictions.slice(0, 5)];
        }

        if (combinados.length > 0) {
          dropdown.show(combinados, item => {
            if (item.isLocal) {
              // ACCIÓN PARA DATO LOCAL
              input.value = item.marker.title;
              dropdown.hide();
              const pos = item.marker.position;
              map.panTo(pos);
              map.setZoom(17);
              google.maps.event.trigger(item.marker, 'gmp-click');
            } else {
              // ACCIÓN PARA GOOGLE (tu código actual)
              input.value = item.structured_formatting.main_text;
              dropdown.hide();
              geocoder.geocode({ placeId: item.place_id }, (res, st) => {
                if (st !== 'OK' || !res[0]) return;
                const loc = res[0].geometry.location;
                limpiarMarcadores();
                map.setCenter(loc); map.setZoom(17);
                const fakePlace = { 
                  name: item.structured_formatting.main_text, 
                  formatted_address: res[0].formatted_address, 
                  geometry: { location: loc } 
                };
                markers.push(crearMarcador(fakePlace, 0));
                mostrarResultados([{ 
                  name: fakePlace.name, 
                  address: fakePlace.formatted_address, 
                  location: loc 
                }]);
              });
            }
          });
        } else {
          dropdown.hide();
        }
      });
    }, 2000);
  });

  // Enter ejecuta textSearch, 1 sola llamada
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      dropdown.hide();
      const q = input.value.trim();
      if (q) buscarCercano(q);
    }
  });

  // Cerrar dropdown al hacer click fuera
  document.addEventListener('click', e => {
    if (!input.contains(e.target)) dropdown.hide();
  });
}

// Dropdown manual
function crearDropdown(input) {
  const box = document.createElement('div');
  box.style.cssText = `
    position:absolute; background:white; border:1px solid #ddd;
    border-radius:4px; box-shadow:0 4px 12px rgba(0,0,0,0.15);
    z-index:9999; display:none; max-width:400px; width:100%;
    top:100%; left:0; margin-top:4px;
  `;
  // Posicionar relativo al input
  input.parentElement.style.position = 'relative';
  input.parentElement.appendChild(box);

  return {
    show(predictions, onSelect) {
      box.innerHTML = '';
      predictions.slice(0, 5).forEach(pred => {
        const item = document.createElement('div');
        const colorTexto = pred.isLocal ? '#1e8449' : '#70757a'; // Verde si es tuyo, gris si es Google
        const prefijo = pred.isLocal ? '📍 ' : '';
        item.style.cssText = 'padding:8px 12px;cursor:pointer;font-size:13px;border-bottom:1px solid #f0f0f0;';
        item.innerHTML = `
          <div style="font-weight:600;color:#202124">${prefijo}${pred.structured_formatting.main_text}</div>
          <div style="font-size:11px;color:${colorTexto}">${pred.structured_formatting.secondary_text || ''}</div>`;
        item.onmouseenter = () => item.style.background = '#f5f5f5';
        item.onmouseleave = () => item.style.background = 'white';
        item.onclick = () => onSelect(pred);
        box.appendChild(item);
      });
      box.style.display = 'block';
    },
    hide() { box.style.display = 'none'; },
  };
}

// BÚSQUEDA POR CATEGORÍA — textSearch con query + zona
// Se dispara UNA sola vez al presionar Enter o Buscar
// Costo: $0.032 USD por búsqueda (igual que nearbySearch)
// La diferencia: textSearch entiende términos genéricos en español
// nearbySearch con keyword falla con "farmacias", "parques", etc.
// BÚSQUEDA POR CATEGORÍA — textSearch con query + zona
async function buscarCercano(query) {
  if (!query) return;

  const qOriginal = query.trim();
  const qLower = qOriginal.toLowerCase();
  
  // IMPORTANTE: Usamos los límites reales para restringir la búsqueda
  const bjBounds = new google.maps.LatLngBounds(LIMITES_REALES_BJ);

  const sinonimosLocal = {
    'library': 'biblioteca', 'libraries': 'biblioteca',
    'park': 'parque', 'parks': 'parque',
    'market': 'mercado', 'markets': 'mercado',
    'culture': 'cultura', 'archaeology': 'arqueológica',
    'police': 'blindar', 'security': 'blindar',
    'town hall': 'alcaldía', 'city hall': 'alcaldía'
  };

  const terminoExtraLocal = sinonimosLocal[qLower] || qLower;

  limpiarMarcadores();
  resultsContainer.innerHTML = `<p style="color:#999;margin-top:10px;">Buscando "${qOriginal}"…</p>`;

  // FILTRAR DATOS LOCALES (JSON)
  const localesEncontrados = marcadoresLocales.filter(m => {
    // IMPORTANTE: m.title y m.categoria deben existir
    const titulo = (m.title || "").toLowerCase();
    const cat = (m.categoria || "").toLowerCase();
    return titulo.includes(qLower) || cat.includes(qLower) || cat.includes(terminoExtraLocal);
  });

  // BUSCAR EN GOOGLE 
  // Cambiamos locationBias por una estructura más fuerte y ajustamos el query
  const opcionesBusqueda = {
      query: `${qOriginal} en Benito Juárez CDMX`,
      bounds: bjBounds,
      language: 'es'
    };
  
  // LÓGICA DE PRECISIÓN:
  // Si el GPS está activo, inyectamos la ubicación del usuario como imán de relevancia.
  // Si está desactivado, NO enviamos location ni radius para que busque en todo el bound por igual.
  if (gpsActivo && userLocation) {
    opcionesBusqueda.location = userLocation;
    opcionesBusqueda.radius = 1000; // Prioridad cercana si hay GPS
  }

  // 3. EJECUTAR BÚSQUEDA EN GOOGLE
  placesService.textSearch(opcionesBusqueda, async (results, status) => {
    
    const mapeoLocales = localesEncontrados.map(m => ({
      name: m.title,
      address: m.categoria + " (Dato Local)",
      location: m.position,
      isLocal: true,
      marker: m
    }));

    let googleResults = [];
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      googleResults = results
        .filter(p => {
          const loc = p.geometry?.location;
          // Filtro de seguridad: que el resultado esté REALMENTE en BJ
          return loc && bjBounds.contains(loc);
        })
        .map(p => ({
          name: p.name,
          address: p.vicinity || p.formatted_address,
          location: p.geometry.location,
          isLocal: false
        }));
    }

    const combinados = [...mapeoLocales, ...googleResults];

    if (combinados.length === 0) {
      resultsContainer.innerHTML = `<p style="color:#999;margin-top:10px;text-align:center;">Sin resultados para "${qOriginal}" dentro de la zona.</p>`;
      return;
    }

    resultsContainer.innerHTML = ''; 
    const finalBounds = new google.maps.LatLngBounds();

    // Renderizado de marcadores
    for (const [i, lugar] of combinados.entries()) {
      if (!lugar.isLocal) {
        const m = await crearMarcador(lugar, i);
        markers.push(m);
      } else {
        lugar.marker.map = map;
      }
      finalBounds.extend(lugar.location);
    }

    // 4. MANEJO DE CÁMARA (UX)
    if (gpsActivo && userLocation) {
        // Si el usuario tiene el GPS puesto, el mapa se centra en ÉL
        map.panTo(userLocation);
        map.setZoom(15);
    } else {
        // Si no hay GPS, el mapa se encuadra para mostrar todos los resultados hallados
        map.fitBounds(finalBounds, { padding: 60 });
        
        // Evitar que haga un zoom exagerado si solo hay un resultado
        const listener = google.maps.event.addListener(map, 'idle', () => {
            if (map.getZoom() > 16) map.setZoom(16);
            google.maps.event.removeListener(listener);
        });
    }

    mostrarResultados(combinados);
  });
}

// Marcadores
async function crearMarcador(place, index) {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const pos = place.geometry?.location || place.location;

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: pos,
    title: place.name,
  });

  marker.addListener('gmp-click', () => {
    const lat = (typeof pos.lat === 'function') ? pos.lat() : pos.lat;
    const lng = (typeof pos.lng === 'function') ? pos.lng() : pos.lng;
    infoWindow.setContent(generarInfoWindowHTML(
      place.name,
      place.formatted_address || place.vicinity || place.address || '',
      lat, lng
    ));
    infoWindow.open(map, marker);

    // Highlight en sidebar
    const card = document.getElementById(`card-${index}`);
    if (card) {
        // CAMBIO AQUÍ: Usamos una lógica manual de scroll para evitar que el header salte
        const container = document.getElementById('sidebar');
        const topPos = card.offsetTop - container.offsetTop;
        
        container.scrollTo({
            top: topPos - 20, // 20px de margen superior
            behavior: 'smooth'
        });

        card.style.background = '#e8f0fe';
        setTimeout(() => card.style.background = (card.classList.contains('local-result') ? '#f0fff0' : 'white'), 1500);
    }
});

  return marker;
}

function limpiarMarcadores() {
    // markers es el arreglo donde se guardan los resultados de búsqueda de Google
    markers.forEach(m => {
        if (m) {
            m.map = null; // En lugar de m.setMap(null)
        }
    });
    markers = [];
}

function limpiarBusqueda() {
    const input = document.getElementById('pac-input');
    const clearBtn = document.getElementById('clear-search');
    const resultsContainer = document.getElementById('results-list');

    // 1. Limpiar el texto del input
    input.value = '';
    
    // 2. Ocultar el botón de limpiar
    clearBtn.style.display = 'none';

    // 3. Quitar marcadores de búsqueda de Google del mapa
    limpiarMarcadores(); 

    // 4. Resetear el sidebar a su estado inicial
    resultsContainer.innerHTML = '<p style="color: #999; margin-top: 20px;">Busca un lugar o usa el GPS...</p>';

    // 5. Opcional: Regresar el mapa al centro de la alcaldía
    map.setCenter({ lat: 19.380642416532467, lng: -99.16113465807204 });
    map.setZoom(13);
    
    input.focus();
}

// Lógica para mostrar/ocultar la "X" según si hay texto
document.getElementById('pac-input').addEventListener('input', function() {
    const clearBtn = document.getElementById('clear-search');
    clearBtn.style.display = this.value.length > 0 ? 'block' : 'none';
});

// Sidebar
function mostrarResultados(resultados) {
    resultsContainer.innerHTML = '';
    resultados.forEach((res, i) => {
        const div = document.createElement('div');
        div.className = 'place-card' + (res.isLocal ? ' local-result' : '');
        div.id = `card-${i}`;
        
        const lat = typeof res.location.lat === 'function' ? res.location.lat() : res.location.lat;
        const lng = typeof res.location.lng === 'function' ? res.location.lng() : res.location.lng;

        // Añadimos la etiqueta si es local
        const tag = res.isLocal ? `<span class="local-tag">Sugerencia</span>` : '';
        div.innerHTML = tag + generarInfoWindowHTML(res.name, res.address, lat, lng);

        div.onclick = e => {
            // Evitar que el clic en el enlace de navegación active el zoom
            if (e.target.closest('a')) return;

            map.panTo(res.location);
            map.setZoom(17);
            
            if (res.isLocal) {
                google.maps.event.trigger(res.marker, 'click');
            } else {
                // Buscamos el marcador creado por Google
                const m = markers.find(m => m.title === res.name);
                if (m) google.maps.event.trigger(m, 'click');
            }
        };

        resultsContainer.appendChild(div);
    });
}

// Ventana de información de los marcadores - aquí esta la flecha
function generarInfoWindowHTML(name, address, lat, lng) {
  const navUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  return `
        <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:10px; min-width:180px; max-width:250px; font-family:'Roboto',Arial,sans-serif;">
        <div style="flex:1;">
            <h4 style="margin:0; font-size:13px; color:#202124; font-weight:600; line-height:1.2;">
            ${name}
            </h4>
            <p style="margin:4px 0 0 0; font-size:11px; color:#70757a; line-height:1.4;">
            ${address || 'Sin dirección'}
            </p>
        </div>
        <a href="${navUrl}" target="_blank" style="text-decoration:none; margin:5px;">
            <div style="width:26px;height:26px;background:#0053A1;border-radius:6px;transform:rotate(45deg);display:flex;align-items:center;justify-content:center;">
            <span style="color:white;font-size:14px;transform:rotate(-45deg); font-weight:bold;">➔</span>
            </div>
        </a>
        </div>`;
}

// Datos locales desde JSON
const ICONOS_CATEGORIAS = {
    "Sede de la Alcaldía": "img/alcaldia.png",
    "Blindar BJ 360°": "img/blindar.png",
    "Bibliotecas": "img/biblioteca.png",
    "Casas de Cultura": "img/casa-cultura.png",
    "Mercados Públicos": "img/mercados.png",
    "Parques": "img/parques.png",
    "Zona Arqueológica": "img/zona_arqueologica.png",
    "Default": "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" // Por si acaso
};
let marcadoresLocales = [];

async function cargarDatosLocales() {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    try {
        const res = await fetch('lugares.json');
        const data = await res.json();
        
        data.forEach(lugar => {
            const pos = { lat: parseFloat(lugar.lat), lng: parseFloat(lugar.lng) };
            const rutaIcono = ICONOS_CATEGORIAS[lugar.tipo] || ICONOS_CATEGORIAS["Default"];

            // 1. Creamos un elemento de imagen (HTML) para el icono
            const imgIcono = document.createElement('img');
            imgIcono.src = rutaIcono;
            imgIcono.width = 30; // El tamaño que tenías antes
            imgIcono.height = 38;

            // 2. Creamos el marcador avanzado
            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: pos,
                map: map,
                title: lugar.nombre,
                content: imgIcono 
            });

            // 3. ASIGNAMOS LA CATEGORÍA POR FUERA (Para que no de error)
            marker.categoria = lugar.tipo; 

            marker.addListener('gmp-click', () => {
              infoWindow.setContent(generarInfoWindowHTML(lugar.nombre, lugar.direccion || lugar.tipo, pos.lat, pos.lng));
              infoWindow.open(map, marker);
          });

            marcadoresLocales.push(marker);
        });
    } catch(e) {
        console.warn('Error cargando lugares.json', e);
    }
}

// FILTRAR JSON
function toggleTodos(masterCheckbox) {
    const checkboxes = document.querySelectorAll('.filtro-tipo');
    
    // A cada check le ponemos el mismo estado que el de "Todos"
    checkboxes.forEach(cb => {
        cb.checked = masterCheckbox.checked;
    });

    filtrarLugares();
}

function filtrarLugares() {
  const checkboxes = document.querySelectorAll('.filtro-tipo:checked');
  const master = document.getElementById('todos-checkbox');
  const todos = document.querySelectorAll('.filtro-tipo');

  // Si el usuario desmarcó uno manual, quitamos el check de "Todos"
  if (checkboxes.length < todos.length) {
      master.checked = false;
  } else if (checkboxes.length === todos.length) {
      master.checked = true;
  }
  
  // Se crea una lista con los valores de esos checkboxes (como: ["Parque", "Mercado"])
  const tiposSeleccionados = Array.from(checkboxes).map(cb => cb.value);

  marcadoresLocales.forEach(marker => {
    // Si la categoría del marcador está en nuestra lista de seleccionados...
    if (tiposSeleccionados.includes(marker.categoria)) {
      marker.map = map; // Se queda
    } else {
      marker.map = null; // Se va
    }
  });
}

// Para controlar si está abierto o cerrado el dropdown
let expanded = false;

// 2. Función que se activa al hacer clic en el select
function showCheckboxes() {
  const checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

// 3. Cerrar el menú si haces clic en cualquier otra parte del mapa
document.addEventListener('click', function(e) {
  const multiselect = document.querySelector('.multiselect');
  if (multiselect && !multiselect.contains(e.target)) {
    document.getElementById("checkboxes").style.display = "none";
    expanded = false;
  }
});

function toggleMenu() {
    const menu = document.getElementById('tools-menu');
    const boton = document.getElementById('menu-toggle');
    
    // Intercambiamos la clase 'active'
    menu.classList.toggle('active');
    
    // Cambiamos el icono de hamburguesa a una X cuando esté abierto
    if (menu.classList.contains('active')) {
        boton.innerHTML = "✕";
    } else {
        boton.innerHTML = "☰";
    }
}

// INICIAR
loadGoogleMaps();