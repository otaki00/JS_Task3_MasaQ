

function findMinMax(){
    event.preventDefault();

    // get the numbers from the input
    let numbers = document.getElementById("numbers").value;
    let maxText = document.getElementById("max");
    let minText = document.getElementById("min");

    // reduce array of numbers from the form input
    let numbs = numbers                 // string
    .split( ' ' )                         // string[]
    .map( e => parseInt( e, 10 ) )       // ( number | NaN )[]
    .filter( n => !isNaN( n ))           // number[]
    
    // if the array is 0 length 
    if (numbs.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill the field or make sure that have valid value !',
        })
        return false;
    }else { 
        let min = 1000000000;
        let max = 0;

        for (let i = 0 ; i< numbs.length; i++){
            if (numbs[i] > max){
                max = numbs[i]
            }
            if(numbs[i] < min){
                min = numbs[i]
            }
        }

        maxText.innerHTML = max;
        minText.innerHTML = min;

    }
}