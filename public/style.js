var number=document.getElementById('HTML')
var counter = 0
setInterval(() => {
    if (counter==65) {
        clearInterval()
    }
    else{
        counter+=1
        number.innerHTML=counter +"%"
    }
}, 30);