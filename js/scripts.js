

var guessNumber = 0;
var randomNumber=0;
var i=0;
var arr1 = [0,5,8,10,2];
var arr2 = [0,2,1,9,4];
var arr3 = [0,4,4,1,3];
var points=0;
var life = 2;
var counterReset=0;
var hintsMin = hintsMax = 0;

window.onload = function() {
   guessNumber=Math.floor(Math.random() * 2);
   randomNumber=Math.floor(Math.random() * 50);
   myFunction2();
   document.getElementById("buttonNext").disabled = true;
   lifePoints();

 };


function randomNumberMinMax(min, max){
   const r = Math.random()*(max-min) + min
   return Math.floor(r)
   //return r;
}

function hints1(){
   //document.getElementById("hints").innerHTML =randomNumber;
   hintsMin = randomNumberMinMax(randomNumber-2,randomNumber);
   hintsMax = randomNumberMinMax(randomNumber+1,randomNumber+3);
   hints = "[ Hints:Number is bettween "+hintsMin+" and "+hintsMax+" ]";
}
function myFunction2() {  //next
   
   document.getElementById("buttonClick").disabled = false;
   document.getElementById("buttonNext").disabled = true;
   document.getElementById("unknownNumber").innerHTML = "?";
   document.getElementById("hints").innerHTML = "";
   hintsButtonShow();

   if(guessNumber==0){
         randomNumber=randomNumber+arr1[i];
         i=i+1;
         if(i>=4){
            i = 0;
         }
      
   }else if(guessNumber==1){
      randomNumber=randomNumber+arr2[i];
         i=i+1;
         if(i>=4){
            i = 0;
         }
   }else if(guessNumber==2){
      randomNumber=randomNumber+arr3[i];
         i=i+1;
         if(i>=4){
            i = 0;
         }
   }
   hints1()
   ///////////////////////////////
   //document.getElementById("point").innerHTML = randomNumber;
   
 }


 function myFunction() {
   document.getElementById("buttonNext").disabled = false;
   document.getElementById("buttonClick").disabled = true;
   var yourNumber = document.getElementById("yourNumber").value;
   if(yourNumber == randomNumber){
     
      document.getElementById("result").innerHTML = "!^.^!Right!^.^!";
      points=points+5;
      
   }else{
      document.getElementById("result").innerHTML = "!T.T!Wrong!T.T!";
      
      life--;
   }

   if(points >= 50){
      finalPageActon(1);
   }else if(life < 0){
      finalPageActon(2);
   }
   document.getElementById("unknownNumber").innerHTML = randomNumber;
   lifePoints();
 }



 function lifePoints(){
   document.getElementById("life").innerHTML = ('0' + life).slice(-2);
   document.getElementById("point").innerHTML = ('0' + points).slice(-2);
 }



 function gameManu(){
   xhttp.open("GET", "index.html", true);
   xhttp.send();
 }


 function processAjaxData(response, urlPath){
   document.getElementById("content").innerHTML = response.html;
   document.title = response.pageTitle;
   window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
}

function hintsButton(){
   //document.getElementById("hintsButton").style.display = "none";
   document.getElementById("hintsButton").style.visibility  = "hidden";
   document.getElementById("hints").innerHTML = hints;
}

function hintsButtonShow(){
   //document.getElementById("hintsButton").style.display = "block text-align: center;";
   document.getElementById("hintsButton").style.visibility = "visible";
   document.getElementById("hints").innerHTML = "";
}

function finalPageActon(value){
   
   document.getElementById("life").innerHTML = value;
   if(value == 1){
      document.getElementById("finalMssage").innerHTML = "You Won!!!!!";
      document.getElementById("finalMssage2").innerHTML = "Congratulation!";
   }else if(value == 2){
      document.getElementById("finalMssage").innerHTML = "You Lose!!!!!";
      document.getElementById("finalMssage2").innerHTML = "Game Over!";
      window.location.href = "finalPage.html";
      //window.location.href = "http://www.w3schools.com";
      
   }

}

