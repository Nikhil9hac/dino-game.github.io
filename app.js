key_count=0;
score=0;
touch_count=0;
value=true;
position_change="laptop"

function timming(){
    let dino=document.querySelector('.dino')
    dino.classList.add('dino-jump')
    if (a=="laptop") {
        setTimeout(()=>{
            dino.classList.remove('dino-jump')
        },800)
    } 
    else if(a=="tablet"){
        setTimeout(()=>{
            dino.classList.remove('dino-jump')
        },1200) 
    }
    else if(a=="mobile"){
        setTimeout(()=>{
            dino.classList.remove('dino-jump')
        },1400) 
    }
}

function positiontoleft(){
    let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    let scoreboard=document.querySelector('.scoreboard')
    let scoreboardx=parseInt(window.getComputedStyle(scoreboard,null).getPropertyValue('left'));
    console.log(scoreboardx)
    mathposition=110;
    positionfixed=scoreboardx-mathposition
    dino=document.querySelector('.dino')
    if (dinox<positionfixed&&position_change=="laptop") {
        dino.style.left=(dinox+112)+"px"
    }
    else if(dinox<positionfixed&&position_change=="tablet"){
        dino.style.left=(dinox+58)+"px"
    }
    else if(dinox<positionfixed&&position_change=="mobile"){
        dino.style.left=(dinox+30)+"px"
    }
}
function positiontoright(){
    let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino=document.querySelector('.dino')
        if (dinox>0) {
            dino.style.left=(dinox-112)+"px"
        }
}
let a="laptop";
// window.alert(`welcome to dino game press space bar to start the game. use left arrow key to move left and right arrow key to move right`)
let audio=new Audio('music.mp3')
audio.loop=true;
document.ondblclick=function(e){
    notice=document.querySelector('.notice')
        notice.innerHTML="Welcome To Dino Game"
        // key_count+=1;
        // console.log(key_count);
        
}
document.onclick=function(e){
    touch_count+=1;
    if (touch_count==1) {
        let dragon=document.querySelector('.dragon');
        dragon.classList.add('animation')
     }
    else {
            let dino=document.querySelector('.dino')
            dino.classList.add('dino-jump')
            timming()
         } 
         console.log(touch_count);
}
document.onkeydown=function(e){
    audio.play()
    console.log(e.keyCode);
    if(e.keyCode==32){ 
        notice=document.querySelector('.notice')
        notice.innerHTML="Welcome To Dino Game"
        key_count+=1;
        console.log(key_count);
        if (key_count==1) {
            let dragon=document.querySelector('.dragon');
        dragon.classList.add('animation')
         } 
         else {
            let dino=document.querySelector('.dino')
            dino.classList.add('dino-jump')
            timming()
        }
        
    }
    else if(e.keyCode==39){
      positiontoleft()
    }
    else if(e.keyCode==37){
     positiontoright()   
    }
}
laptop=setInterval(()=>{
    dino=document.querySelector('.dino');
    
    dragon=document.querySelector('.dragon')
    let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

    let ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'))
    let oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'))
    // console.log(dx,dy,ox,oy);
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    // console.log(offsetx);
    // console.log(offsety);
    if (offsetx<120 && offsety<52) {
        dragon.classList.remove('animation')
        key_count=0;
        touch_count=0;
        notice=document.querySelector('.notice')
        notice.innerHTML=`<span >gameover-Double-tap-reload</span><br> <p class="score-design" > your score ${score}</p> <br> <p class="name" > created by sridhar</p>`
        score=0;
        score.innerHTML=0;
        audio.pause()
        let audio2=new Audio('gameover.mp3')
        audio2.play()
        setTimeout(()=>{
            audio2.pause()
            audio.play()
        },1500)
    }
    else if(offsetx<140 &&value){
        score+=1
        input_score=document.querySelector('.result');
        input_score.innerHTML=score;
        value=false;
        setTimeout(()=>{
            value=true;
        },1000)
    }
},100)

let rightBtn=document.getElementById("mybutton2");
// console.log(right);
rightBtn.addEventListener('click', function (e) {
    positiontoleft()
  });
let leftBtn=document.getElementById('mybutton1');
leftBtn.addEventListener('click',function(e){
   
    positiontoright()
})

const media=window.matchMedia("(max-width:667px)")
if(media.matches){
    clearInterval(laptop)
    tablet=setInterval(()=>{
        dino=document.querySelector('.dino');
        
        dragon=document.querySelector('.dragon')
        let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))
    
        let ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'))
        let oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'))
        console.log(dx,dy,ox,oy);
        offsetx=Math.abs(dx-ox);
        offsety=Math.abs(dy-oy);
        console.log(offsetx);
        console.log(offsety);
        if (offsetx<110 && offsety<40) {
            dragon.classList.remove('animation')
            key_count=0;
            touch_count=0;
          
            
            notice.innerHTML=`<span >gameover-Double-tap-reload</span><br> <p class="score-design" > your score ${score}</p> <br> <p class="name" > created by sridhar</p>`
            score=0;
            score.innerHTML=0;
            audio.pause()
            let audio2=new Audio('gameover.mp3')
            audio2.play()
            setTimeout(()=>{
                audio2.pause()
                audio.play()
            },1500)
        }
        else if(offsetx<140 &&value){
            score+=1
            input_score=document.querySelector('.result');
            input_score.innerHTML=score;
            value=false;
            setTimeout(()=>{
                value=true;
            },1000)
        }
    },100)
    a="tablet";
    position_change="tablet";
}
const media1=window.matchMedia("(max-width:420px)")
if (media1.matches) {
    console.log(media1);
    a="mobile";
    position_change="mobile"
    clearInterval(tablet)
    mobile1=setInterval(()=>{
        dino=document.querySelector('.dino');
        
        dragon=document.querySelector('.dragon')
        let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))
    
        let ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'))
        let oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'))
        console.log(dx,dy,ox,oy);
        offsetx=Math.abs(dx-ox);
        offsety=Math.abs(dy-oy);
        console.log(offsetx);
        console.log(offsety);
        if (offsetx<95 && offsety<40) {
            dragon.classList.remove('animation')
            key_count=0;
            touch_count=0;
          
            
            notice.innerHTML=`<span >gameover-Double-tap-reload</span><br> <p class="score-design" > your score ${score}</p> <br> <p class="name" > created by sridhar</p>`
            score=0;
            score.innerHTML=0;
            audio.pause()
            let audio2=new Audio('gameover.mp3')
            audio2.play()
            setTimeout(()=>{
                audio2.pause()
                audio.play()
            },1500)
        }
        else if(offsetx<140 &&value){
            score+=1
            input_score=document.querySelector('.result');
            input_score.innerHTML=score;
            value=false;
            setTimeout(()=>{
                value=true;
            },1000)
        }
    },100)
    }

