let ci, nombre, apellido, grupo, nota, juicio;
let txt;
                
let table= document.getElementById("table");
let arr;
class estudiante{

    mostrar(){

        const xmlhttp = new XMLHttpRequest();
		xmlhttp.onload = function() {
			const myJSON = this.responseText;
			var myTXT=myJSON.replaceAll("},", "}||").replace("[", "").replace("]", "");

            var splited = myTXT.split("||");
//-----------------------------------------------
            var j=splited.length;

            for(let i = 0; i <=j; i++) {

                const table = document.getElementById("table");

                const fila= document.createElement("tr");
                const c_i = document.createElement("th");
                const nom = document.createElement("th");
                const ape = document.createElement("th");
                const gru = document.createElement("th");
                const not = document.createElement("th");
                const jui = document.createElement("th");

                const myObj   = JSON.parse(splited[i]);

                ci      = myObj.ci;
                nombre  = myObj.nombre;
                apellido= myObj.apellido;
                grupo   = myObj.grupo;
                nota    = myObj.nota;
                juicio   = myObj.juicio;
                txt=document.createTextNode(ci);
                    c_i.appendChild(txt);
                txt=document.createTextNode(nombre);
                    nom.appendChild(txt);
                txt=document.createTextNode(apellido);
                    ape.appendChild(txt);
                txt=document.createTextNode(grupo);
                    gru.appendChild(txt);
                txt=document.createTextNode(nota);
                    not.appendChild(txt);
                txt=document.createTextNode(juicio);
                    jui.appendChild(txt);

                fila.appendChild(c_i);
                fila.appendChild(nom);
                fila.appendChild(ape);
                fila.appendChild(gru);
                fila.appendChild(not);
                fila.appendChild(jui);

                fila.setAttribute("id", ci)

                table.appendChild(fila);

                table.setAttribute("border", "3");
                
                const desplegable = document.getElementById("select");
                const opcion      = document.createElement("option");
                
                txt=document.createTextNode(nombre);
                    opcion.appendChild(txt);
                opcion.setAttribute("value", ci)

                desplegable.appendChild(opcion);
            }
		};
		xmlhttp.open("GET", "JSON/myfile.json");
		xmlhttp.send();
    }

    agregar(){
        ci      = document.getElementById("ci").value;
        nombre  = document.getElementById("nombre").value;
        apellido= document.getElementById("apellido").value;
        grupo   = document.getElementById("grupo").value;
        nota    = document.getElementById("nota").value;

        const table = document.getElementById("table");

        const fila= document.createElement("tr");
        const c_i = document.createElement("th");
        const nom = document.createElement("th");
        const ape = document.createElement("th");
        const gru = document.createElement("th");
        const not = document.createElement("th");
        const jui = document.createElement("th");



        txt=document.createTextNode(ci);
            c_i.appendChild(txt);
        txt=document.createTextNode(nombre);
            nom.appendChild(txt);
        txt=document.createTextNode(apellido);
            ape.appendChild(txt);
        txt=document.createTextNode(grupo);
            gru.appendChild(txt);
        txt=document.createTextNode(nota);
            not.appendChild(txt);

            if (parseInt(nota)>7) {
                txt=document.createTextNode("Exonera");
                jui.appendChild(txt);
            }else if(parseInt(nota)==7){
                txt=document.createTextNode("Diciembre");
                jui.appendChild(txt);
            }else if(parseInt(nota)<7){
                txt=document.createTextNode("Febrero");
                jui.appendChild(txt);
            }

        fila.appendChild(c_i);
        fila.appendChild(nom);
        fila.appendChild(ape);
        fila.appendChild(gru);
        fila.appendChild(not);
        fila.appendChild(jui);

        fila.setAttribute("id", ci)

        table.appendChild(fila);

        const desplegable = document.getElementById("select");
        const opcion      = document.createElement("option");
        
        txt=document.createTextNode(nombre);
            opcion.appendChild(txt);
        opcion.setAttribute("value", ci)

        desplegable.appendChild(opcion);

    }
}
var obj = new estudiante;
function mostrar(){
    obj.mostrar();
}
function modificar(){
    var selection = document.getElementById("select");
    var op = selection.options[selection.selectedIndex].value;

    var fil =document.getElementById(op);
    for (let i = 0; i < 6; i++) {
        fil.deleteCell(0);        
    }

    ci      = document.getElementById("ci").value;
    nombre  = document.getElementById("nombre").value;
    apellido= document.getElementById("apellido").value;
    grupo   = document.getElementById("grupo").value;
    nota    = document.getElementById("nota").value;
    juicio  = document.getElementById("juicio").value;

    
    const table = document.getElementById("table");

    const c_i = document.createElement("th");
    const nom = document.createElement("th");
    const ape = document.createElement("th");
    const gru = document.createElement("th");
    const not = document.createElement("th");
    const jui = document.createElement("th");

    txt=document.createTextNode(ci);
        c_i.appendChild(txt);
    txt=document.createTextNode(nombre);
        nom.appendChild(txt);
    txt=document.createTextNode(apellido);
        ape.appendChild(txt);
    txt=document.createTextNode(grupo);
        gru.appendChild(txt);
    txt=document.createTextNode(nota);
        not.appendChild(txt);
    txt=document.createTextNode(juicio);
        jui.appendChild(txt);

    fil.appendChild(c_i);
    fil.appendChild(nom);
    fil.appendChild(ape);
    fil.appendChild(gru);
    fil.appendChild(not);
    fil.appendChild(jui);

    fil.setAttribute("id", ci)


    const selected = document.getElementById("select");
    const opcion      = document.createElement("option");
    var op = selection.selectedIndex;
    selected.remove(selection.selectedIndex);
    
    txt=document.createTextNode(nombre);
        opcion.appendChild(txt);
    opcion.setAttribute("value", ci)

    selected.add(opcion, op);
    

}
function eliminar(){
    var selection = document.getElementById("select");
    var op = selection.options[selection.selectedIndex].value;
    document.getElementById(op).remove();
    selection.remove(selection.selectedIndex);
}
function agregar(){
    obj.agregar();
}
function guardar(){
    alert("No encontré la forma de editar <<myfile.json>> desde JS, así que no se puede guardar");
}

