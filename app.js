key_count=0;
score=0;
value=true;
// window.alert(`welcome to dino game press space bar to start the game. use left arrow key to move left and right arrow key to move right`)
let audio=new Audio('music.mp3')
audio.loop=true;
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
        setTimeout(()=>{
            dino.classList.remove('dino-jump')
        },800)
        }
        
    }
    else if(e.keyCode==39){
        let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino=document.querySelector('.dino')
        if (dinox<1232) {
            dino.style.left=(dinox+112)+"px"
        }
    }
    else if(e.keyCode==37){
        let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino=document.querySelector('.dino')
        if (dinox>0) {
            dino.style.left=(dinox-112)+"px"
        }
    }
}
laptop=setInterval(()=>{
    dino=document.querySelector('.dino');
    
    dragon=document.querySelector('.dragon')
    let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

    let ox=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'))
    let oy=parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'))
    console.log(dx,dy,ox,oy);
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    // console.log(offsetx);
    // console.log(offsety);
    if (offsetx<120 && offsety<52) {
        dragon.classList.remove('animation')
        key_count=0;
      
        
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
    let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino=document.querySelector('.dino')
    if (dinox<1232) {
        dino.style.left=(dinox+112)+"px"
    }
  });
let leftBtn=document.getElementById('mybutton1');
leftBtn.addEventListener('click',function(e){
    let dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino=document.querySelector('.dino')
    if (dinox>0) {
        dino.style.left=(dinox-112)+"px"
    }
})
