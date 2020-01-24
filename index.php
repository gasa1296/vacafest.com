
<?php 
$hoy = date('d/m/Y');
$hoy = date('d/m/Y', strtotime($hoy));
$fin_postulaciones = date('d/m/Y', strtotime('2/9/2019'));
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>VacaFest</title>
	<link rel="icon" href="img/sticker1.png">
	<link rel="stylesheet" href="vendors/bootstrap.css">
	<link rel="stylesheet" href="vendors/animate.css">
	<link rel="stylesheet" href="vendors/fontawesome-5.8.2/css/all.css">
	<link rel="stylesheet" href="vendors/style.css">
	<link rel="stylesheet" href="vendors/animations.css">

	<script src="vendors/jquery-3.4.1.js"></script>
	<script src="vendors/popper.js"></script>
	<script src="vendors/fontawesome-5.8.2/js/all.js"></script>
	<script src="vendors/bootstrap.js"></script>
	<script src="vendors/main.js"></script>
</head>

<body>
	<div class="container-fluid">
		<div class="row justify-content-center">
			<img id="circulo_amarillo" src="Circulo1.png" alt="">
			<img id="quinta_edicion" src="img/5ta_edicion.png" alt="VacaFest">
			<img id="viva_la_vaca" src="img/Viva_la_vaca-1.png" alt="">
			<img id="logo" src="img/logo.png" alt="">

			<div class="col-0 vh-100"></div>
			
			<!--circulo-->
			<div id="presentacion" class="col-10">
				<div class="row align-items-center h-100">
					<div class="col">
						<div class="row justify-content-center">
							<div class="col-lg-7 col-md-7 col-sm-7 col-xs-10 embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/X1LgaiOlDgg" frameborder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
						<div class="row justify-content-center">
							<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
								<img id="fecha-pag-1" class="img-fluid" src="img/fecha pag 1.png" alt="25 de Octubre">
							</div>
						</div>
						<div class="row justify-content-center">
							<div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
								<a href="#form" id="postulate" class="btn btn-danger rounded-pill" onclick="boton_2 ();"><strong>POSTÚLATE</strong></a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!--Formulario-->
			<div id="form" class="col-11">
				<div class="row align-items-center h-100">
					<div class="col">
						<?php if($hoy < $fin_postulaciones){ ?>
							<div class="row justify-content-end">
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<input type="text" name="nombre" id="nombre" class="form-control" onfocus="shake(this)" value="" placeholder="Nombre de la banda o artista">
								</div>
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<input type="text" name="link" id="link" class="form-control" onfocus="shake(this)" value="" placeholder="Link de Youtube">
								</div>
							</div>
							<div class="row justify-content-end">
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<input type="text" name="ubicacion" id="ubicacion" class="form-control" onfocus="shake(this)" value="" placeholder="UbicaciÓn (estado o cuidad)">
								</div>
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<input type="text" name="redesSociales" id="redesSociales" class="form-control" onfocus="shake(this)" value="" placeholder="Redes Sociales">
								</div>
							</div>
							<div class="row justify-content-end">
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<input type="tel" name="telefono" id="telefono" class="form-control" onfocus="shake(this)" value="" placeholder="TelÉfono Celular">
								</div>
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<input type="number" name="duracion" id="duracion" class="form-control" onfocus="shake(this)" value="" placeholder="DuraciÓn del show (minutos)">
								</div>
							</div>
							<div class="row justify-content-end">
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<input type="email" name="correo" id="correo" class="form-control" onfocus="shake(this)" value="" placeholder="Correo electrónico">
								</div>
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<input type="number" name="costo" id="costo" class="form-control" onfocus="shake(this)" value="" placeholder="Costo del show ($)">
								</div>
							</div>
							<div class="row justify-content-end">
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<div class="row">
										<div class="col-7">
											<label><strong>Foto de Banda</strong></label>
										</div>
										<div class="col-5">
											<label class="btn btn-warning btn-block rounded-pill" for="imagen"><strong>Seleccionar</strong></label>
											<input type="file" name="imagen" id="imagen" onchange="nuevoArchivo()">
										</div>
									</div>
									<div class="row">
										<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12" id="archivo">
											
										</div>
									</div>
								</div>
								<div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 form-group">
									<label><small><strong>Integrantes</strong></small></label>
									<div class="container">
										<div class="row border rounded border-dark" id="contenedorIntegrantes">
											<div class="col" id="integrante-0">
												<div class="row">
													<div class="col-12">
														<input type="text" name="nuevoIntegranteNombre" id="nuevoIntegranteNombre" class="form-control" onfocus="shake(this)"
															value="" onchange="editarCampo(this)" placeholder="Nombre y apellido">
													</div>
												</div>
												<div class="row">
													<div class="col-12">
														<input type="tel" name="nuevoIntegranteTelefono" id="nuevoIntegranteTelefono"
															class="form-control" onfocus="shake(this)" value="" onchange="editarCampo(this)" placeholder="TelÉfono Celular">
													</div>
												</div>
												<div class="row">
													<div class="col-12">
														<input type="email" name="nuevoIntegranteCorreo" id="nuevoIntegranteCorreo" class="form-control" onfocus="shake(this)"
															value="" onchange="editarCampo(this)" placeholder="Correo electrónico">
													</div>
												</div>
												<div class="row">
													<div class="col-12 form-group">
														<input type="text" name="nuevoIntegranteRol" id="nuevoIntegranteRol"
															class="form-control" onfocus="shake(this)" value="" onchange="editarCampo(this)" placeholder="Rol del Integrante">
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row justify-content-end">
										<div class="col-8">
											<div class="row" id="menuIntegrantes">
												<div class="col-2">
													<a id="integrante-0" onclick="verIntegrante(this);">
														<img src="img/punto_menu.png"
															class="img-fluid">
													</a>
												</div>
											</div>
										</div>
										<div class="col-4">
											<a id="agregarIntegrante" class="btn btn-link btn-sm" onclick="nuevoIntegrante()"><strong>Agregar Integrante</strong></a>
										</div>
									</div>
								</div>
							</div>
							<div class="row justify-content-start">
								<div class="col-lg-5 offset-lg-2">
									<div class="row justify-content-end">
										<div class="col-lg-4 col-sx-12">
											<button id="enviar" class="btn btn-warning btn-block rounded-pill" onclick="ajax()"><strong>ENVIAR</strong></button>
										</div>
									</div>
								</div>
							</div>
						<?php }else{ ?>
							<div class="row justify-content-center">
								<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<img src="img/adquiere entradas-02.png" alt="" class="img-fluid">
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-lg-2 col-md-2 col-sm-2 col-xs-10"><img src="img/masterticket-02.png" alt="" class="img-fluid">
								</div>
								<div class="col-lg-2 col-md-2 col-sm-2 col-xs-10">
									<div class="row h-100">
										<div class="col align-self-center">
											<a href="https://masterticket.com.ve/evento.php?id=323" class="btn btn-danger rounded-pill btn-block">Comprar</a>
										</div>
									</div>
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-lg-3 col-md-3 col-sm-3 col-xs-10">
									<img src="img/puntos de venta-02.png" alt="" class="img-fluid">
								</div>
							</div>
							<div class="row justify-content-center">
								<div class="col-8 border border-danger rounded rounded-lg">
									<div class="row justify-content-center">
										<div class="col-lg-3 col-md-3 col-sm-3 col-xs-10"><img src="img/hesperialogo-02.png" alt="" class="img-fluid"></div>
										<div class="col-lg-3 col-md-3 col-sm-3 col-xs-10"><img src="img/hesperiadirec-02.png" alt="" class="img-fluid"></div>
										<div class="col-lg-3 col-md-3 col-sm-3 col-xs-10"><img src="img/tattoologo-02.png" alt="" class="img-fluid"></div>
										<div class="col-lg-3 col-md-3 col-sm-3 col-xs-10"><img src="img/tattoodirec-02.png" alt="" class="img-fluid"></div>
									</div>
								</div>
							</div>
						<?php } ?>	
					</div>
				</div>
			</div>

			<!--Redes Sociales-->
			<div id="rrss" class="col-12">
				<div class="row justify-content-center align-items-center h-100">
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<div class="row justify-content-center">
							<div class="col-lg-8"><img id="fecha-pag-3" class="img-fluid" src="img/Lugar pag 3.png" alt=""></div>
						</div>
						<br>
						<br>
						<br>
						<br>
						<div class="row justify-content-center">
							<div class="col-4 justify-content-center"><a class="btn btn-link btn-block text-center" href="https://www.instagram.com/vacafest/"><i class="fab fa-instagram fa-3x"></i><p>Instagram</p></a></div>
							<div class="col-4 justify-content-center"><a class="btn btn-link btn-block text-center" href="mailto:vacafest@gmail.com"><i class="far fa-envelope fa-3x"></i><p>Correo</p></a></div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<img id="vaca-fez" class="img-fluid" src="img/Vaca Fez.png" alt="Vaca Fez">
					</div>
				</div>
			</div>

			<div id="footer" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 fixed-bottom">
				<div class="row justify-content-end">
					<div class="col-lg-2">
						<div class="row justify-content-center">
							<div class="col-3">
								<a href="#presentacion" onclick="boton_1 ();"><img src="img/punto_menu.png" class="img-fluid"></a>
							</div>
							<div class="col-3">
								<a href="#form" onclick="boton_2 ()"><img src="img/punto_menu.png" class="img-fluid"></a>
							</div>
							<div class="col-3">
								<a href="#rrss" onclick="boton_3 ();"><img src="img/punto_menu.png" class="img-fluid"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>            
	</div>
	<div class="modal" id="modal-cont" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-sm" role="document">
			<div class="modal-content">
				<div class="modal-body" id="modal">
					
				</div>
			</div>
		</div>
	</div>
</body>
</html>