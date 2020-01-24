$(document).ready(function () {

	cargaCompleta();

})
let integrantes = [];
let nroIntegrante = -1;
let respaldoUltimoIntegrante = []

function cargaCompleta() {

	$("#quinta_edicion").css("display", "block");
	$("#logo").css("display", "block");
	$("#footer").css("display", "none");
	$("#viva_la_vaca").css("display", "none");

	setTimeout(() => {
		$("#presentacion").css("display", "block");
		$("#circulo_amarillo").css("display", "block");
		$("#video-presentacion").css("display", "block");
		$("#fecha-pag-1").css("display", "block");
		$("#postulate").css("display", "block");

		if (window.innerWidth > window.innerHeight) {
			$("#viva_la_vaca").css("display", "block");
			$("#quinta_edicion").addClass("animated slideBorder");
			$("#logo").addClass("animated slideBorderTop");
			$("#viva_la_vaca").addClass("animated fadeInLeft");
			$("#footer").css("display", "block");
		}
		else {

			$("#quinta_edicion").addClass("animated slideOutLeft");
			$("#logo").addClass("animated slideOutLeft");

			setTimeout(() => {

				$("#quinta_edicion").css("display", "none");
				$("#logo").css("display", "none");
				$("#presentacion").css("display", "block");
				$("#form").css("display", "block");
				$("#rrss").css("display", "block");
			}, 1000);
		}

		$("#presentacion").addClass("animated slideInUp");
		$("#fecha-pag-1").addClass("animated fadeInUp");
		$("#postulate").addClass("animated fadeInUp");
		$("#circulo_amarillo").addClass("animated zoomIn");
		$("#footer").addClass("slideInUp");
	}, 3000);
}

function boton_1() {
	if (window.innerWidth > window.innerHeight) {
		if ($("#form").css("display") == "block") {
			$("#presentacion").removeClass();
			$("#form").removeClass();
			$("#viva_la_vaca").removeClass();
			$("#circulo_amarillo").removeClass();
			$("#quinta_edicion").removeClass();

			$("#form").addClass("col-lg-11 animated slideOutRight");
			$("#presentacion").addClass("col-10 animated slideInLeft");
			$("#viva_la_vaca").addClass("animated slideInLeft");
			$("#circulo_amarillo").addClass("animated slideLeftBorderToCenter");
			$("#quinta_edicion").addClass("animated slideInLeft");

			$("#quinta_edicion").css("display", "block");
		}
		else if ($("#rrss").css("display") == "block") {
			$("#quinta_edicion").css("right", "78vw");
			$("#quinta_edicion").css("top", "40vh");
			$("#quinta_edicion").css("height", "19.2vh");
			$("#quinta_edicion").css("width", "19.2vw");

			$("#presentacion").removeClass();
			$("#rrss").removeClass();
			$("#viva_la_vaca").removeClass();
			$("#circulo_amarillo").removeClass();
			$("#quinta_edicion").removeClass();

			$("#rrss").addClass("col-lg-12 animated slideOutLeft");
			$("#presentacion").addClass("col-10 animated slideInRight");
			$("#viva_la_vaca").addClass("animated slideInRight");
			$("#circulo_amarillo").addClass("animated slideRightBorderToCenter");
			$("#quinta_edicion").addClass("animated slideInRight");

			$("#quinta_edicion").css("display", "block");
			$("#viva_la_vaca").css("display", "block");
		}
		setTimeout(() => {
			$("#form").css("display", "none");
			$("#rrss").css("display", "none");
			$("#presentacion").css("display", "block");
		}, 500);
	}
}

