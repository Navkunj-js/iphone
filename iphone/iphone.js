let power = document.querySelector('.power');
let back = document.querySelector('.back');
let outerSec = document.querySelector('.outerSec');
let outerSecOff = document.querySelector('.outerSecOff');
let wall = document.querySelector('.wallpaper');

power.addEventListener('click',(e)=>{
    outerSec.classList.toggle('outerSecOff');

});
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});
//block selection
wall.addEventListener("selectstart", function(event) {
    event.preventDefault();
});
