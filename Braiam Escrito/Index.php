<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<?php require("Require.php"); ?>
    
    <title>Document</title>
</head>
<body onload="mostrar()">
    <div>
        <label for="">Ci</label>
            <input type="text" id="ci">
        <label for="">Nombre</label>
            <input type="text" id="nombre">
    
        <label for="">Apellido</label>
            <input type="text" id="apellido">

        <br>
        <label for="">Grupo</label>
            <input type="text" id="grupo">
    
        <label for="">Nota</label>
            <input type="text" id="nota">

    
        <br>
        <input type="button" value="agregar" onclick="agregar()">
    </div>

    <select name="" id="select"></select><input type="button" value="Eliminar" onclick="eliminar()">
    <input type="button" value="modificar" onclick="modificar()">

    
    <ul id="lista">
        <form id="forma">
            <table id="table"></table>
        </form>
    </ul>

    <p id="con"></p>
    <script src="JS.js"></script>
</body>

</html>