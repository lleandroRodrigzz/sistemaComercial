const urlBase = "https://bcc-backend-lp-2-eta.vercel.app/categorias";   //Corrigido

export async function gravarCategoria(categoria) {
    const resposta = await fetch(urlBase, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(categoria)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function alterarCategoria(categoria) {
    const resposta = await fetch(urlBase + "/" + categoria.codigo, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(categoria)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function deletarCategoria(categoria) {
    const resposta = await fetch(urlBase + "/" + categoria.codigo, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(categoria)
    });
    const resultado = await resposta.json();
    return resultado;

}

export async function consultarCategoria() {
    const resposta = await fetch(urlBase, {
        "method": "GET"
    });
    const resultado = await resposta.json();
    return resultado;

}