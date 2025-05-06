require("colors");
// inclui o módulo http
 var http = require('http');
// inclui o módulo express
 var express = require('express' ) ;
 let bodyParser = require("body-parser")


 // cria a variável app, pela qual acessaremos
// os métodos / funções existentes no framework
 // express
 var app = express () ;
 app. use (express.static('./public'));
 app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
// método use() utilizado para definir em qual
// pasta estará o conteúdo estático
 app. use (express.static('./public'));

 // cria o servidor
 var server = http.createServer(app);

// define o número da porta que o servidor ouvirá
server.listen(80)

// mensagem exibida no console para debug
console.log("Olá Mundo!".rainbow);

// Exemplos de Get e Post
app.get('/inicio', function(requisicao,resposta){
    resposta.redirect('aula 1/index.html')
})
app.post('/inicio', function(requisicao,resposta){
    resposta.redirect('aula 1/index.html')
})
app.get('/Cadastrar', function(requisicao,resposta){
    let Nome = requisicao.query.Nome
    let Email = requisicao.query.Email
    let Senha = requisicao.query.Senha
    let Data = requisicao.query.Data
  
    console.log(Nome,Email,Senha,Data)
    
    resposta.render('resposta.ejs', {mensagem: "Usuário cadastrado com sucesso", usuario: Nome, login: Email})
})

app.post('/Cadastrar', function(requisicao,resposta){
    let Nome = requisicao.body.Nome
    let Email = requisicao.body.Email
    let Senha = requisicao.body.Senha
    let Data = requisicao.body.Data
    console.log(Nome,Email,Senha,Data)
    resposta.render('resposta.ejs', {mensagem: "Usuário cadastrado com sucesso", usuario: Nome, login: Email})
})

app.get('/for_ejs', function(requisicao,resposta){
    let num = requisicao.query.num
    resposta.render('exemplo_for.ejs', {tamanho: num})
})