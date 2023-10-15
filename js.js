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