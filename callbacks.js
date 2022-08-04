
 
function displayInput(e){
    let inputItemCost = document.getElementById("item-cost");
    let child = document.createElement("p");
    itemCost= parseInt(inputItemCost.value);
    

    let inputShippingCost = document.getElementById("shipping-cost");
    let child2 = document.createElement("cost");
    shippingCost = parseInt(inputShippingCost.value);
    

    let inputSellPrice = document.getElementById("sell-price");
    let child3 = document.createElement("selling-price");
    sellPrice = parseInt(inputSellPrice.value);
    

    let fees = document.getElementById("cost-of-fees");
    let child4 = document.createElement("total-fees");
    totalFees = parseInt(fees.value);
   

    let totalCost = (totalFees + itemCost + shippingCost);
    let totalProfit = (sellPrice - totalCost);
    
    let profitPercent = ((totalProfit/totalCost)*100);

    let percentHolder = document.getElementById("percentprofit");
    percentHolder.innerHTML = profitPercent;
    
    let results = document.getElementById("results");
    results.innerHTML = totalProfit;

}
   

let submitButton = document.getElementById("calculate");
submitButton.addEventListener("click", displayInput);

