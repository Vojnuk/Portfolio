window.addEventListener('load', ()=>{

const button = document.getElementById('testButton');
button.addEventListener('click', ()=>{
    let elems = document.body.getElementsByTagName('*');
    elems = Array.from(elems);
    elems.forEach( elem => {
        elem.classList.toggle('testBorder');
    });
    
})





})