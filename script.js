const botaoAdd = document.querySelectorAll('.add');
const Ul = document.querySelector('ul');

// objeto para guardar os itens
let items = [];

botaoAdd.forEach(btn => {

  btn.addEventListener('click', () => {

    const nome = btn.dataset.nome;

    const preco = btn.dataset.preco;

    // atualiza contador
    items[nome] = (items[nome] || 0) + 1;

    // procura se já existe <li> para esse item
    let lista = document.querySelector(`li[data-nome="${nome}"]`);

    if (!lista) {

      lista = document.createElement("li");

      lista.dataset.nome = nome;

      Ul.appendChild(lista);
    }

    // atualiza conteúdo com cores
    lista.innerHTML = `<strong>${nome} <span  style="color: orangered"><br> <br>x ${items[nome]}</span> <br> <br> $${preco * items[nome]} <i class="fa-solid fa-trash-can"></i> </strong> `;
  });
});


    