function boton_2() {
	if (window.innerWidth > window.innerHeight) {
		if ($("#presentacion").css("display") == "block") {
			$("#quinta_edicion").css("right", "78vw");
			$("#quinta_edicion").css("top", "40vh");
			$("#quinta_edicion").css("height", "19.2vh");
			$("#quinta_edicion").css("width", "19.2vw");

			$("#presentacion").removeClass();
			$("#form").removeClass();
			$("#circulo_amarillo").removeClass();
			$("#viva_la_vaca").removeClass();
			$("#quinta_edicion").removeClass();

			$("#presentacion").addClass("col-10 animated slideOutLeft");
			$("#form").addClass("col-lg-11 animated slideInRight");
			$("#circulo_amarillo").addClass("animated slideBorderLeft");
			$("#viva_la_vaca").addClass("animated slideRightToLeft");
			$("#quinta_edicion").addClass("animated slideBorder");

			$("#presentacion").css("display", "none");
			$("#quinta_edicion").css("display", "none");
		}
		else if ($("#rrss").css("display") == "block") {
			$("#rrss").removeClass();
			$("#form").removeClass();
			$("#viva_la_vaca").removeClass();
			$("#circulo_amarillo").removeClass();

			$("#rrss").addClass("col-lg-12 animated slideOutRight");
			$("#form").addClass("col-lg-11 animated slideInLeft");
			$("#viva_la_vaca").addClass("animated slideLeftBorderIn");
			$("#circulo_amarillo").addClass("animated slideRightBorderOut faster");
			setTimeout(() => {
				$("#circulo_amarillo").removeClass();
				$("#circulo_amarillo").addClass("animated slideLeftIn faster");
			}, 500);

			$("#rrss").css("display", "none");
			$("#form").css("display", "block");
			$("#viva_la_vaca").css("display", "block");
		}
		setTimeout(() => {
			$("#form").css("display", "block");
			$("#rrss").css("display", "none");
			$("#presentacion").css("display", "none");
		}, 500);
	}
}

function boton_3() {
	if (window.innerWidth > window.innerHeight) {
		if ($("#form").css("display") == "block") {
			$("#rrss").removeClass();
			$("#form").removeClass();
			$("#viva_la_vaca").removeClass();
			$("#circulo_amarillo").removeClass();

			$("#form").addClass("col-lg-11 animated slideOutLeft");
			$("#rrss").addClass("col-lg-12 animated slideInRight");
			$("#viva_la_vaca").addClass("animated slideLeftOut");
			$("#circulo_amarillo").addClass("animated slideLeftBorderOut faster");
			setTimeout(() => {
				$("#circulo_amarillo").removeClass();
				$("#circulo_amarillo").addClass("animated slideRightIn faster");
			}, 500);

			$("#viva_la_vaca").css("display", "none");
		}
		else if ($("#presentacion").css("display") == "block") {
			$("#presentacion").removeClass();
			$("#rrss").removeClass();
			$("#viva_la_vaca").removeClass();
			$("#circulo_amarillo").removeClass();
			$("#quinta_edicion").removeClass();

			$("#presentacion").addClass("col-10 animated slideOutRight");
			$("#quinta_edicion").addClass("animated slideOutRight");
			$("#viva_la_vaca").addClass("animated slideOutLeft");
			$("#rrss").addClass("col-lg-12 animated slideInLeft");
			$("#circulo_amarillo").addClass("animated slideBorderRight");

			$("#quinta_edicion").css("display", "none");
			$("#viva_la_vaca").css("display", "none");
		}
		setTimeout(() => {
			$("#form").css("display", "none");
			$("#rrss").css("display", "block");
			$("#presentacion").css("display", "none");
		}, 500);
	}
}

function nuevoIntegrante() {
	if (integrantes.length >= 15) {
		document.getElementById("modal").innerHTML = '<div class="row"><div class="col"><div class="alert alert-danger" role="alert">Demasiados Integrantes</div></div></div>';
		$('#modal-cont').modal('show');
	}
	else {
		nombre = document.getElementById("nuevoIntegranteNombre");
		telefono = document.getElementById("nuevoIntegranteTelefono");
		correo = document.getElementById("nuevoIntegranteCorreo");
		rol = document.getElementById("nuevoIntegranteRol");

		if (nombre.value && telefono.value && correo.value && rol.value) {
			$("#contenedorIntegrantes").removeClass();
			$("#contenedorIntegrantes").addClass("row border rounded border-dark animated fadeOutLeft fast");

			integrantes.push([nombre.value, telefono.value, correo.value, rol.value]);
			setTimeout(() =>{

				nombre.value = "";
				telefono.value = "";
				correo.value = "";
				rol.value = "";

				$("#contenedorIntegrantes").removeClass();
				$("#contenedorIntegrantes").addClass("row border rounded border-dark animated fadeInRight fast");

			}, 800);

			document.getElementById("menuIntegrantes").innerHTML += '<div class="col-2"><a id="integrante-' + integrantes.length + '" onclick="verIntegrante(this);"><img src="img/punto_menu.png" class="img-fluid"></a></div>';
			nroIntegrante = integrantes.length;
		}
		else{
			document.getElementById("modal").innerHTML = '<div class="row"><div class="col"><div class="alert alert-danger" role="alert">No puedes dejar campos vacios</div></div></div>';
			$('#modal-cont').modal('show');
		}
	}
}

