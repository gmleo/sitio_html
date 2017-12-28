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
	const ulList = document.getElementById('lista');

	// Crear referencias
	const dbRefObject = firebase.database().ref().child('objecto');
	const dbRefList = dbRefObject.child('habilidades');

	// Sincronizar cambios objecto
	dbRefObject.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});

	// Sincronizar cambios lista
	dbRefList.on('child_added', snap => {
		const li = document.createElement('li');
		li.innerText = snap.val();
		li.id = snap.key;
		ulList.appendChild(li);
	});

	dbRefList.on('child_changed', snap => {
		const liChanged = document.getElementById('snap.key');
		liChanged.innerText = snap.val();
	});

	dbRefList.on('child_removed', snap => {
		const liRemoved = document.getElementById('snap.key');
		liRemoved.remove();
	});

})();