score_print=0
value_score=true
window.alert(
    'Welcome to dino game.if you are in computer use left arrow key to move left and right arrow key to move right and space-bar to jump and start to the game'
)

let audio=new Audio('music.mp3')
audio.loop=true

document.ondblclick=function(e){
    const dragon=document.querySelector('.dragon');
    dragon.classList.add('animation');
    notice=document.querySelector('.notice')
    audio.play()
    notice.innerHTML="welcome to dino game"
   
}


function musicSystem(){
    notice=document.querySelector('.notice')
    notice.innerHTML=`gameover-Double-tap-reload<br> <p class="score-design"> your score ${score_print}</p> <br> <p class="name"> created by sridhar</p>`
    dino.classList.remove('dino-animate');
    let scoreboard=document.querySelector('.result');
    scoreboard.innerHTML=0;
    score_print=0
    audio.pause()
    let audio2= new Audio('gameover.mp3');
    audio2.play();
    setTimeout(()=>{
       audio2.pause()
    },1000)
    dragon.classList.remove('animation');
}





function movement(a){
    document.onclick=function(e){
        const dino=document.querySelector('.dino');
        dino.classList.add('dino-animate');
        
      setTimeout(()=>{
          dino.classList.remove('dino-animate');
      },701)
    }
    document.onkeydown=function(e){
        // console.log(e.keyCode);
        if(e.keyCode==32){
            audio.play()
            const dragon=document.querySelector('.dragon');
            dragon.classList.add('animation');
            console.log(dragon);
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
            // console.log(dinox);
            if(dinox>97 &&a=="desktop"){
                dino.style.left=(dinox-112)+"px"
            }
            else if(dinox>0 &&a=='tablet'){
                dino.style.left=(dinox-45)+"px";
            }
            else if(dinox>0 &&a=="mobilepart1"){
                dino.style.left=(dinox-38)+"px";
            }
        }
        else if(e.keyCode==39){
            dino=document.querySelector('.dino')
            dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
            // console.log(dinox);
            // let a='desktop';
            if(dinox<1106 && a=='desktop'){
                dino.style.left=(dinox+112)+"px"
            }
            else if(dinox<400 &&a=='tablet'){
                dino.style.left=(dinox+45)+"px";
            }
            else if(dinox<280 &&a=='mobilepart1'){
                dino.style.left=(dinox+40)+"px";
            }
           
        }
    }
}
let a="desktop"
movement(a)






desktop=setInterval(()=>{
    dino=document.querySelector('.dino');
    
    dragon=document.querySelector('.dragon')
    let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

    let ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'))
    let oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'))
    // console.log(dx,dy,ox,oy);
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    // console.log(offsetx,offsety);
    if (offsetx<175 && offsety<125) {
        musicSystem()
       
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

// javascript media queries
const mediaQuery = window.matchMedia('(max-width: 814px)')
console.log(mediaQuery);
// Check if the media query is true
if (mediaQuery.matches) {
    a='tablet';
    tablet=setInterval(()=>{
        dino=document.querySelector('.dino')
        dragon=document.querySelector('.dragon')
        clearInterval(desktop)
        let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

        let ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'))
        let oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'))

        offsetx=Math.abs(dx-ox)
        offsety=Math.abs(dy-oy)
        console.log(dx);
        if (offsetx<119 && offsety<75){
            musicSystem()
        }
        else if(offsetx<75 && value_score){
            score_print+=1;
            updatescore(score_print);
            value_score=false;
            setTimeout(()=>{
                value_score=true;
            },1000)
        }
    },100)
a="tablet"
movement(a);
    
}

const media2=window.matchMedia('(max-width:500px)')
if (media2.matches) {
    clearInterval(tablet)
    a="mobilepart1";
    movement(a);
    mobile=setInterval(()=>{
        dino=document.querySelector('.dino')
        dragon=document.querySelector('.dragon')
        clearInterval(desktop)
        let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

        let ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'))
        let oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'))

        offsetx=Math.abs(dx-ox)
        offsety=Math.abs(dy-oy)
        console.log(dx);
        console.log(offsetx);
        console.log(offsety);
        if (offsetx<75 && offsety<34){
            musicSystem()
        }
        else if(offsetx<100 && value_score){
            score_print+=1;
            updatescore(score_print);
            value_score=false;
            setTimeout(()=>{
                value_score=true;
            },1000)
        }

    },100)
}
// let dino=document.querySelector('.dino');
// console.log(dino);