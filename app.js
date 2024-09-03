document.getElementById("loan-form").addEventListener("submit",function(e){
    
    document.getElementById("results").style.display="none";
    document.getElementById("loading").style.display="block";
    setTimeout(calculate,2000);
    e.preventDefault();
});
function calculate(e){
    
    const amount =document.getElementById("loan_amount");
    const intrest =document.getElementById("Intrest");
    const Years =document.getElementById("Years");
    const MonthlyPayment =document.getElementById("MonthlyPayment");
    const TotalAmount =document.getElementById("TotalAmount");
    const TotalIntrest =document.getElementById("TotalIntrest");

    const principal=parseFloat(amount.value);
    const calculateIntrest=parseFloat(intrest.value)/100/12;
    const calculatePayments=parseFloat(Years.value)*12;
    const x= Math.pow(1+calculateIntrest,calculatePayments);
    const monthly=(principal*x* calculateIntrest)/(x-1);

    if(isFinite(monthly)){
        MonthlyPayment.value=monthly.toFixed(2);
        TotalAmount.value=(monthly*calculatePayments).toFixed(2);
        TotalIntrest.value=(monthly*calculatePayments-principal.toFixed(2));

        document.getElementById("results").style.display="block";
        document.getElementById("loading").style.display="none";

    }
    else{
        showAlert("Please enter the valid numbers");
    }

    e.preventDefault();
    
}
function showAlert(error){
    const errorDiv=document.createElement('div');

    errorDiv.className="alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));

    const card=document.querySelector('.card');
    const heading=document.querySelector(".heading");
    card.insertBefore(errorDiv, heading);

    setTimeout(function(){
        document.querySelector(".alert").remove();
    },3000)

}


