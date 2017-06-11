<?php
	define("HOSTNAME", "mysql.braspesca.com.br");
	define("USERNAME", "braspesca01");
	define("PASSWORD", "xx123456");
	define("DATABASE", "braspesca01");

	$dbhandle= new mysqli(HOSTNAME, USERNAME, PASSWORD, DATABASE) or die("Falha de conexão");
?>