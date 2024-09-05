console.log(dados);

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let resultados = ""

for (let dado of dados) { //para cada dado dentro da lista de dados
    resultados += `
    <div class="item-resultado">
        <h2 class="link-racao">
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
            <p class="descrição">${dado.descricao}</p>
    </div>
`
}

section.innerHTML = resultados
}