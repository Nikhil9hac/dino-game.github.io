score_print=0
value_score=true
window.alert(
    'Welcome to dino game.if you are in computer use left arrow key to move left and right arrow key to move right and space-bar to jump and start to the game'
)
document.ondblclick=function(e){
    const dragon=document.querySelector('.dragon');
    dragon.classList.add('animation');
    notice=document.querySelector('.notice')
    notice.innerHTML="welcome to dino game"
}


document.onclick=function(e){
    const dino=document.querySelector('.dino');
    dino.classList.add('dino-animate');
  setTimeout(()=>{
      dino.classList.remove('dino-animate');
  },701)
}
document.onkeydown=function(e){
    console.log(e.keyCode);
    if(e.keyCode==32){
        const dragon=document.querySelector('.dragon');
    dragon.classList.add('animation');
    notice=document.querySelector('.notice')
    notice.innerHTML="welcome to dino game"
    const dino=document.querySelector('.dino');
    dino.classList.add('dino-animate');
  setTimeout(()=>{
      dino.classList.remove('dino-animate');
  },701)
    }
    else if(e.keyCode==37){
        dino=document.querySelector('.dino')
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        console.log(dinox);
        if(dinox>97){
            dino.style.left=(dinox-112)+"px"
        }
    }
    else if(e.keyCode==39){
        dino=document.querySelector('.dino')
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        console.log(dinox);
        if(dinox<1106){
            dino.style.left=(dinox+112)+"px"
        }
    }
}
let audio=new Audio('music.mp3');
audio.loop=true;
audio.play();

setInterval(()=>{
    dino=document.querySelector('.dino');
    notice=document.querySelector('.notice')
    dragon=document.querySelector('.dragon')
    let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

    let ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'))
    let oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'))
    console.log(dx,dy,ox,oy);
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    console.log(offsetx,offsety);
    if (offsetx<160 && offsety<115) {
        notice.innerHTML=`gameover-Double-tap-reload<br> <p class="score-design"> your score ${score_print}</p> <br> <p class="name"> created by sridhar</p>`
        dino.classList.remove('dino-animate');
        dragon.classList.remove('animation');
    }
    else if(offsetx<140 && value_score){
        score_print+=1
        updatescore(score_print)
        value_score=false
        setTimeout(()=>{
            value_score=true
        },1000)
    }

},100)
function updatescore(score){
    let scoreboard=document.querySelector('.result');
    scoreboard.innerHTML=score;
}