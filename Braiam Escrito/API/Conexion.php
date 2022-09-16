<?php
class Conexion
{
    public function __construct(){
        $this->conectarMYSQLI();
    }

    private function conectarMYSQLI(){
        try{
            
            $servername = "localhost";
            $username = "root";
            $password = "";
            
            // Create connection
            $mysqli = new mysqli($servername, $username, $password);
            
            // Check connection
            if ($mysqli->connect_error) {
              die("Connection failed: " . $mysqli->connect_error);
            }

            return $mysqli;

        }catch(Exception $e){
            print_r('Error connection: ' . $e->getMessage());
        }   

    }

    public function conectarBD($BD){
        $servername = "localhost";
        $username = "root";
        $password = "";
        
        // Create connection
        $mysqli = new mysqli($servername, $username, $password, $BD);
        
        // Check connection
        if ($mysqli->connect_error) {
            die("Connection failed: " . $mysqli->connect_error);
        }
        return $mysqli;
    }

}
?>