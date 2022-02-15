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
  
});


// verify pin function
function verifyPin(){
    const currentPin = document.getElementById('pin-show').value;
    const keyShow = document.getElementById('key-show').value;
    const pinMach = document.getElementById('mach-pin');
    const notMach = document.getElementById('not-mach');
    if(currentPin == keyShow){
        
        pinMach.style.display = 'block';
        notMach.style.display = 'none';
        document.getElementById('massage').style.display = 'none';
    }
    else{

        notMach.style.display = 'block';
        pinMach.style.display = 'none';
        document.getElementById('massage').style.display = 'block';

        let machCountText = document.getElementById('machCount');
        let machCount = parseInt(machCountText.innerText) - 1;
        if (machCount < 1) {
            const pinShow = document.getElementById('pin-show');
            document.getElementById('massage').innerText = 'Set the new PIN again';
            pinShow.value = '';
            window.location.reload();
        }
        else{
            machCountText.innerText = machCount;
        }
    }
}

document.getElementById('submit-button').addEventListener('click', function(){
    verifyPin();
})