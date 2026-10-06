# Projeto: Lista de Tarefas Modular

**Curso:** Técnico em Informática para a Internet

**Dupla:** Renan e Gustavo

---

## Diário de Aprendizagem e Documentação

Este projeto foi desenvolvido com o objetivo de praticar conceitos de **JavaScript, DOM, eventos, manipulação de elementos, módulos ES6 e integração entre JavaScript e CSS**.

---

## 1. Estrutura do DOM e Seletores

### Conceito de DOM e Nós

**Explicado por:** Renan

O **DOM (Document Object Model)** é uma representação do documento HTML em forma de uma árvore de elementos. O navegador transforma o código HTML em objetos que podem ser acessados e modificados pelo JavaScript.

A estrutura básica pode ser representada da seguinte maneira:

```text
window
└── document
    └── html
        ├── head
        └── body
            ├── h1
            ├── form
            └── ul
```

Cada elemento da página é considerado um **nó (node)** dentro dessa árvore. Existem diferentes tipos de nós, como nós de elementos e nós de texto.

Por meio do DOM, o JavaScript consegue:

* Acessar elementos HTML;
* Alterar conteúdos;
* Criar novos elementos;
* Remover elementos;
* Adicionar ou remover classes;
* Alterar propriedades dos elementos.

---

### Métodos de Seleção

**Explicado por:** Gustavo

Os seletores são utilizados para localizar elementos dentro do DOM.

O método `querySelector()` retorna o primeiro elemento que corresponde ao seletor informado:

```javascript
const titulo = document.querySelector("#titulo");
```

O método `querySelectorAll()` retorna todos os elementos que correspondem ao seletor:

```javascript
const tarefas = document.querySelectorAll(".tarefa");
```

Também podemos utilizar `getElementById()` para encontrar um elemento pelo seu `id`:

```javascript
const input = document.getElementById("input-tarefa");
```

No projeto também utilizamos um atributo personalizado `data-*`:

```html
<ul data-list></ul>
```

Esse elemento pode ser selecionado utilizando:

```javascript
const lista = document.querySelector("[data-list]");
```

Os seletores permitem que o JavaScript encontre os elementos necessários para realizar as operações da aplicação.

---

## 2. Eventos e Manipulação de Inputs

### Escutadores de Eventos e `preventDefault()`

**Explicado por:** Renan

O método `addEventListener()` permite que o JavaScript fique observando um determinado evento. Quando o evento acontece, uma função é executada.

Exemplo:

```javascript
formulario.addEventListener("submit", function(event) {
    // código executado quando o formulário é enviado
});
```

No projeto utilizamos o evento `submit` para detectar quando o usuário tenta adicionar uma nova tarefa.

Por padrão, o navegador pode executar o comportamento padrão do formulário, como recarregar ou enviar a página. Para impedir isso, utilizamos:

```javascript
event.preventDefault();
```

Dessa forma, o JavaScript consegue controlar o formulário sem que a página seja recarregada.

Também utilizamos `addEventListener()` nos botões para detectar os cliques do usuário.

---

### Captura e Limpeza de Inputs

**Explicado por:** Gustavo

A propriedade `.value` permite capturar o conteúdo digitado pelo usuário em um campo `<input>`.

```javascript
const texto = input.value;
```

Para remover espaços em branco no início e no final do texto, utilizamos `.trim()`:

```javascript
const texto = input.value.trim();
```

Depois podemos verificar se o usuário digitou alguma coisa:

```javascript
if (texto === "") {
    return;
}
```

Essa validação impede a criação de tarefas vazias ou compostas somente por espaços.

Depois de adicionar uma tarefa, o campo pode ser limpo:

```javascript
input.value = "";
```

Também utilizamos:

```javascript
input.focus();
```

para colocar novamente o cursor no campo e facilitar a criação de uma nova tarefa.

---

## 3. Criação e Remoção Dinâmica de Elementos

### Criação de Nós Dinâmicos

**Explicado por:** Renan

O método `document.createElement()` permite criar novos elementos HTML através do JavaScript.

Exemplo:

```javascript
const item = document.createElement("li");
```

Nesse caso, um novo elemento `<li>` é criado.

Para adicionar uma classe CSS, utilizamos:

```javascript
item.classList.add("tarefa");
```

Podemos também definir o texto do elemento:

```javascript
item.textContent = texto;
```

