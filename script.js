score = 0;
cross = true;

audiogo =new Audio('collidemusic.mp3');
audio =new Audio('backmusic.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode)
    if (e.keyCode == 38) {
        boy = document.querySelector('.boy');
        boy.classList.add('animateboy');
        setTimeout(() => {
            boy.classList.remove('animateboy')
        }, 700);
    }
    if (e.keyCode == 39) {
        boy = document.querySelector('.boy');
        boyx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = boyx + 112 + "px";
    }
    if (e.keyCode == 37) {
        boy = document.querySelector('.boy');
        boyx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = (boyx - 112) + "px";
    }
}
setInterval(() => {
    boy = document.querySelector('.boy');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');


    bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetx = Math.abs(bx - ox);
    offsety = Math.abs(by - oy);

    if (offsetx < 93 && offsety < 52) {
        gameover.innerHTML = "Game Over - Reload to play again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1500);

    }
    else if(offsetx< 73 && cross) {
        score+=1;
        updatescore(score);
           cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
         anidur =  parseFloat(window.getComputedStyle(boy, null).getPropertyValue('animation-duration'));
         newdur = (anidur-0.1);
         obstacle.style.animationDuration = newdur + 's';  
        }, 500);
   }

}, 10);

function updatescore(score) {
    scorecont.innerHTML = "your score:"  +score
}







