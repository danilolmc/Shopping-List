const criarElemento = (elemento,valor) =>{

    let node = document.createElement(elemento);
    let nodeText = document.createTextNode(valor);
    node.appendChild(nodeText);
    
    return node;
    

}

export const removerItem = (item) =>{

    item.parentElement.remove();
}

export const adicionarItem = (item) =>{

    let liPai = criarElemento("li","")
    let label = criarElemento("label",item)
    let input = criarElemento("input","")
    let delbtn = criarElemento("i","");
    delbtn.className = "fa fa-trash trash";
    
    liPai.appendChild(label);
    liPai.appendChild(input);
    liPai.appendChild(delbtn);

    document.querySelector("ul").appendChild(liPai);

}