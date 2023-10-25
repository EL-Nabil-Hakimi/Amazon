var Name1 = document.querySelector("#firstName");
var L_Name1 = document.querySelector("#lastName");
var Message1 = document.querySelector("#message");
var BtnSub1  = document.querySelector("#btnSub");




BtnSub1.addEventListener("click" , ()=>{
    var Name = Name1.value ; 
    var L_Name = L_Name1.value;
    var Message = Message1.value;

    if(Name == ""){
        alert("Name Is Empty")
    }

    else if(L_Name == ""){
        alert("Last Name Is Empty")

    }

    else if(Message == ""){
        alert("The Message Is Empty")

    }


})