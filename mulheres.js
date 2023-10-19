const express = require("express")
const router = express ()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:'Emeline Huk',
        imagem:'https://www.linkedin.com/in/emeline-huk-da-silva-4771bb148/',
        minibio:'Biotecnologista e pesquisadora',
    },
    {
        nome:'Luciana Potzecki',
        imagem:'https://www.linkedin.com/in/luciana-potzecki-6a160b251/overlay/photo/',
        minibio:'farma e ótima pesquisadora',
    },
    {
        nome: 'Ana Selenko',
        imagem:'https://www.facebook.com/photo/?fbid=984969518546361&set=pob.100010999662858',
        minibio:'Melhor amiga e ótima pesquisadora',
    }
]

function mostraMulheres(request, response) {
response.json(mulheres)
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)