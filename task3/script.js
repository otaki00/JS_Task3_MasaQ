


function updateRangeValue(val, selector){

    let rangeValueField = undefined;

    if (selector == 1){
        rangeValueField = document.getElementById("rangeValue");
    }else if ( selector == 2) {
        rangeValueField = document.getElementById("rangePriceValue");
    }else if ( selector == 3 ){
        rangeValueField = document.getElementById("rangeToyPriceValue");
    }

    rangeValueField.innerHTML = val;
}



function smartSama(){
    event.preventDefault();

    let ageValue = document.getElementById("ageRange").value;
    let washMachinePrice = document.getElementById("priceRange").value;
    let toyPriceValue = document.getElementById("toyPriceRange").value;
    let emoji = document.getElementById("emoji");
    let resutlText = document.getElementById("resultText");
    
    let total = 0;
    let totalSoFar = 0;
    let numberOftoys = 0;
    let toysPrice = 0;
    let brotherMoney = 0;
    for(let i = 0; i < ageValue; i++){
        if( i % 2 == 0){
            totalSoFar += 10
            total += totalSoFar
            brotherMoney++;
            // console.log(totalSoFar)
        }else{
            numberOftoys++;
        }
    }

    toysPrice = numberOftoys * toyPriceValue;
    let overallTotal = (total + toysPrice) - brotherMoney;

    if (overallTotal < washMachinePrice){
        emoji.innerHTML = '<i class="fa-regular fa-face-sad-tear fa-bounce" ></i>'
        resutlText.innerText = `For Sorry you Need ${washMachinePrice - overallTotal} USD`
    }else {
        emoji.innerHTML = '<i class="fa-regular fa-face-laugh-beam fa-bounce"></i>'
        resutlText.innerText = `Yaa, You Got it, Still Have ${overallTotal - washMachinePrice } USD`
    }


}