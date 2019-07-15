
document.addEventListener('DOMContentLoaded', ()=>{
    let construction = document.querySelector('#under-construction');

    let buffer;
    construction.addEventListener('mouseenter', ()=>{
        buffer = construction.innerHTML;
        console.log(buffer);
        construction.textContent = "";
        let anchor = document.createElement('a');
        anchor.href = "https://immos-client.herokuapp.com/";
        anchor.target = "_blank";
        anchor.rel = "noreferrer noopener";
        anchor.textContent = "Page is under construction, although you can see it...";
        construction.appendChild(anchor);
    });

    construction.addEventListener('mouseleave', ()=>{
        construction.textContent = "";
        construction.innerHTML = buffer;
    });
    
});