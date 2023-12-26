const navig = document.querySelector('#navig');
const navigbtn = document.querySelector('#navibtn');
const loadmore = document.querySelector('#loadmore');
const fgtPas = document.querySelector('#fgt-pw');


navigbtn.addEventListener('click', ()=>{
    if (navig.classList.contains('hidden')){
        navig.classList.remove('hidden')
    }
    else{
        navig.classList.add('hidden')
    } 
})
//  fgtPas.addEventListener('click', ()=>{
//     location.href="forgetpw.html";
// })