Para colocar o elemento dentro da lista, utilizamos `appendChild()`:

```javascript
lista.appendChild(item);
```

Os botões também podem ser adicionados ao elemento:

```javascript
item.appendChild(botaoConcluir);
item.appendChild(botaoDeletar);
```

Dessa maneira, cada tarefa possui sua própria estrutura:

```text
li
├── texto da tarefa
├── botão concluir
└── botão excluir
```

---

### Navegação no DOM e Exclusão

**Explicado por:** Gustavo

A propriedade `parentElement` permite acessar o elemento pai de outro elemento.

Por exemplo:

```javascript
const pai = elemento.parentElement;
```

Se um botão estiver dentro de um `<li>`, seu `parentElement` será o `<li>`.

O método `.remove()` permite remover um elemento do DOM:

```javascript
item.remove();
```

No projeto, esse método é utilizado para excluir uma tarefa quando o usuário clica no botão de exclusão.

Dessa maneira, a tarefa é removida da lista sem que seja necessário recarregar a página.

---

## 4. Arquitetura Modular e Estilização

### Módulos JavaScript com `import` e `export`

**Explicado por:** Renan

Os módulos JavaScript permitem dividir o código em diferentes arquivos, facilitando a organização, manutenção e reutilização das funcionalidades.

Podemos criar um arquivo chamado `deletaTarefa.js`:

```javascript
export default function BotaoDeleta() {
    // código da função
}
```

Depois, podemos importar essa função no `app.js`:

```javascript
import BotaoDeleta from "./deletaTarefa.js";
```

O `export default` define a exportação principal daquele arquivo.

No projeto, a divisão pode ser feita da seguinte maneira:

```text
app.js
deletaTarefa.js
concluiTarefa.js
```

Assim, cada arquivo pode ser responsável por uma funcionalidade específica.

---

### Integração entre JavaScript e CSS

**Explicado por:** Gustavo

O JavaScript pode adicionar, remover ou alternar classes CSS utilizando `classList`.

Para adicionar uma classe:

```javascript
elemento.classList.add("done");
```

No CSS podemos definir a aparência dessa classe:

```css
.done {
    text-decoration: line-through;
    opacity: 0.5;
}
```

Também podemos utilizar `classList.toggle()`:

```javascript
elemento.classList.toggle("done");
```

O `toggle()` funciona como um interruptor:

* Se a classe não existir, ela será adicionada;
* Se a classe já existir, ela será removida.

No projeto, isso é utilizado para marcar uma tarefa como concluída.

---

## 5. Desafio de Extensão

Como extensão do projeto, foi desenvolvido um sistema para marcar tarefas como concluídas.

Ao clicar no botão de conclusão, a classe `done` é alternada:

```javascript
texto.classList.toggle("done");
```

Também foi implementada uma melhoria de usabilidade utilizando:

```javascript
input.focus();
```

Após adicionar uma tarefa, o cursor retorna automaticamente para o campo de texto, permitindo que o usuário cadastre outra tarefa rapidamente.

---

## 6. Conceitos Praticados

Durante o desenvolvimento foram praticados:

* [x] DOM
* [x] Nós e árvore do DOM
* [x] `querySelector()`
* [x] `querySelectorAll()`
* [x] `getElementById()`
* [x] Atributos `data-*`
* [x] `addEventListener()`
* [x] `preventDefault()`
* [x] `input.value`
* [x] `.trim()`
* [x] Validação de formulário
* [x] `createElement()`
* [x] `classList.add()`
* [x] `classList.toggle()`
* [x] `appendChild()`
* [x] `parentElement`
* [x] `.remove()`
* [x] `import`
* [x] `export default`
* [x] Integração entre JavaScript e CSS
* [x] `input.focus()`

---

## 7. Conclusão

O desenvolvimento da **Lista de Tarefas Modular** permitiu aplicar conceitos fundamentais de JavaScript para manipulação do DOM.

A aplicação utiliza seletores para encontrar elementos, eventos para responder às ações do usuário, validação de formulários, criação e remoção dinâmica de elementos, manipulação de classes CSS e módulos JavaScript.

A modularização também contribui para uma melhor organização do código, tornando o projeto mais fácil de compreender, manter e expandir.

O projeto demonstra, na prática, como **HTML, CSS e JavaScript trabalham juntos** para criar uma aplicação web interativa.
