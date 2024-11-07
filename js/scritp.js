const moeda = document.querySelector('#moeda')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click',function(){
    m = moeda.value
    calculo = m/5.68
    resultado.textContent =`O valor em U$ ${calculo.toFixed(2)}`
})

