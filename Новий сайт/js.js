const front=document.querySelector('.front');
const back=document.querySelector('.back');
const button=document.querySelector('.button a');
button.addEventListener('click',far);
function far(event){
    event.preventDefault();
    front.classList.add('active');
    back.classList.add('active1')
}
const two_fon=document.querySelector('.kinez');
const two_button=document.querySelector('.two_bytton');
two_button.addEventListener('click',fas);
function fas(event){
    event.preventDefault();
    two_fon.classList.add('final');
}