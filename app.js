(function(){

	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyDjKIrTBmYc34BgiytkDZyE7DZtwmKr9_8",
		authDomain: "prueba-65dbf.firebaseapp.com",
		databaseURL: "https://prueba-65dbf.firebaseio.com",
		projectId: "prueba-65dbf",
		storageBucket: "prueba-65dbf.appspot.com",
		messagingSenderId: "41595072044"
	};
	firebase.initializeApp(config);

	// Obtener elementos
	const preObject = document.getElementById('objecto');

	// Crear referencias
	const dbRefObject = firebase.database().ref().child('objecto');

	// Sincronizar cambios objecto
	dbRefObject.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});

})();