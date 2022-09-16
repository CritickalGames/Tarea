<?php


$CI = $_POST['ci'];
$Nombre = $_POST['nombre'];
$Apellido = $_POST['apellido'];
$Grupo = $_POST['grupo'];
$Nota = $_POST['nota'];
$Juicio="";
if($Nota < 4){
    $Juicio="Febrero";
}
if($Nota > 3 && $Nota < 8){
    $Juicio="Diciembre";
}
if($Nota > 7 && $Nota < 13){
    $Juicio="Exonera";
}

  $message = '';
    if (!empty($CI) && !empty($Nombre) && !empty($Apellido) && !empty($Grupo) && !empty($Nota) && !empty($Juicio)) {
        $sql = "INSERT INTO estudiante (ci, nombre, apellido, grupo, nota, juicio) VALUES ('$CI', '$Nombre', '$Apellido', '$Grupo', '$Nota', '$Juicio')";
        $stmt = $conexion->query($sql);
        header("Location: ./../index.php");
        
    }       
?>