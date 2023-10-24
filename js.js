var maDiv = document.getElementById("section1M");
var BTN = document.getElementById("BTNN1");
function showTable() {
if(maDiv.style.display === "block"){
    maDiv.style.display = "none";
}
else{
    maDiv.style.display = "block";
    
}}


function showDivShow() {
    var Div2 =document.getElementById("showShipping");
    if(Div2.style.display === "block"){
        Div2.style.display = "none";
    }
    else{
        Div2.style.display = "block";
        
    }}

function hideenSectionPage2(){
    var sec = document.getElementById("sectionPage1");
    if(sec.style.display === "grid"){
        sec.style.display = "none";
    }
    else{
        sec.style.display = "grid";
    }
}

var Product = 0;

function n_Product() {
    Product++;
    localStorage.setItem('Product', Product); // Save the 'Product' count to localStorage

    document.getElementById("NrProduct").innerHTML = Product;

    if (Product > 1) {
        var divAAjouter = document.getElementById("Panning_Div");
        var copieDiv = divAAjouter.cloneNode(true);
        var divPanier = document.getElementById("Panning_DivAll");
        divPanier.appendChild(copieDiv);
    }
}

function closePadd(){
    document.getElementById("Panning_DivAll").style.display = "none";
    var body = document.querySelector("#Body1");
        body.style. filter = "none";
        body.style.opacity = "1";

}


function showPanning(){
    if(Product == 0){
        alert("Pannig is empty")
    }
    if(Product != 0){
    var Pann = document.getElementById("Panning_DivAll");
    if(Pann.style.display === "block"){
        Pann.style.display = "none"
        var body = document.querySelector("#Body1");
        body.style. filter = "none";
        body.style.opacity = "1";
    }
    else{
        Pann.style.display = "block"
        var body = document.querySelector("#Body1");
        body.style. filter = "blur(5px)";
        body.style.opacity = "0.3";

       
    }
}
}


function DeleteDiv(){
    var divAAjouter = document.getElementById("Panning_Div");
    divAAjouter.remove();
    Product--;
    document.getElementById("NrProduct").innerHTML = Product;
    localStorage.setItem('Product', Product); 

}

window.onload = function () {
    var savedProduct = localStorage.getItem('Product');
    
    if (savedProduct) {
        Product = parseInt(savedProduct);
        document.getElementById("NrProduct").innerHTML = Product;
    }


    
    for(var i = 0 ; i<savedProduct-1 ; i++){
        if(savedProduct){
        var divAAjouter = document.getElementById("Panning_Div");
        var copieDiv = divAAjouter.cloneNode(true);
        var divPanier = document.getElementById("Panning_DivAll");
        divPanier.appendChild(copieDiv);      

}
    }    
}
