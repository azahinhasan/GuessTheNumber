

var guessNumber = 0;
var randomNumber=0;
var i=0;
var arr1 = [5,8,10,13,15,19];
var arr2 = [5,8,10,13,15,19];
var points=0;
var life = 10;
var hintsMin = hintsMax = 0;
window.onload = function() {
   guessNumber=Math.floor(Math.random() * 1);
   randomNumber=Math.floor(Math.random() * 50);
   myFunction2();
   

 };


function randomNumberMinMax(min, max){
   const r = Math.random()*(max-min) + min
   return Math.floor(r)
}

function hints1(){
   hintsMin = randomNumberMinMax(randomNumber-2,randomNumber);
   hintsMax = randomNumberMinMax(randomNumber,randomNumber+2);

}
function myFunction2() {  //next
   document.getElementById("unknownNumber").innerHTML = "?";
   if(guessNumber==0){
         randomNumber=randomNumber+arr1[i];
         i=i+1;
      
   }else if(guessNumber==1){
      randomNumber=randomNumber+arr2[i];
         i=i+1;
   }
   document.getElementById("point").innerHTML = randomNumber;
   
 }


 function myFunction() {
   var yourNumber = document.getElementById("yourNumber").value;
   if(yourNumber == randomNumber){
      document.getElementById("result").innerHTML = "Right";
      points=points+5;
   }else{
      document.getElementById("result").innerHTML = "Wrong";
      //document.getElementById("result").innerHTML = yourNumber;
      life--;
   }
   document.getElementById("unknownNumber").innerHTML = randomNumber;
   
 }





/*function myFunction() {
    var size = document.getElementById("size").value;
    var speed = document.getElementById("speed").value;
    var sizeOption = document.getElementById("sizeOption").value;
    var speedOption = document.getElementById("speedOption").value;
    var fastCal=0;
    var hours=00,days=00,min=00,sec=00;





     if(sizeOption=='GB' && speedOption=="Mbps"){
        fastCal=(size*1024)/(speed/8.5);
        
     }else if(sizeOption=='MB' && speedOption=="MBps"){
        fastCal=(size/speed);
     }else if(sizeOption=='MB' && speedOption=="Mbps"){
        fastCal=size/(speed/8);
     }else if(sizeOption=='GB' && speedOption=="MBps"){
        fastCal=(size*1024)/(speed);
     }



     document.getElementById("days").innerHTML = fastCal;

     fastCal=((fastCal/60)/60);

   

     if(fastCal>24){
        thrdCal=fastCal/24;
        days=(thrdCal + "").split(".")[0];
        thrdCal = thrdCal.toFixed(8);
        
        fastCal=(thrdCal + "").split(".")[1];
        
        fastCal=fastCal*0.00000001;
        
        fastCal=(fastCal*24)-1;


     }
     fastCal = fastCal.toFixed(5);
     hours=(fastCal + "").split(".")[0];
    



     secCal = (fastCal + "").split(".")[1];
     secCal=secCal*0.00001;
     secCal=(secCal*60)-1;

     secCal = secCal.toFixed(3);
      
     min = (secCal + "").split(".")[0];
     
     thrCal = (secCal + "").split(".")[1];
     thrCal=thrCal*0.001;
     thrCal=thrCal*60;
     thrCal = thrCal.toFixed(3);
     sec = (thrCal + "").split(".")[0];
     



   if(days=="-0" || days==0 || days == 'NaN'){
      days='00';
   }
   if(hours=="-0" || hours==0 || hours == 'NaN'){
      hours='00';
   }
   if(min=="-0" || min==0 || min == 'NaN'){
      min='00';
   }
   if(sec=="-0" || sec==0 || sec == 'NaN'){
      sec='00';
   }

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML =  hours;
   document.getElementById("min").innerHTML =  min;
   document.getElementById("sec").innerHTML =  sec;

}


function copyEmail(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    alert("Copied my Email : " + tempInput.value);
    document.body.removeChild(tempInput);

   
  }*/