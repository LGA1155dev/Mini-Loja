// Objetivo: fazer com que a cada clique no botão add tocar adicione o item e seu repectivo proço no Your cart. E depois se você confirmar a compra, aparecer um tela 'Popup' falando que a compra foi confirmada e bla bla bla... só não faço uma api de getway por que além de ser crime kkkk vai dar um trabalhozinho, e como já diria um sabio chines abre aspas 'Trabalhar não é ruim, o ruim é ter que trabalhar' fecha aspas depois eu faço essa porra pq to com preguiça agr.


//Primeiro passo pegar todos os botoes de adicionar dos items

//Segundo passo: Consumir o preço de cada um item

//Terceiro passo 

const btn = document.querySelectorAll('.add')
let ul = document.querySelector('.list')


btn.forEach(btn => {
    if (btn.id == 'add1'){
        btn.addEventListener('click', () => {

        document.querySelector('.Cart').style.display = 'none'
        
        })
        }})
    
