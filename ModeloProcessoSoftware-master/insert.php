<?php
	require_once("conexaodb.php");
	
	$nome= $_POST['nome'];
	$sigla= $_POST['sigla'];
	$descricao= $_POST['descricao'];

	$querry= "INSERT INTO modelo (nome, sigla, descricao) VALUE('.$nome.','.$sigla.','.$descricao.')";
	$dbhandle->query($querry);

?>