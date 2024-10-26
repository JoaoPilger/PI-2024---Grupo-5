const spriteElement = document.getElementById('sprite');
const empurrandoFrames = [
    './midia/empurrando/1.png',
    './midia/empurrando/2.png',
    './midia/empurrando/3.png',
    './midia/empurrando/4.png',
    './midia/empurrando/5.png',
    './midia/empurrando/6.png',
    './midia/empurrando/7.png',
    './midia/empurrando/8.png',
    './midia/empurrando/9.png',
    './midia/empurrando/10.png',
    './midia/empurrando/11.png',
    './midia/empurrando/12.png',
    './midia/empurrando/13.png',
    './midia/empurrando/14.png',
    './midia/empurrando/15.png',
    './midia/empurrando/16.png',
    './midia/empurrando/17.png',
    './midia/empurrando/18.png',
    './midia/empurrando/19.png',
    './midia/empurrando/20.png',
    './midia/empurrando/21.png',
    './midia/empurrando/22.png',
    './midia/empurrando/23.png',
    './midia/empurrando/24.png',
    './midia/empurrando/25.png',
    './midia/empurrando/26.png',
    './midia/empurrando/27.png',
    './midia/empurrando/28.png',
    './midia/empurrando/29.png',
    './midia/empurrando/30.png',
    './midia/empurrando/31.png',
    './midia/empurrando/32.png',

];

const doublebicepsFrames = [
    './midia/doublebiceps/1.1.png',
    './midia/doublebiceps/1.2.png',
    './midia/doublebiceps/1.3.png',
    './midia/doublebiceps/1.4.png',
    './midia/doublebiceps/1.5.png',
    './midia/doublebiceps/1.6.png',
    './midia/doublebiceps/1.7.png',
    './midia/doublebiceps/1.8.png',
    './midia/doublebiceps/1.9.png',
    './midia/doublebiceps/1.10.png',
    './midia/doublebiceps/1.11.png',
    './midia/doublebiceps/1.12.png',
    './midia/doublebiceps/1.13.png',
    './midia/doublebiceps/1.14.png',
    './midia/doublebiceps/1.15.png',
    './midia/doublebiceps/1.16.png',
    './midia/doublebiceps/1.17.png',
    './midia/doublebiceps/1.18.png',
    './midia/doublebiceps/1.19.png',
    './midia/doublebiceps/1.20.png',

];

const descansarFrames = [
    './midia/descansar/2.1.png',
    './midia/descansar/2.2.png',

];
let currentEmpurrandoFrame = 0;  
let currentDoubleBicepsFrame = 0; 
let currentDescansarFrame = 0;
const fpsEmpurrando = 12;
const fpsDoubleBiceps = 7;
const fpsDescansar = 2;
const intervalEmpurrando = 1000 / fpsEmpurrando;
const intervalDoubleBiceps = 1000 / fpsDoubleBiceps;
const intervalDescansar = 1000 / fpsDescansar;

function animate(frames, currentFrame, interval) {
    spriteElement.src = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length; 
    return currentFrame;
}

function runAnimation(frames, currentFrame, interval, isDoubleBiceps = false, callback = null) {
    spriteElement.src = frames[currentFrame];
    spriteElement.style.bottom = isDoubleBiceps ? '-62px' : '-32px'; 
    currentFrame++;

    if (currentFrame < frames.length) {
        setTimeout(() => runAnimation(frames, currentFrame, interval, isDoubleBiceps, callback), interval);
    } else if (callback) {
        callback();
    }
}

const empurrandoAnimation = setInterval(() => {
    currentEmpurrandoFrame = animate(empurrandoFrames, currentEmpurrandoFrame, intervalEmpurrando);
}, intervalEmpurrando);

const switchTime = 12000; 

setTimeout(() => {
    clearInterval(empurrandoAnimation); 
    currentDoubleBicepsFrame = 0; 
    runAnimation(doublebicepsFrames, currentDoubleBicepsFrame, intervalDoubleBiceps, true, () => {
  
        currentDescansarFrame = 0; 
        runInfiniteDescansarAnimation();
    });
}, switchTime);


function runInfiniteDescansarAnimation() {
    currentDescansarFrame = animate(descansarFrames, currentDescansarFrame, intervalDescansar);
    spriteElement.style.bottom = '-62px'; 
    setTimeout(runInfiniteDescansarAnimation, intervalDescansar);
}
