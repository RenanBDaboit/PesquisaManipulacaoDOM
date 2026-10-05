// ==========================================
// 1. SELECIONANDO ELEMENTOS DO DOM
// ==========================================

// getElementById()
const titulo = document.getElementById("titulo");
const formulario = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("btn-adicionar");

// querySelector()
const lista = document.querySelector("[data-list]");


// querySelectorAll()
// Neste momento ainda não existem tarefas,
// então a lista estará vazia.
const tarefas = document.querySelectorAll(".tarefa");

console.log("Título:", titulo);
console.log("Formulário:", formulario);
console.log("Input:", input);
console.log("Botão:", botaoAdicionar);
console.log("Lista:", lista);
console.log("Tarefas:", tarefas);


// ==========================================
// 2. EVENTO DE SUBMIT
// ==========================================

formulario.addEventListener("submit", function(event) {

    // Impede o comportamento padrão do formulário
    event.preventDefault();

    console.log("Formulário enviado!");

    // ==========================================
    // 3. CAPTURANDO O VALOR DO INPUT
    // ==========================================

    const texto = input.value.trim();

    console.log("Texto digitado:", texto);


    // ==========================================
    // 4. VALIDAÇÃO
    // ==========================================

    // Impede tarefas vazias ou apenas com espaços
    if (texto === "") {

        alert("Digite uma tarefa!");

        input.focus();

        return;
    }


    // ==========================================
    // 5. CRIANDO UM NOVO ELEMENTO
    // ==========================================

    const item = document.createElement("li");


    // ==========================================
    // 6. ADICIONANDO CLASSE
    // ==========================================

    item.classList.add("tarefa");


    // ==========================================
    // 7. ADICIONANDO O TEXTO
    // ==========================================

    item.textContent = texto;


    // ==========================================
    // 8. CRIANDO BOTÃO DE CONCLUIR
    // ==========================================

    const botaoConcluir = document.createElement("button");

    botaoConcluir.textContent = "Concluir";

    botaoConcluir.classList.add("btn-concluir");


    // ==========================================
    // 9. CRIANDO BOTÃO DE DELETAR
    // ==========================================

    const botaoDeletar = document.createElement("button");

    botaoDeletar.textContent = "Excluir";

    botaoDeletar.classList.add("btn-deletar");


    // ==========================================
    // 10. EVENTO PARA CONCLUIR
    // ==========================================

    botaoConcluir.addEventListener("click", function() {

        item.classList.toggle("done");

    });


    // ==========================================
    // 11. EVENTO PARA DELETAR
    // ==========================================

    botaoDeletar.addEventListener("click", function() {

        item.remove();

    });


    // ==========================================
    // 12. ADICIONANDO OS BOTÕES AO ITEM
    // ==========================================

    item.appendChild(botaoConcluir);

    item.appendChild(botaoDeletar);


    // ==========================================
    // 13. ADICIONANDO O ITEM À LISTA
    // ==========================================

    lista.appendChild(item);


    // ==========================================
    // 14. LIMPAR O INPUT
    // ==========================================

    input.value = "";


    // ==========================================
    // 15. COLOCAR O CURSOR NOVAMENTE NO INPUT
    // ==========================================

    input.focus();

});