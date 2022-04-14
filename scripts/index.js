var sec=00
var min=00
var hr =00
var interval
function iniciar() {
    interval = setInterval (watch,1000)
  
    }
    function twodigit(digit) {
        if (digit<10){
            return('0'+digit)
        } else{
            return(digit)
        }
    }
  

function watch(){
    sec++
    if (sec==60){
        sec=0
        min++
        if (min==60){
            min=0
            hr++
        }
    }
    
    document.getElementById('Result').innerHTML= twodigit(hr)+':'+twodigit(min)+':'+ twodigit(sec)
    console.log(min)
    
}
function Parar() {
    clearInterval(interval)
    sec=0
    min=0
    hr=0
    document.getElementById('Result').innerHTML = '00:00:00'
}
function Pausar() {
    clearInterval(interval)
}