const subhanAllah = document.getElementById('subhanAllah');
const subhanAllahIncriment = document.getElementById('subhanAllahIncriment');
const subhanAllahDecriment = document.getElementById('subhanAllahDecriment');

const alhamdulliha = document.getElementById('alhamdulliha');
const alhamdullihaIncriment = document.getElementById('alhamdullihaIncriment');
const alhamdullihaDecriment = document.getElementById('alhamdullihaDecriment');

const allahuakbar = document.getElementById('allahuakbar');
const allahuakbarIncriment = document.getElementById('allahuakbarIncriment');
const allahuakbarDecriment = document.getElementById('allahuakbarDecriment');

const reset = document.getElementById('reset');


let subhanAllahInitialValue = 0;
let alhamdullihaInitialValue = 0;
let allahuakbarInitialValue = 0;

//SubahanAllah
subhanAllahIncriment.addEventListener('click', function(){
    subhanAllahInitialValue++;
    if(subhanAllahInitialValue > 33)
    {
        return alert("You can't add value !");
    }
    subhanAllah.innerText = subhanAllahInitialValue;
})
subhanAllahDecriment.addEventListener('click', function(){
    subhanAllahInitialValue--;
    if(subhanAllahInitialValue < 0)
    {
        return alert("You can't decriment negative value !");
    }
    subhanAllah.innerText = subhanAllahInitialValue;
})

//Alhamdulliha
alhamdullihaIncriment.addEventListener('click', function(){
    alhamdullihaInitialValue++;
    if(alhamdullihaInitialValue > 33)
    {
        return alert("You can't add value !");
    }
    alhamdulliha.innerText = alhamdullihaInitialValue;
})
alhamdullihaDecriment.addEventListener('click', function(){
    alhamdullihaInitialValue--;
    if(alhamdullihaInitialValue < 0)
    {
        return alert("You can't decriment negative value !");
    }
    alhamdulliha.innerText = alhamdullihaInitialValue;
})

//Allahuakbar
allahuakbarIncriment.addEventListener('click', function(){
    allahuakbarInitialValue++;
    if(allahuakbarInitialValue > 33)
    {
        return alert("You can't add value !");
    }
    allahuakbar.innerText = allahuakbarInitialValue;
})
allahuakbarDecriment.addEventListener('click', function(){
    allahuakbarInitialValue--;
    if(allahuakbarInitialValue < 0)
    {
        return alert("You can't decriment negative value !");
    }
    allahuakbar.innerText = allahuakbarInitialValue;
})

//Reset Button

reset.addEventListener('click', function() {
    subhanAllah.innerText = 0;
    alhamdulliha.innerText = 0;
    allahuakbar.innerText = 0;
})
