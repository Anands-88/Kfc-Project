function modepayment(){

    var payment = JSON.parse(localStorage.getItem("mode"))
    document.querySelector("#mode").textContent = payment.mode;
    console.log("hii")
}
modepayment()