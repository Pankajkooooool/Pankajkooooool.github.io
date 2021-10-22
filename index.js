score = 0;
cross =true;
isgameOver=false;
death = new Audio('death.wav');
jump = new Audio('jump.wav');
document.onkeydown = function(e){
    // console.log("key code is:", e.keyCode)
   
    if(e.keyCode==38){
    mc = document.querySelector('.mc');
    mc.classList.add('animateMc');
    setTimeout(() => {
        mc.classList.remove('animateMc');
    }, 500);
    jump.play();
}
    if(e.keyCode==39){
    mc = document.querySelector('.mc');
    dx = parseInt(window.getComputedStyle(mc,null).getPropertyValue('left'));
    mc.style.left=dx +112+'px';
    mc.classList.remove('reverse');
}
    if(e.keyCode==37){
    mc = document.querySelector('.mc');
    dx = parseInt(window.getComputedStyle(mc,null).getPropertyValue('left'));
    mc.style.left=dx -112+'px';
    mc.classList.add('reverse');
}
}
setInterval(() => {
    mc = document.querySelector('.mc');
    
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(mc,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mc,null).getPropertyValue('top'));

    

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    // console.log(offsetX,offsetY)
    if(offsetX  < 102 && offsetY<89 &&isgameOver==false){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
        // document.querySelector('.gameContainer').style.visibility='hidden';
        // document.body.style.backgroundImage = 'gameover.gif'
        isgameOver=true;
        setTimeout(() => {
            death.play();
        }, 100);
        
    }
    else if(cross && offsetX<144 ){
        if(isgameOver==false){

            score+=1;
        }
        updatescore(score);
        cross = false
        setTimeout(() => {
            cross= true
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            if(aniDur<2.3){
            }
            else if(aniDur<3.0){

            }
            else{
                newDur = aniDur-0.1;
       obstacle.style.animationDuration = newDur+"s";
    //    console.log('the speed is now',newDur)
            }
       
        }, 500);
        
    }
    
}, 10);
function updatescore(score){
   scorebox = document.getElementById('scoreCont');
   scorebox.innerHTML = "Score:"+score;

}