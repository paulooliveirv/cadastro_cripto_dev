
function laco(){

    var quantidade = document.getElementById("quantidade").value;
    const nomes = [document.getElementById('nomes').value];
    const idade = [document.getElementById('idade').value];


    let registra_nome = "";

    for (var i = 0; i < quantidade; i++){
        registra_nome += [`${nomes}${idade}<br> `];
        console.log(registra_nome)
    }
    document.getElementById("nomesEIdades").innerHTML = registra_nome;
}

