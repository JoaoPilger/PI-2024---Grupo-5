const spriteElement = document.getElementById('sprite');
const empurrandoFrames = [
    './imagens/empurrando/1.png',
    './imagens/empurrando/2.png',
    './imagens/empurrando/3.png',
    './imagens/empurrando/4.png',
    './imagens/empurrando/5.png',
    './imagens/empurrando/6.png',
    './imagens/empurrando/7.png',
    './imagens/empurrando/8.png',
    './imagens/empurrando/9.png',
    './imagens/empurrando/10.png',
    './imagens/empurrando/11.png',
    './imagens/empurrando/12.png',
    './imagens/empurrando/13.png',
    './imagens/empurrando/14.png',
    './imagens/empurrando/15.png',
    './imagens/empurrando/16.png',
    './imagens/empurrando/17.png',
    './imagens/empurrando/18.png',
    './imagens/empurrando/19.png',
    './imagens/empurrando/20.png',
    './imagens/empurrando/21.png',
    './imagens/empurrando/22.png',
    './imagens/empurrando/23.png',
    './imagens/empurrando/24.png',
    './imagens/empurrando/25.png',
    './imagens/empurrando/26.png',
    './imagens/empurrando/27.png',
    './imagens/empurrando/28.png',
    './imagens/empurrando/29.png',
    './imagens/empurrando/30.png',
    './imagens/empurrando/31.png',
    './imagens/empurrando/32.png',

];

const doublebicepsFrames = [
    './imagens/doublebiceps/1.1.png',
    './imagens/doublebiceps/1.2.png',
    './imagens/doublebiceps/1.3.png',
    './imagens/doublebiceps/1.4.png',
    './imagens/doublebiceps/1.5.png',
    './imagens/doublebiceps/1.6.png',
    './imagens/doublebiceps/1.7.png',
    './imagens/doublebiceps/1.8.png',
    './imagens/doublebiceps/1.9.png',
    './imagens/doublebiceps/1.10.png',
    './imagens/doublebiceps/1.11.png',
    './imagens/doublebiceps/1.12.png',
    './imagens/doublebiceps/1.13.png',
    './imagens/doublebiceps/1.14.png',
    './imagens/doublebiceps/1.15.png',
    './imagens/doublebiceps/1.16.png',
    './imagens/doublebiceps/1.17.png',
    './imagens/doublebiceps/1.18.png',
    './imagens/doublebiceps/1.19.png',
    './imagens/doublebiceps/1.20.png',

];

const descansarFrames = [
    './imagens/descansar/2.1.png',
    './imagens/descansar/2.2.png',

];
let currentEmpurrandoFrame = 0;  
let currentDoubleBicepsFrame = 0; 
let currentDescansarFrame = 0;
const fpsEmpurrando = 12;
const fpsDoubleBiceps = 7;
const fpsDescansar = 2; // You can adjust this
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
    spriteElement.style.bottom = isDoubleBiceps ? '-187px' : ' -160px';
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

const switchTime = 14600; 

setTimeout(() => {
    clearInterval(empurrandoAnimation); 
    currentDoubleBicepsFrame = 0; 
    runAnimation(doublebicepsFrames, currentDoubleBicepsFrame, intervalDoubleBiceps, true, () => {
        currentDescansarFrame = 0; 
        runInfiniteDescansarAnimation();
    });
}, switchTime);

ly
function runInfiniteDescansarAnimation() {
    currentDescansarFrame = animate(descansarFrames, currentDescansarFrame, intervalDescansar);
    spriteElement.style.bottom = '-187px';
    setTimeout(runInfiniteDescansarAnimation, intervalDescansar);
}
