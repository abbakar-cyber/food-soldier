const burger= document.querySelector('#burger');
const menu= document.querySelector('#menu');

burger.addEventListener('click' , () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})
const burger1= document.querySelector('#burger');
const menu1= document.querySelector('#menu1');

burger1.addEventListener('click' , () => {
    if (menu1.classList.contains('hidden')){
        menu1.classList.remove('hidden');
    } else {
        menu1.classList.add('hidden');
    }
})

const burger2= document.querySelector('#burger');
const menu2= document.querySelector('#menu2');

burger2.addEventListener('click' , () => {
    if (menu2.classList.contains('hidden')){
        menu2.classList.remove('hidden');
    } else {
        menu2.classList.add('hidden');
    }
})