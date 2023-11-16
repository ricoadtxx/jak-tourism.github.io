L.mapbox.accessToken =
	"pk.eyJ1Ijoicmljb2FkdHgiLCJhIjoiY2xvaTN2bWt2MGlwMTJsczI0Z3VobjZpaCJ9.cSST2NfM9NC4WKq5LDEwvw";
var mapboxTiles = L.tileLayer(
	"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" +
		L.mapbox.accessToken,
	{
		attribution:
			'© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}
);

var bigMap = mapboxTiles;

var map1 = L.map("map2")
	.addLayer(bigMap)
	.setView([-6.19285973836777, 106.81920068563548], 7)
	.addControl(
		L.mapbox.geocoderControl("mapbox.places", {
			keepOpen: false,
		})
	);
L.control.fullscreen().addTo(map1);
L.control
	.layers({
		"Mapbox Streets": L.mapbox
			.styleLayer("mapbox://styles/mapbox/streets-v11")
			.addTo(map1),
		"Mapbox Light": L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10"),
		"Mapbox Outdoors": L.mapbox.styleLayer(
			"mapbox://styles/mapbox/outdoors-v11"
		),
		"Mapbox Satellite": L.mapbox.styleLayer(
			"mapbox://styles/mapbox/satellite-v9"
		),
	})
	.addTo(map1);

var myLayer = L.mapbox.featureLayer().addTo(map1);

myLayer.setGeoJSON({
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.767985792382078, -6.191043434066831],
			},
			properties: {
				title: "AKR Tower Level M",
				description:
					"Jalan Panjang No. 5 Kebon Jeruk, Jakarta Barat 11530, Indonesia",
				"marker-id": "marker-1",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.789995928493553, -6.175013015755474],
			},
			properties: {
				title: "Jakarta Aquarium",
				description:
					"Jalan Panjang No. 5 Kebon Jeruk, Jakarta Barat 11530, Indonesia",
				"marker-id": "marker-2",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.817181341189169, -6.137694074973638],
			},
			properties: {
				title: "Kota Tua",
				description:
					"Jakarta Jalan Pintu Besar Utara Nomer 27, Rt 07 / Rw 07, Pinangsia, Tamansari, Jakarta Barat, DKI Jakarta.",
				"marker-id": "marker-3",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.764395427944962, -6.210694505928974],
			},
			properties: {
				title: "Hutan Kota Srengseng",
				description:
					"Jalan Haji Kelik, RT.8/RW.6, Srengseng, West Jakarta City, Jakarta, Indonesia",
				"marker-id": "marker-4",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.707824588036871, -6.14190748732827],
			},
			properties: {
				title: "Watersplash citra 2",
				description:
					"Perumahan citragarden city 2, Jalan Kebahagiaan, RT.10/RW.12, Pegadungan, West Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-5",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.827160414578742, -6.175506403770339],
			},
			properties: {
				title: "Monumen Nasional",
				description: "Gambir, Central Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-6",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.831390019899558, -6.170169994859335],
			},
			properties: {
				title: "Masjid Istiqlal",
				description:
					"Jl. Taman Wijaya Kusuma, Pasar Baru, Central Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-7",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.843123546084556, -6.183907730179468],
			},
			properties: {
				title: "Museum Sumpah Pemuda",
				description:
					"Jalan Kramat Raya, RT.2/RW.9, Kwitang, Central Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-8",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.838189023952395, -6.190593969870026],
			},
			properties: {
				title: "Taman Ismail Marzuki (TIM)",
				description:
					"Jalan Cikini Raya, Cikini, Central Jakarta City, Jakarta, Indonesia",
				"marker-id": "marker-9",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.820353015649388, -6.305988669343553],
			},
			properties: {
				title: "Taman Margasatwa Ragunan",
				description:
					"Jalan Harsono RM, Ragunan, South Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-10",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.809714380925854, -6.225073513771433],
			},
			properties: {
				title: "Kidzania",
				description:
					"Pacific Place Mall, Jl. Jenderal Sudirman, RT.5/RW.3, Senayan, South Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-11",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.818943916071561, -6.231828626826892],
			},
			properties: {
				title: "Museum Satriamandala",
				description:
					"Jalan Gatot Subroto, RT.6/RW.1, West Kuningan, South Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-12",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.790585018722012, -6.307988419309427],
			},
			properties: {
				title: "Museum Layang-layang Indonesia",
				description:
					"Jalan Haji Kamang, RT.8/RW.10, Pondok Labu, South Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-13",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.823866562911419, -6.341802441706341],
			},
			properties: {
				title: "Setu Babakan Betawi",
				description:
					"Jl. RM Kahfi II Kelurahan Srengseng Sawah, Kecamatan Jagakarsa, Jakarta Selatan.",
				"marker-id": "marker-14",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.889900048665794, -6.302129802458459],
			},
			properties: {
				title: "Taman Mini Indonesia Indah",
				description:
					"Jalan Taman Mini Indonesia Indah, Ceger, East Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-15",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.904327572383863, -6.285075034734041],
			},
			properties: {
				title: "Monumen Pancasila Sakti",
				description:
					"Jalan Raya Pondok Gede, Lubang Buaya, East Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-16",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.900023305540145, -6.342260825696705],
			},
			properties: {
				title: "Taman Agro Wisata",
				description:
					"Cilangkap Jakarta, Jalan Raya Cilangkap, RT.6/RW.1, Cilangkap, East Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-17",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.875149337465615, -6.195575371630923],
			},
			properties: {
				title: "Pura Aditya Jaya",
				description:
					"Jalan Daksinapati Raya, RT.11/RW.14, Rawamangun, East Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-18",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.901012959311615, -6.303659615704094],
			},
			properties: {
				title: "Museum Fauna Indonesia Komodo & Taman Reptil",
				description:
					"Jalan Taman Mini Indonesia Indah, Ceger, East Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-19",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.833307404601996, -6.128970240389068],
			},
			properties: {
				title: "Taman Impian Jaya Ancol",
				description:
					"Jalan Lodan Timur, RT.14/RW.10, Ancol, North Jakarta City, Jakarta, Indonesia",
				"marker-id": "marker-20",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.842661161429916, -6.125766343752251],
			},
			properties: {
				title: "Sea World Ancol",
				description:
					"Jl. Lodan timur, RT.14/RW.10, Ancol, North Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-21",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.833537738637773, -6.125312437550797],
			},
			properties: {
				title: "Dunia Fantasi (Dufan) - Ancol",
				description:
					"Jalan Lodan Timur, Ancol, North Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-22",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.736888713965868, -6.106490310110273],
			},
			properties: {
				title: "Taman Wisata Alam Mangrove Angke Kapuk",
				description:
					"Jalan Garden House, Kamal Muara, North Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-23",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.769201555399619, -6.116007457067359],
			},
			properties: {
				title: "Suaka Margasatwa Muara Angke",
				description:
					"RT.1/RW.16, Kapuk Muara, North Jakarta City, Jakarta, Indonesia.",
				"marker-id": "marker-24",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.630418205032854, -5.943894139117344],
			},
			properties: {
				title: "Cagar Alam Pulau Bokor",
				description:
					"pulau bokor, Pari Island, Kepulauan Seribu Regency, Jakarta, Indonesia.",
				"marker-id": "marker-25",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.8191344685294, -6.192391528123125],
			},
			properties: {
				title: "Grand Indonesia Mall",
				description:
					"Jl. Tlk. Betung I No.45A, Kb. Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta.",
				"marker-id": "marker-26",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.79700096685609, -6.227141966101575],
			},
			properties: {
				title: "Senayan City",
				description:
					"Senayan City, Jl. Asia Afrika, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat.",
				"marker-id": "marker-27",
				"marker-color": "#f86767",
			},
		},
	],
});

