function AddProductsPage4(){
    //article declaration 
    var ArticleParent = document.getElementById("artct2Page4");
    //div1 declaration 
    var divLeft = document.createElement("div");
    divLeft.id = "divLeft";

// Create the first nested div with the id "dvImage1"
var dvImage1 = document.createElement("div");
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
var img1 = document.createElement("img");
img1.src = "Img/Product.jpg";
img1.id="ImgeProduct"
dvImage1.appendChild(checkbox);
dvImage1.appendChild(img1);

// Create the second nested div for product details
var productDetails = document.createElement("div");
var h3 = document.createElement("h3");
h3.textContent = "Product Name";
var select1 = document.createElement("p");
select1.id = "select1";
select1.textContent = "Selected items";
var h3Prix = document.createElement("h3");
h3Prix.id = "Prix";
h3Prix.textContent = "$ 1299";
var shipping = document.createElement("p");
shipping.textContent = "Shipping :  $18";

productDetails.appendChild(h3);
productDetails.appendChild(select1);
productDetails.appendChild(h3Prix);
productDetails.appendChild(shipping);

// Append the nested divs to "divLeft"
divLeft.appendChild(dvImage1);
divLeft.appendChild(productDetails);

// Create the outer div element with the id "divRight"
var divRight = document.createElement("div");
divRight.id = "divRight";

// Create the nested div for icons and buttons
var iconsButtons = document.createElement("div");
var imgLove = document.createElement("img");
imgLove.src = "Img/love.png";
var imgDelete = document.createElement("img");
imgDelete.src = "Img/delete.png";
imgDelete.id = "ImgDele"


iconsButtons.appendChild(imgLove);
iconsButtons.appendChild(imgDelete);

// Create the nested div for quantity control
var quantityControl = document.createElement("div");
quantityControl.id = "DivQuantity"
var pMinus = document.createElement("p");
pMinus.className = "P1";
pMinus.id = "plus1";
pMinus.textContent = "-";
var pQuantity = document.createElement("p");
pQuantity.className = "P2";
pQuantity.id = "para1";
pQuantity.textContent = "0";
var pPlus = document.createElement("p");
pPlus.className = "P3";
pPlus.id = "moin1";
pPlus.textContent = "+";

quantityControl.appendChild(pMinus);
quantityControl.appendChild(pQuantity);
quantityControl.appendChild(pPlus);

// Append the nested divs to "divRight"
divRight.appendChild(iconsButtons);
divRight.appendChild(quantityControl);

var divAll = document.createElement("Div");
divAll.id = "DivALL1"
divAll.appendChild(divLeft);
divAll.appendChild(divRight);

// Append "divLeft" and "divRight" to the document body or any other parent element
ArticleParent.appendChild(divAll);

}


window.onload = function (){



var savedProduct = localStorage.getItem('Product');
Product = parseInt(savedProduct);
document.getElementById("NrProduct").innerHTML = Product;


for(var i = 0 ; i<Product ; i++){
    AddProductsPage4();

}



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

}

