window.addEventListener('load', ()=>{

const nav = document.getElementById('navigation');
nav.addEventListener('mouseenter', ()=>{
    let elems = document.body.getElementsByTagName('*');
    elems = Array.from(elems);
    elems.forEach( elem => {
        elem.classList.add('testBorder');
    });
    
})

nav.addEventListener('mouseleave', ()=>{
    let elems = document.body.getElementsByTagName('*');
    elems = Array.from(elems);
    elems.forEach( elem => {
        elem.classList.remove('testBorder');
    });
    
})




})