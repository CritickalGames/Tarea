<?php 
class Resultado
{    
      function getAll(){
            $SQL = new Sql();
            $conexion = new Conexion();
            $mysqli = $conexion->conectarBD("pweb");
            $sql = "SELECT * FROM estudiante";
            
            $arry = array();
            $SQL->guardarTupla($mysqli, $sql, $arry);
      }
}
?>