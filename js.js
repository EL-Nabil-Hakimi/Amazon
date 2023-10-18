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

var count1 = 0;
var count2 = 0;
var count3 = 0;
var Totale = 0;

function AddNumber1(){
    count1++;
    Totale=Totale+99;
    document.getElementById("para1").innerHTML = count1;
    document.getElementById("Totale1").innerHTML ="$ " + Totale;
}

function RemoveNumber1(){
    if(count1>0){
    count1--;
    Totale=Totale-99;
    document.getElementById("para1").innerHTML = count1;
    document.getElementById("Totale1").innerHTML ="$ " + Totale;
}
}

function AddNumber2(){
    count2++;
    Totale=Totale+99;
    document.getElementById("para2").innerHTML = count2;
    document.getElementById("Totale1").innerHTML ="$ " + Totale;
}

function RemoveNumber2(){
    if(count2>0){
    count2--;
    Totale=Totale-99;
    document.getElementById("para2").innerHTML = count2;
    document.getElementById("Totale1").innerHTML ="$ " + Totale;
}
}


function AddNumber3(){
    count3++;
    Totale=Totale+99;
    document.getElementById("para3").innerHTML = count3;
    document.getElementById("Totale1").innerHTML ="$ " + Totale;
}

function RemoveNumber3(){
    if(count3>0){
    count3--;
    Totale=Totale-99;
    document.getElementById("para3").innerHTML = count3;
    document.getElementById("Totale1").innerHTML ="$ " + Totale;
}
}