function verIntegrante(btn) {
	anteriorNroIntegrante = nroIntegrante;
	nroIntegrante = btn.getAttribute("id").split("-")[1];
	if(anteriorNroIntegrante > nroIntegrante){
		$("#contenedorIntegrantes").removeClass();
		$("#contenedorIntegrantes").addClass("row border rounded border-dark animated slideOutRight fast");

		setTimeout(() =>{
			$("#contenedorIntegrantes").removeClass();
			$("#contenedorIntegrantes").addClass("row border rounded border-dark animated slideInLeft fast");
		}, 800);
	}
	else{
		$("#contenedorIntegrantes").removeClass();
		$("#contenedorIntegrantes").addClass("row border rounded border-dark animated slideOutLeft fast");

		setTimeout(() =>{
			$("#contenedorIntegrantes").removeClass();
			$("#contenedorIntegrantes").addClass("row border rounded border-dark animated slideInRight fast");
		}, 800);
	}
	if (nroIntegrante <= integrantes.length - 1) {
		if(anteriorNroIntegrante == integrantes.length){
			respaldoUltimoIntegrante = [document.getElementById("nuevoIntegranteNombre").value, document.getElementById("nuevoIntegranteTelefono").value, document.getElementById("nuevoIntegranteCorreo").value, document.getElementById("nuevoIntegranteRol").value]
		}
		document.getElementById("nuevoIntegranteNombre").value = integrantes[nroIntegrante][0];
		document.getElementById("nuevoIntegranteTelefono").value = integrantes[nroIntegrante][1];
		document.getElementById("nuevoIntegranteCorreo").value = integrantes[nroIntegrante][2];
		document.getElementById("nuevoIntegranteRol").value = integrantes[nroIntegrante][3];
	}
	else {
		if (respaldoUltimoIntegrante[0] && respaldoUltimoIntegrante[1] && respaldoUltimoIntegrante[2] && respaldoUltimoIntegrante[3]){
			document.getElementById("nuevoIntegranteNombre").value = respaldoUltimoIntegrante[0];
			document.getElementById("nuevoIntegranteTelefono").value = respaldoUltimoIntegrante[1];
			document.getElementById("nuevoIntegranteCorreo").value = respaldoUltimoIntegrante[2];
			document.getElementById("nuevoIntegranteRol").value = respaldoUltimoIntegrante[3];
		}
		else{
			document.getElementById("nuevoIntegranteNombre").value = "";
			document.getElementById("nuevoIntegranteTelefono").value = "";
			document.getElementById("nuevoIntegranteCorreo").value = "";
			document.getElementById("nuevoIntegranteRol").value = "";
		}
	}
}

