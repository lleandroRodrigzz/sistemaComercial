const urlBase = "https://bcc-backend-lp-2-eta.vercel.app/produtos"; //Corrigido

export async function gravarProduto(produto) {
    const resposta = await fetch(urlBase, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"      //Gravar Produto funcionando com o Frontend e Backend
        },
        "body": JSON.stringify(produto)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function alterarProduto(produto) {
    const resposta = await fetch(urlBase + "/" + produto.codigo, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(produto)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function deletarProduto(produto) {
    const resposta = await fetch(urlBase + "/" + produto.codigo, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(produto)
    });
    const resultado = await resposta.json();
    return resultado;

}

export async function consultarProduto() {
    const resposta = await fetch(urlBase, {
        "method": "GET"
    });
    const resultado = await resposta.json();
    return resultado;
}