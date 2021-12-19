function backtocart(){ // link to cart
    window.location.href = "cart.html"
}

function modepayment(){  // Importing mode of paymnet from payment.html thrugh local storage

    var payment = JSON.parse(localStorage.getItem("mode"))
    document.querySelector("#anchor > a").textContent = payment.mode;
}
modepayment()

var kfcCart = JSON.parse(localStorage.getItem("userCart")) || []; // importing price of product from localstorage
var count = 0; // counting total items in a cart and price below
var totalprice = 0; 

kfcCart.map(function(elem,index){
    count++
    totalprice = totalprice + Number(elem.price);
    
})

document.querySelector("#pricebox > h3").insertAdjacentText("afterbegin",count)

givevalues(totalprice)

function couponclick(){
    var coupon = document.querySelector("#coupon").value 

    if (coupon == "100OFF" && totalprice > 598){
        
        totalprice = totalprice - 100;
    }
    givevalues(totalprice)
}

function givevalues(totalprice){

    // Adding total price and gst to HTML Page 
   var price =  document.getElementById("price").textContent = totalprice;
    // inserting rupee before the totalprice; 
    document.getElementById("price").insertAdjacentText("afterbegin", "₹"); 

    var gst = document.getElementById("gst").textContent = totalprice*5/100
    document.getElementById("gst").insertAdjacentText("afterbegin", "₹")

    var total = document.querySelector("#continue > span").textContent = Math.floor(totalprice + totalprice*5/100 + 35)
    document.querySelector("#continue > span").insertAdjacentText("afterbegin", "₹")

    var obj = {
        count:count,
        product_price:price,
        tax:gst,
        handling:35,
        total:total
    }
    localStorage.setItem("kfccart",JSON.stringify(obj))
}

console.log(document.querySelector("#anchor > a").textContent)
function paid(){

    if (document.querySelector("#anchor > a").textContent == "Cash")
    {
        window.location.href = "order_confirm.html"
    }
    else
    {
        window.location.href = "card_otp.html"
    }
    
}