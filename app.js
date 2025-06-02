funtion criaCartao(categoria,pergunta,respota){ 
    let container = document.getElementById ('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML =`
     <articler class="cartao">
                <div class="cartao__conteudo">
                    <h3>programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é JS?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>JS é uma linguagem e programção.</p>
                    </div>
                </div>
            </articler>
            `
            container.appendChild(cartao)
}