const urlBase = "https://bcc-backend-lp-2-eta.vercel.app/usuarios";   

export async function gravarUsuario(usuario) {
    const resposta = await fetch(urlBase, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(usuario)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function alterarUsuario(usuario) {
    const resposta = await fetch(urlBase + "/" + usuario.codigo, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(usuario)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function deletarUsuario(usuario) {
    const resposta = await fetch(urlBase + "/" + usuario.codigo, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(usuario)
    });
    const resultado = await resposta.json();
    return resultado;

}

export async function consultarUsuario() {
    const resposta = await fetch(urlBase, {
        "method": "GET"
    });
    const resultado = await resposta.json();
    return resultado;

}