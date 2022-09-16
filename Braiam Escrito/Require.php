<?php
    include("API/Sql.php");

    include("API/Conexion.php");
    include("API/Resultado.php");

    $api = new Resultado();
    $api->getALL();

?>