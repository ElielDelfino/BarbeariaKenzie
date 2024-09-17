const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],

    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
}

function buscaCortePorId(id) {
    let corte = barbearia.cortes;
    for (let i = 0; i < corte.length; i++) {
        if (corte[i].id === id) {
            return corte[i];
        }
    } return "Corte não encontrado";
}
function buscaBarbaPorId(id) {
    let barba = barbearia.barbas;
    for (let i = 0; i < barba.length; i++) {
        if (barba[i].id === id) {
            return barba[i];
        }
    } return "Barba não encontrada";
}

function verificaStatusBarbearia() {
    if (barbearia.estaAberto) {
        return "Estamos abertos";
    }
    return "Estamos fechados";
}

function retornaTodosCortes() {
    let todosOsCortes = barbearia.cortes;
    let resultado = [];
    for (i = 0; i < todosOsCortes.length; i++) {
        resultado.push(todosOsCortes[i]);

    }
    return resultado;
}

function retornaTodasBarbas() {
    let todasAsBarbas = barbearia.barbas;
    let resultado = [];
    for (i = 0; i < todasAsBarbas.length; i++) {
        resultado.push(todasAsBarbas[i]);

    }
    return resultado;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    let corte = buscaCortePorId(corteId);
    let barba = buscaBarbaPorId(barbaId);
    const pedido = {
        nome: "",
        pedidoCorte: "",
        pedidoCortePreco: "",
        pedidoBarba: "",
        pedidoBarbaPreco: ""
    };
    pedido.nome = nomeCliente;
    pedido.pedidoCorte = corte.tipo;
    pedido.pedidoCortePreco = corte.valor;
    pedido.pedidoBarba = barba.tipo;
    pedido.pedidoBarbaPreco = barba.valor;
    return pedido;
}

function atualizarServico(lista, id, valor, tipo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].valor = valor;
            lista[i].tipo = tipo;
        }
    }
    return lista;
}

function calculaTotal(pedido) {
    let valorTotal = pedido.pedidoBarbaPreco + pedido.pedidoCortePreco;
    return valorTotal;
}


