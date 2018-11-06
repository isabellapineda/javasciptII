document.form1.Ciudad.selectedIndex=-1;
document.form1.registrar.onclick = procesar;
document.form1.limpiar.onclick = function(){
    alert(this.value);
}
onfocus = function(){
    if(this.style!=undefined)
    this.style.backgroundColor = 'yellow';
}
onblur = function(){
    if(this.style!=undefined)
    this.style.backgroundColor = 'White';
}
document.form1.nombre.onfocus = onfocus;
document.form1.nombre.onfocus = onblur;
document.form1.correo.onfocus = onfocus;
document.form1.correo.onfocus = onblur;
document.form1.Ciudad.onfocus = onfocus;
document.form1.Ciudad.onfocus = onblur;

function procesar(){
    alert(this.value);
    if(validar()){
        alert("Se proceso exitosamente")
    }
}
function validar(){
    if(!esta_vacio(document.form1.nombre,"Debe escribir el nombre"))
        if(validarcorreo(document.form1.correo))
             if(validar_select(document.form1.ciudad))
                if(validar_check(document.form1.sexo))
                    if(validar_check(document.form1.acepto))
                        return true;
                    else
                        return false;
        
}