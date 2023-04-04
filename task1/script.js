
let vowels = {
    'a':1,
    'e':2,
    'i':3,
    'o':4,
    'u':5
};

function calculateVowels(){
    event.preventDefault();

    // get the value from input field
    let text = document.getElementById("text").value;
    let resultText = document.getElementById("result");
    let lettersText = document.getElementById("letters");

    // check if the test is empty
    if(text.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill the field !',
        })
        return false;
    }else{
        let result = 0;
        let letters = "";

        // loop through text to find the vowels
        for(let i =0 ; i<text.length; i++){
            if(vowels[text[i]] != undefined){
                result += vowels[text[i]];
                letters += text[i]+ ","
            }
        }

        // update html with the new result
        resultText.innerHTML=`${result}`;
        lettersText.innerHTML = letters;
    }
}