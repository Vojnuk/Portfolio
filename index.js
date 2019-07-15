
window.addEventListener('load', ()=>{
    if (document.querySelector('#under-construction')){
        let construction = document.querySelector('#under-construction');
        let changingElement = construction.querySelector('#changing-element');
        let buffer = changingElement.innerHTML;
        
        construction.addEventListener('mouseenter', ()=>{
            changingElement.textContent = "";
            //changingElement.textContent = "Page is under construction, although you can see it...";
            //changingElement.style.textAlign = "center";
            //changingElement.style.padding = "10px";
            
            let p = document.createElement('p');
            p.textContent = "Page is under construction, although you can see it...";
            p.style.display = "block";
            p.style.padding = "5px";
            p.style.textAlign = "center";
            changingElement.appendChild(p);
            

            let button = document.createElement('button');
            button.style.display = "block";
            button.type = "button";
            button.style.backgroundColor = "black";
            button.style.borderColor = "wheat";
            button.style.padding = "10px";
            button.style.margin = "10px auto";
            button.style.borderRadius = "10%";

            let anchor = document.createElement('a');
            anchor.href = "https://immos-client.herokuapp.com/";
            anchor.target = "_blank";
            anchor.rel = "noreferrer noopener";
            anchor.textContent = "Go to page.";
        
            button.appendChild(anchor);
            changingElement.appendChild(button); 
        });

        construction.addEventListener('mouseleave', ()=>{
            changingElement.innerHTML = buffer;
        });
    }
    
});