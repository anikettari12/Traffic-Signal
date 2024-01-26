function SignalRed() {      
   setTimeout( () => {
    let red = document.getElementById('red').style.backgroundColor ="#B81D13"; 
    let yellow = document.getElementById('yellow').style.backgroundColor ="black";
    let green = document.getElementById('green').style.backgroundColor ="black";
   },30000);    
};

function SignalYellow() {
    setTimeout( () => {
     let yellow = document.getElementById('yellow').style.backgroundColor =" #EFB700"; 
     let red = document.getElementById('red').style.backgroundColor ="black"; 
    let green = document.getElementById('green').style.backgroundColor ="black";
    },10000); 
 };

 function SignalGreen() {
    setTimeout( () => {
     let green = document.getElementById('green').style.backgroundColor ="#008450"; 
     let red = document.getElementById('red').style.backgroundColor ="black"; 
    let yellow = document.getElementById('yellow').style.backgroundColor =" black";  
    },60000);
          
 };

function result() {
      SignalRed();
      SignalYellow();
      SignalGreen();    
}

var timer = setInterval(function () {
    result();
},60000);