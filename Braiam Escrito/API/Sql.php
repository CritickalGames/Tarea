<?php

class Sql
{
    function consulta(mysqli $mysqli,$sql){
        try{
            $result = $mysqli->query($sql);
            return $result;
        }catch(Exception $e){
            print_r('<br>Error connection: ' . $e->getMessage().'<br>');
        }
    }
    function guardarTupla(mysqli $mysqli, string $sql, array $arry){
        $result = $this->consulta($mysqli,$sql);
        
        if(mysqli_num_rows($result)>0){
                while ($row = $result->fetch_assoc()){
    
                    $item=array(
                        "nombre" => $row['nombre'],
                        "ci" => $row['ci'],
                        "apellido" => $row['apellido'],
                        "grupo" => $row['grupo'],
                        "nota" => $row['nota'],
                        "juicio" => $row['juicio'],

                );

                array_push($arry, $item);
            }
        
            $this->guardarJSON($arry);

            }else{
           // $this->error('No hay elementos');
        }
    }
    function guardarJSON($array){
        $json= json_encode($array);
        $bytes = file_put_contents("JSON/myfile.json", $json); 
    }
}

?>