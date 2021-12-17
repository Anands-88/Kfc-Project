
function modepayment(){

    var payment = JSON.parse(localStorage.getItem("mode"))
    document.querySelector("#anchor > a").textContent = payment.mode;
}
modepayment()


function paid(){

    window.location.href = "order_confirm.html"
}