// Fungsi untuk menggerakkan peta ke marker yang sesuai
function moveMapToMarker(marker) {
	map1.flyTo(marker.getLatLng(), 14);
}

// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("moveToMarker1").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-1") {
			moveMapToMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 2
document.getElementById("moveToMarker2").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-2") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker3").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-3") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker4").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-4") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker5").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-5") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker6").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-6") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker7").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-7") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker8").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-8") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker9").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-9") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker10").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-10") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker11").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-11") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker12").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-12") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker13").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-13") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker14").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-14") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker15").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-15") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker16").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-16") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker17").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-17") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker18").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-18") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker19").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-19") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker20").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-20") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker21").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-21") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker22").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-22") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker23").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-23") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker24").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-24") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker25").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-25") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker26").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-26") {
			moveMapToMarker(layer);
		}
	});
});
document.getElementById("moveToMarker27").addEventListener("click", function () {
	myLayer.eachLayer(function (layer) {
		if (layer.feature.properties["marker-id"] === "marker-27") {
			moveMapToMarker(layer);
		}
	});
});


var map3 = L.map("map3")
	.addLayer(bigMap)
	.setView([-6.19285973836777, 106.81920068563548], 7)
	.addControl(
		L.mapbox.geocoderControl("mapbox.places", {
			keepOpen: false,
		})
	);
