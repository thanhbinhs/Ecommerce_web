const bar = document.getElementById('bar');
const nav = document.getElementsByClassName('header__navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav[0].classList.toggle('active');
    });

if(close){
    close.addEventListener('click', () => {
        nav[0].classList.remove('active');
    });
}
}