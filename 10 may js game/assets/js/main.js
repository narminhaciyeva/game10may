


let ball=document.querySelector("#ball");
let game=document.querySelector("#game");

let speed=5;

window.addEventListener("keydown",function(e){


    if(e.keyCode==39){

        if(ball.offsetLeft+speed <= game.offsetWidth-ball.offsetWidth){
      
            ball.style.left= ball.offsetLeft + speed + "px";
        }
        else{
            ball.style.left = -30 + "px";
          
        }
    }


   else if(e.keyCode==37){
    ball.style.left= ball.offsetLeft - speed >=0;
        ball.style.left= ball.offsetLeft - speed + "px";         
    }
  
  else  if(e.keyCode==38){  
        ball.style.top= ball.offsetTop - speed + "px";
    }



  else  if(e.keyCode==40){
        ball.style.top= ball.offsetTop + speed + "px";
    }

})