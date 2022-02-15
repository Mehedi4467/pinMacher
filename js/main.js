// pin validation 
function pinValidition(){

    const pin = Math.round(Math.random()*10000);
    const pinLength = pin + '';
    if(pinLength.length == 4){
        return pin;
    }
    else{
       return pinValidition();
    }
}

// pin generate button 

document.getElementById('generate-button').addEventListener('click', function(){
    const pinShow = document.getElementById('pin-show');
   const pin = pinValidition();
   pinShow.value = pin;
});


// key pad 

document.getElementById('key-pad').addEventListener('click', function(event){
    const keyShow = document.getElementById('key-show');
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == "C"){
            keyShow.value = '';
        }
    }
    else{
        const priviusNumber = keyShow.value;
        const currentNumber = priviusNumber + number;
        keyShow.value = currentNumber;
       
    }

    
    
})