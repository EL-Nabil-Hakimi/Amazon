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
}


function showPanning(){
    if(Product == 0){
        alert("Pannig is empty")
    }
    if(Product != 0){
    var Pann = document.getElementById("Panning_DivAll");
    if(Pann.style.display === "block"){
        Pann.style.display = "none"
    }
    else{
        Pann.style.display = "block"
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
// =============================================================
// Get all "P1" and "P3" elements
var p1Elements = document.querySelectorAll('.P1');
var p3Elements = document.querySelectorAll('.P3');
var Price = 0 ;
// Add click event listeners to "P1" elements
p1Elements.forEach(function (element) {
    element.addEventListener('click', function () {
        var p2 = element.parentElement.querySelector('.P2');
        var value = parseInt(p2.textContent);
        if (value > 0) {
            p2.textContent = value - 1;
            Price -= 1299 ;
            document.getElementById("Totale1").innerHTML = "$ " + Price ;
        }
    });
});

// Add click event listeners to "P3" elements
p3Elements.forEach(function (element) {
    element.addEventListener('click', function () {
        var p2 = element.parentElement.querySelector('.P2');
        var value = parseInt(p2.textContent);
        p2.textContent = value + 1;
        Price += 1299 ;
        document.getElementById("Totale1").innerHTML ="$ " + Price ;
    });
});