function ajax (){
	nombre = document.getElementById("nombre").value;
	link = document.getElementById("link").value;
	ubicacion = document.getElementById("ubicacion").value;
	redesSociales = document.getElementById("redesSociales").value;
	telefono = document.getElementById("telefono").value;
	duracion = document.getElementById("duracion").value;
	correo = document.getElementById("correo").value;
	costo = document.getElementById("costo").value;
	img = $('input[name=imagen]')[0].files[0];
	integrantesTxt = "";

	IntegranteNombre = document.getElementById("nuevoIntegranteNombre").value;
	IntegranteTelefono = document.getElementById("nuevoIntegranteTelefono").value;
	IntegranteCorreo = document.getElementById("nuevoIntegranteCorreo").value;
	IntegranteRol = document.getElementById("nuevoIntegranteRol").value;

	if(integrantes.length < 1){

		if (IntegranteNombre && IntegranteTelefono && IntegranteCorreo && IntegranteRol){
			integrantes.push([IntegranteNombre, IntegranteTelefono, IntegranteCorreo, IntegranteRol]);
			
			integrantesTxt += 'Integrante:<br>';
			integrantesTxt += integrantes[i][0] + ", " + integrantes[i][1] + ", " + integrantes[i][2] + ", " + integrantes[i][3] +"<br>";
		}
		else{
			document.getElementById("modal").innerHTML = '<div class="row"><div class="col"><div class="alert alert-danger" role="alert">No puedes dejar campos vacios</div></div></div>';
			$('#modal-cont').modal('show');
		}
	}
	else{
		if(nroIntegrante == integrantes.length){
			if (IntegranteNombre && IntegranteTelefono && IntegranteCorreo && IntegranteRol && (nroIntegrante == integrantes.length)){
				integrantes.push([IntegranteNombre, IntegranteTelefono, IntegranteCorreo, IntegranteRol]);
			}
		}
		else{
			if (respaldoUltimoIntegrante[0] && respaldoUltimoIntegrante[1] && respaldoUltimoIntegrante[2] && respaldoUltimoIntegrante[3]){
				integrantes.push(respaldoUltimoIntegrante);
			}
		}
		for (let i = 0; i < integrantes.length; i++) {
			integrantesTxt += 'Integrante:<br>';
			integrantesTxt += integrantes[i][0] + ", " + integrantes[i][1] + ", " + integrantes[i][2] + ", " + integrantes[i][3] +"<br>";
		}
	}

	if (costo && link && ubicacion && redesSociales && telefono && duracion && correo && costo && img && integrantes.length > 0) {
		let frmData = new FormData();
		frmData.append('nombre', nombre);
		frmData.append('link', link);
		frmData.append('ubicacion', ubicacion);
		frmData.append('redesSociales', redesSociales);
		frmData.append('telefono', telefono);
		frmData.append('duracion', duracion);
		frmData.append('correo', correo);
		frmData.append('costo', costo);
		frmData.append('img', img);
		frmData.append('nroIntegrantes', integrantes.length);
		frmData.append('integrantes', integrantesTxt);

		document.getElementById("modal").innerHTML = '<div class="row"><div class="col"><div class="alert alert-warning" role="alert">Procesando su postulación</div></div></div>';
		$('#modal-cont').modal('show');
		document.getElementById("enviar").disabled = true;

		let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
				mensaje = "Nombre: " + nombre + "<br>";
				mensaje += "Link: " + link + "<br>";
				mensaje += "Ubicación: " + ubicacion + "<br>";
				mensaje += "Redes sociales: " + redesSociales + "<br>";
				mensaje += "Teléfono: " + telefono + "<br>";
				mensaje += "Duración: " + duracion + "<br>";
				mensaje += "Correo: " + correo + "<br>";
				mensaje += "Costo del show: " + costo + "<br>";
				mensaje += "Integrantes:<br>";

				for (let i = 0; i < integrantes.length; i++) {
					mensaje += integrantes[i][0] + ", " + integrantes[i][1] + ", " + integrantes[i][2] + ", " + integrantes[i][3] +"<br>";
				}
            	document.getElementById("modal").innerHTML = '<div class="row"><div class="col"><div class="alert alert-success" role="alert">'+ this.responseText +'</div></div></div><div class="row"><div class="col"><p>'+ mensaje +'</p></div></div>';
            	$('#modal-cont').modal('show');
                document.getElementById("enviar").disabled = false;

				document.getElementById("nombre").value = "";
				document.getElementById("link").value = "";
				document.getElementById("ubicacion").value = "";
				document.getElementById("redesSociales").value = "";
				document.getElementById("telefono").value = "";
				document.getElementById("duracion").value = "";
				document.getElementById("correo").value = "";
				document.getElementById("costo").value = "";

				document.getElementById("nuevoIntegranteNombre").value = "";
				document.getElementById("nuevoIntegranteTelefono").value = "";
				document.getElementById("nuevoIntegranteCorreo").value = "";
				document.getElementById("nuevoIntegranteRol").value = "";

				integrantes = [];
				document.getElementById("archivo").innerHTML = "";
            }
        };
        xmlhttp.open('POST', 'mail.php', true);
		xmlhttp.send(frmData);
	}
	else{
		document.getElementById("modal").innerHTML = '<div class="row"><div class="col"><div class="alert alert-danger" role="alert">No puedes dejar campos vacios</div></div></div>';
		$('#modal-cont').modal('show');
	}
}

function nuevoArchivo(){
	filename = $('input[type=file]').val().split('\\').pop();
	document.getElementById("archivo").innerHTML = filename;
}

function editarCampo (campo){
	let campoId;
	if(campo.getAttribute("id") == "nuevoIntegranteNombre"){
		campoId = 0;
	}
	else if (campo.getAttribute("id") == "nuevoIntegranteTelefono"){
		campoId = 1;
	}
	else if (campo.getAttribute("id") == "nuevoIntegranteCorreo"){
		campoId = 2;
	}
	else{
		campoId = 3;
	}
	if(integrantes.length > 0){
		if(nroIntegrante == integrantes.length){
			respaldoUltimoIntegrante[campoId] = campo.value;
		}
		else{
			integrantes[nroIntegrante][campoId] = campo.value;
		}
	}
}

function shake (form){
	form.removeAttribute("class");
	form.setAttribute("class", "form-control animated pulse faster");
}