L.control.fullscreen().addTo(map3);
L.control
	.layers({
		"Mapbox Streets": L.mapbox
			.styleLayer("mapbox://styles/mapbox/streets-v11")
			.addTo(map3),
		"Mapbox Light": L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10"),
		"Mapbox Outdoors": L.mapbox.styleLayer(
			"mapbox://styles/mapbox/outdoors-v11"
		),
		"Mapbox Satellite": L.mapbox.styleLayer(
			"mapbox://styles/mapbox/satellite-v9"
		),
	})
	.addTo(map3);

var myLayer1 = L.mapbox.featureLayer().addTo(map3);

myLayer1.setGeoJSON({
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.767985792382078, -6.191043434066831],
			},
			properties: {
				title: "Museum Macan",
				description:
					"AKR Tower Level M, Jalan Panjang No. 5 Kebon Jeruk, Jakarta Barat 11530, Indonesia",
				markerID: "marker1",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.789995928493553, -6.175013015755474],
			},
			properties: {
				title: "Jakarta Aquarium",
				description:
					"Jalan Panjang No. 5 Kebon Jeruk, Jakarta Barat 11530, Indonesia",
				markerID: "marker2",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.817181341189169, -6.137694074973638],
			},
			properties: {
				title: "Kota Tua",
				description:
					"Jakarta Jalan Pintu Besar Utara Nomer 27, Rt 07 / Rw 07, Pinangsia, Tamansari, Jakarta Barat, DKI Jakarta.",
				markerID: "marker3",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.764395427944962, -6.210694505928974],
			},
			properties: {
				title: "Hutan Kota Srengseng",
				description:
					"Jalan Haji Kelik, RT.8/RW.6, Srengseng, West Jakarta City, Jakarta, Indonesia",
				markerID: "marker4",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.707824588036871, -6.14190748732827],
			},
			properties: {
				title: "Watersplash citra 2",
				description:
					"Perumahan citragarden city 2, Jalan Kebahagiaan, RT.10/RW.12, Pegadungan, West Jakarta City, Jakarta, Indonesia.",
				markerID: "marker5",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.827160414578742, -6.175506403770339],
			},
			properties: {
				title: "Monumen Nasional",
				description: "Gambir, Central Jakarta City, Jakarta, Indonesia.",
				markerID: "marker6",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.831390019899558, -6.170169994859335],
			},
			properties: {
				title: "Masjid Istiqlal",
				description:
					"Jl. Taman Wijaya Kusuma, Pasar Baru, Central Jakarta City, Jakarta, Indonesia.",
				markerID: "marker7",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.843123546084556, -6.183907730179468],
			},
			properties: {
				title: "Museum Sumpah Pemuda",
				description:
					"Jalan Kramat Raya, RT.2/RW.9, Kwitang, Central Jakarta City, Jakarta, Indonesia.",
				markerID: "marker8",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.838189023952395, -6.190593969870026],
			},
			properties: {
				title: "Taman Ismail Marzuki (TIM)",
				description:
					"Jalan Cikini Raya, Cikini, Central Jakarta City, Jakarta, Indonesia",
				markerID: "marker9",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.820353015649388, -6.305988669343553],
			},
			properties: {
				title: "Ragunan",
				description:
					"Jalan Harsono RM, Ragunan, South Jakarta City, Jakarta, Indonesia.",
				markerID: "marker10",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.809714380925854, -6.225073513771433],
			},
			properties: {
				title: "Kidzania",
				description:
					"Pacific Place Mall, Jl. Jenderal Sudirman, RT.5/RW.3, Senayan, South Jakarta City, Jakarta, Indonesia.",
				markerID: "marker11",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.818943916071561, -6.231828626826892],
			},
			properties: {
				title: "Museum Satriamandala",
				description:
					"Jalan Gatot Subroto, RT.6/RW.1, West Kuningan, South Jakarta City, Jakarta, Indonesia.",
				markerID: "marker12",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.790585018722012, -6.307988419309427],
			},
			properties: {
				title: "Museum Layang-layang Indonesia",
				description:
					"Jalan Haji Kamang, RT.8/RW.10, Pondok Labu, South Jakarta City, Jakarta, Indonesia.",
				markerID: "marker13",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.823866562911419, -6.341802441706341],
			},
			properties: {
				title: "Setu Babakan Betawi",
				description:
					"Jl. RM Kahfi II Kelurahan Srengseng Sawah, Kecamatan Jagakarsa, Jakarta Selatan.",
				markerID: "marker14",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.889900048665794, -6.302129802458459],
			},
			properties: {
				title: "Taman Mini Indonesia Indah",
				description:
					"Jalan Taman Mini Indonesia Indah, Ceger, East Jakarta City, Jakarta, Indonesia.",
				markerID: "marker15",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.904327572383863, -6.285075034734041],
			},
			properties: {
				title: "Monumen Pancasila Sakti",
				description:
					"Jalan Raya Pondok Gede, Lubang Buaya, East Jakarta City, Jakarta, Indonesia.",
				markerID: "marker16",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.900023305540145, -6.342260825696705],
			},
			properties: {
				title: "Taman Agro Wisata",
				description:
					"Cilangkap Jakarta, Jalan Raya Cilangkap, RT.6/RW.1, Cilangkap, East Jakarta City, Jakarta, Indonesia.",
				markerID: "marker17",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.875149337465615, -6.195575371630923],
			},
			properties: {
				title: "Pura Aditya Jaya",
				description:
					"Jalan Daksinapati Raya, RT.11/RW.14, Rawamangun, East Jakarta City, Jakarta, Indonesia.",
				markerID: "marker18",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.901012959311615, -6.303659615704094],
			},
			properties: {
				title: "Museum Fauna Indonesia Komodo & Taman Reptil",
				description:
					"Jalan Taman Mini Indonesia Indah, Ceger, East Jakarta City, Jakarta, Indonesia.",
				markerID: "marker19",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.833307404601996, -6.128970240389068],
			},
			properties: {
				title: "Taman Impian Jaya Ancol",
				description:
					"Jalan Lodan Timur, RT.14/RW.10, Ancol, North Jakarta City, Jakarta, Indonesia",
				markerID: "marker20",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.842661161429916, -6.125766343752251],
			},
			properties: {
				title: "Sea World Ancol",
				description:
					"Jl. Lodan timur, RT.14/RW.10, Ancol, North Jakarta City, Jakarta, Indonesia.",
				markerID: "marker21",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.833537738637773, -6.125312437550797],
			},
			properties: {
				title: "Dunia Fantasi (Dufan)",
				description:
					"Jalan Lodan Timur, Ancol, North Jakarta City, Jakarta, Indonesia.",
				markerID: "marker22",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.736888713965868, -6.106490310110273],
			},
			properties: {
				title: "Taman Mangrove Jakarta",
				description:
					"Jalan Garden House, Kamal Muara, North Jakarta City, Jakarta, Indonesia.",
				markerID: "marker23",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.769201555399619, -6.116007457067359],
			},
			properties: {
				title: "Suaka Margasatwa Muara Angke",
				description:
					"RT.1/RW.16, Kapuk Muara, North Jakarta City, Jakarta, Indonesia.",
				markerID: "marker24",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.630418205032854, -5.943894139117344],
			},
			properties: {
				title: "Cagar Alam Pulau Bokor",
				description:
					"pulau bokor, Pari Island, Kepulauan Seribu Regency, Jakarta, Indonesia.",
				markerID: "marker25",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.8191344685294, -6.192391528123125],
			},
			properties: {
				title: "Grand Indonesia Mall",
				description:
					"Jl. Tlk. Betung I No.45A, Kb. Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta.",
				markerID: "marker26",
				"marker-color": "#f86767",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [106.79700096685609, -6.227141966101575],
			},
			properties: {
				title: "Senayan City",
				description:
					"Senayan City, Jl. Asia Afrika, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat.",
				markerID: "marker27",
				"marker-color": "#f86767",
			},
		},
	],
});

// Fungsi untuk menggerakkan peta ke marker yang sesuai
function moveMapMarker(marker) {
	map3.flyTo(marker.getLatLng(), 14);
}

// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker1").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker1") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker2").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker2") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker3").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker3") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker4").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker4") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker5").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker5") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker6").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker6") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker7").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker7") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker8").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker8") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker9").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker9") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker10").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker10") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker11").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker11") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker12").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker12") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker13").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker13") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker14").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker14") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker15").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker15") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker16").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker16") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker17").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker17") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker18").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker18") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker19").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker19") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker20").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker20") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker21").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker21") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker22").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker22") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker23").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker23") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker24").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker24") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker25").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker25") {
			moveMapMarker(layer);
		}
	});
});
// Fungsi untuk menggerakkan peta ke marker 1
document.getElementById("move-marker26").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker26") {
			moveMapMarker(layer);
		}
	});
});
document.getElementById("move-marker27").addEventListener("click", function () {
	myLayer1.eachLayer(function (layer) {
		if (layer.feature.properties["markerID"] === "marker27") {
			moveMapMarker(layer);
		}
	});
});

