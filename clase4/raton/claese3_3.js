
function over(){
    var grande=document.getElementById("grande");
    grande.src=this.src;//seb le accipna a una img lo que contiene la otra 
}
function out(){
    var grande=document.getElementById("grande");
    grande.src="img/sinfoto.jpg"
}
// var img1 = document.getElementById("img1");
// img1.onmouseenter = over;//cuendo se realiza un evento se llamara a esta funcion
// img1.onmouseout = out;


for (let i=1;i<=4;i++){
    var img=document.getElementById("img"+i);
    img.onmouseenter = over;
    img.onmouseout = out;
    // img.onmousedown = over;//con el onclick
    // img.onmouseup = out;//cuando se suelta el clich
}
