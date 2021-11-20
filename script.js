function compute()
{
    var principal = document.getElementById("principal").value;
    var rate= document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    // add results to the "result" inner HTML in an easily readable format
    // sample given on the exercise referred to a var "amount" which i changed to interest
    document.getElementById("result").innerHTML="\<br\>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
function checkData()
{
    var principal = document.getElementById("principal").value;
    // check if principal value is zero or negative
    if(principal <= 0){
        alert("Enter a positive number");
        // bring user attention to the principal input
        principal.focus();
        return false;
    }
    return true;
}
