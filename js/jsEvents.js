import {adicionarItem,removerItem} from "./CriarDeletarItensUpdate.js";

let btndel = document.querySelectorAll(".trash");

document.querySelector("#addintemLista").addEventListener("click", () =>{
    
    let item = document.querySelector("article input");

    let span = document.querySelector("nav span"); 



    if(item.value.trim().length > 0){
        const div = document.querySelector("#cntlista"); 
        let additm = adicionarItem(item.value.trim());
        span.innerText = document.querySelectorAll("ul li").length;
        div.scrollTo(0,div.scrollHeight+47);

    }


    btndel = document.querySelectorAll("li i");
        
    btndel.forEach(botao =>{

        botao.addEventListener("click",({target}) =>{

            let delitm = removerItem(target);
            span.innerText = document.querySelectorAll("ul li").length;
        });    
    });

    
    let lista = document.querySelectorAll("li input");

lista.forEach(node =>{
  
    node.addEventListener("keydown",({keyCode,target}) =>{
    
        if(keyCode === 13){
            
            target.previousElementSibling.innerText = target.value;
            
            target.classList.remove("showhideinput");
            target.focused == false;
        }
    });
    
    node.addEventListener("blur",({target})=>{
        
        target.classList.remove("showhideinput");
        target.focused == false;

    });
    
});

});

document.addEventListener("click",({target}) =>{

    if(target.nodeName === "LABEL"){

        target.nextElementSibling.classList.add("showhideinput");
        target.nextElementSibling.value = target.innerText;
        target.nextElementSibling.focus();    
    }
     
});

