var kfcCart = JSON.parse(localStorage.getItem("userCart")) || [];

setupPrice(kfcCart)
// Adding all values from local storage of product list  of customer
kfcCart.map(function(elem,index){

    var item_box = document.createElement("div")
    item_box.setAttribute("class","itemBox")

    var image_box = document.createElement("div")
    var image = document.createElement("img")
    image.setAttribute("src",kfcCart[index].image)

    var contents = document.createElement("div")
    contents.setAttribute("class","content")
    var item_name = document.createElement("div")
    item_name.textContent = kfcCart[index].name;

    var price = document.createElement("h4")
    price.textContent = kfcCart[index].price;
    price.setAttribute("class","price")

    var remove = document.createElement("button")
    remove.textContent = "Remove";
    remove.setAttribute("class","remove")

    image_box.append(image)
    contents.append (item_name,price,remove)
    item_box.append(image_box,contents)
    document.querySelector("#cart").append(item_box)

    document.getElementsByClassName("remove")[index].addEventListener("click",function ()
    {
        event.target.parentNode.parentNode.remove()
        kfcCart.splice(index,1)
        
        localStorage.setItem("userCart",JSON.stringify(kfcCart))
        
        setupPrice(kfcCart)
    })

})

var count = 0; 
function setupPrice(kfcCart)
{ 
    var totalprice = 0;
    kfcCart.map(function(elem){
        count++
        totalprice = totalprice + Number(elem.price);
    })
    
    document.querySelector(".right > h5").textContent = totalprice;

    givevalues(totalprice)
}

function givevalues(totalprice){
    var cnt = count;
    // Adding total price and gst to HTML Page 
   var price =  document.getElementById("price").textContent = totalprice;
    // inserting rupee before the totalprice; 
    document.getElementById("price").insertAdjacentText("afterbegin", "₹"); 

    var gst = document.getElementById("gst").textContent = totalprice*5/100
    document.getElementById("gst").insertAdjacentText("afterbegin", "₹")

    var total = document.querySelector("#continue > span").textContent = Math.floor(totalprice + totalprice*5/100 + 35)
    document.querySelector("#continue > span").insertAdjacentText("afterbegin", "₹")

    var obj = {
        count:cnt,
        product_price:price,
        tax:gst,
        handling:35,
        total:total
    }
    localStorage.setItem("kfccart",JSON.stringify(obj))

    console.log(obj)
}

