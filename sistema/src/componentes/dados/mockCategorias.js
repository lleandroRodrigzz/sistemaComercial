export const categorias = [
    {
        "id": 1,
        "nomeCat": "Carnes",
        "tipo": "Alimenticio"
    },
    {
        "id": 2,
        "nomeCat": "Camiseta",
        "tipo": "Vestuario"
    },
    {
        "id": 3,
        "nomeCat": "Eletrônicos",
        "tipo": "Tecnologia"
    },
    {
        "id": 4,
        "nomeCat": "Livros",
        "tipo": "Educação"
    },
    {
        "id": 5,
        "nomeCat": "Serviços Mecânicos",
        "tipo": "Mecânico"
    }
];

export const clientes = [
    {
        "nome": "Orivaldo da Silva",
        "email": "orivalds@gmail.com",
        "cidade": "Taciba",
        "estado": "SP",
        "cpf": "123.456.789-10"
    },
    {
        "nome": "Ronaldo Fenomeno",
        "email": "ronaldo20@gmail.com",
        "cidade": "Londrina",
        "estado": "PR",
        "cpf": "115.446.881-11"
    },
    {
        "nome": "Maria da Silva",
        "email": "mariasilva@gmail.com",
        "cidade": "São Paulo",
        "estado": "SP",
        "cpf": "987.654.321-00"
    },
    {
        "nome": "João Pereira",
        "email": "joao_pereira@hotmail.com",
        "cidade": "Belo Horizonte",
        "estado": "MG",
        "cpf": "456.789.123-33"
    }
];

export const fornecedores = [
    {
        "nome": "Pedro Verduras",
        "categoria": "Alimenticio",
        "email": "pedroPPP@gmail.com",
        "cidade": "Presidente Prudente",
        "estado": "SP",
        "cnpj": "12.345.678/0001-99"
    },
    {
        "nome": "Hermes LTDA",
        "categoria": "Mecanico",
        "email": "Hltda2024@gmail.com",
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "cnpj": "33.474.555/0001-88"
    },
    {
        "nome": "MegaTech Ltda",
        "categoria": "Tecnologia",
        "email": "megatech@corp.com",
        "cidade": "Curitiba",
        "estado": "PR",
        "cnpj": "45.678.123/0001-77"
    },
    {
        "nome": "BookHouse Distribuidora",
        "categoria": "Educação",
        "email": "bookhouse@distrib.com",
        "cidade": "Porto Alegre",
        "estado": "RS",
        "cnpj": "98.765.432/0001-55"
    }
];

export const usuarios = [
    {
        "nomeUsuario": "lleandro_rodrigzz",
        "emailUsuario": "leandromarcoscasse@gmail.com",
        "senhaUsuario": "leandro064",
        "tipoUsuario": "Administrador"
    },
    {
        "nomeUsuario": "mate006644",
        "emailUsuario": "mateus064444@gmail.com",
        "senhaUsuario": "mateLoko1234",
        "tipoUsuario": "Comum"
    },
    {
        "nomeUsuario": "julia_guest",
        "emailUsuario": "julia_guest@empresa.com",
        "senhaUsuario": "juliafofinha_123",
        "tipoUsuario": "Convidado"
    },
    {
        "nomeUsuario": "carlos_vendas",
        "emailUsuario": "carlos_vendas@empresa.com",
        "senhaUsuario": "vendasSecretas",
        "tipoUsuario": "Comum"
    }
];

export const produtos = [
    {
        "codigo": 1,
        "descricao": "Camiseta",
        "precoCusto": 10.00,
        "precoVenda": 20.00,
        "qtdEstoque": 100,
        "urlImagem": "https://images.tcdn.com.br/img/img_prod/947450/camiseta_basic_strong_preto_malha_pesada_1053_1_03680dfa0aa04d53f062a170f8527091.jpg",
        "dataValidade": "31/12/2999"
    },
    {
        "codigo": 2,
        "descricao": "Blusa de algodão",
        "precoCusto": 18.00,
        "precoVenda": 36.00,
        "qtdEstoque": 50,
        "urlImagem": "https://http2.mlstatic.com/D_NQ_NP_999286-MLB54557477213_032023-O.webp",
        "dataValidade": "31/12/2999"
    },
    {
        "codigo": 3,
        "descricao": "Iphone 14",
        "precoCusto": 3250.00,
        "precoVenda": 4500.00,
        "qtdEstoque": 30,
        "urlImagem": "https://a-static.mlcdn.com.br/800x560/apple-iphone-14-128gb-meia-noite-61-12mp-ios-5g/magazineluiza/237184000/c2b18b81c92ac8e90f502be85d9f4169.jpg",
        "dataValidade": "31/12/2025"
    },
    {
        "codigo": 4,
        "descricao": "Notebook Acer Nitro 5",
        "precoCusto": 3000.00,
        "precoVenda": 7550.00,
        "qtdEstoque": 15,
        "urlImagem": "https://a-static.mlcdn.com.br/800x560/notebook-acer-nitro-5-an515-58-54uh-ci5-12a-gen-windows-11-home-8gb-512gb-rtx-3050-15-6-full-hd/aceroficial/1132/d4f4a47524a6f330ce8a7fc8e2e3280d.jpeg",
        "dataValidade": "31/12/2025"
    }
];

export const entregadores = [
    {
        id: "1",
        nome: "Carlos Mendes",
        cnh: "12345678900",
        fotoCnh: "https://horacampinas.com.br/wp-content/uploads/2021/12/1075700-df_jfrcz_abr_20170509_0458.jpg",
        veiculo: "Moto",
        placaV: "ABC-1234",
        capacidadeMax: "30kg"
    },
    {
        id: "2",
        nome: "Ana Souza",
        cnh: "98765432100",
        fotoCnh: "https://files.tecnoblog.net/wp-content/uploads/2018/01/cnh-smartphone.jpg",
        veiculo: "Carro",
        placaV: "XYZ-9876",
        capacidadeMax: "100kg"
    },
    {
        id: "3",
        nome: "João Pereira",
        cnh: "45678912300",
        fotoCnh: "https://www.radarlitoral.com.br/upload/upnoticia/1601757653.png",
        veiculo: "Van",
        placaV: "DEF-4567",
        capacidadeMax: "500kg"
    },
    {
        id: "4",
        nome: "Maria Oliveira",
        cnh: "32165498700",
        fotoCnh: "https://files.tecnoblog.net/wp-content/uploads/2018/01/cnh-smartphone.jpg",
        veiculo: "Caminhão",
        placaV: "GHI-7890",
        capacidadeMax: "1000kg"
    },
    {
        id: "5",
        nome: "Paulo Lima",
        cnh: "65478932100",
        fotoCnh: "https://plasticovirtual.com.br/wp-content/uploads/2017/12/cnh.jpg",
        veiculo: "Bicicleta",
        placaV: "JKL-1234",
        capacidadeMax: "10kg"
    }
];
