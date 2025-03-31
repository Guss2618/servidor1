
const http = require('http')
const PORT = 8000

const server = http.createServer((req, res) => {
    let valores = req.url
        .replace('/','')
        .replace('?','')
        .split('&')
        [ 'a=10','b=20' ]
        let parametros = {}
        for (item in valores){
            let chaveValor = valores[item].split('=')
            parametros[chaveValor[0]] = Number(chaveValor[1])
        }
        console.log(parametros)
        let resultado = soma(parametros.a, parametros.b)
        res.end(`O valor final é ${resultado}`)

    res.sendFile()
})
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})



