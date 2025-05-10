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
// Criando um Banco de Dados
//  var mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;


// const uri = `mongodb+srv://enriconunes17:Curr1@2016@clusterenrico.fxryhl0.mongodb.net/?retryWrites=true&w=majority&appName=ClusterEnrico`;

// const client = new MongoClient(uri, { useNewUrlParser: true });
// var dbo = client.db("exemplo_bd");
// var usuarios = dbo.collection("usuarios");



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
app.get('/', function(requisicao,resposta){
  resposta.redirect('Lab1/projects.html')
})
app.get('/inicio', function(requisicao,resposta){
    resposta.redirect('')
})
app.post('/inicio', function(requisicao,resposta){
    resposta.redirect('')
})

// app.get('/Cadastrar', function(requisicao,resposta){
//     let Nome = requisicao.query.Nome
//     let Email = requisicao.query.Email
//     let Senha = requisicao.query.Senha
//     let Data = requisicao.query.Data
  
//     console.log(Nome,Email,Senha,Data)
    
//     resposta.render('resposta.ejs', {mensagem: "Usuário cadastrado com sucesso", usuario: Nome, login: Email})
// })

// app.post('/Cadastrar', function(requisicao,resposta){
//     let Nome = requisicao.body.Nome
//     let Email = requisicao.body.Email
//     let Senha = requisicao.body.Senha
//     let Data = requisicao.body.Data
//     console.log(Nome,Email,Senha,Data)
//     let data = {db_Nome: Nome, db_email: Email , db_senha : Senha , db_Data: Data}
//     usuarios.insertOne(data, function (err) {
//         if (err) {
//           resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
//         }else {
//           resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
//         };
//       });
     
//     });
  
// app.get('/for_ejs', function(requisicao,resposta){
//     let num = requisicao.query.num
//     resposta.render('exemplo_for.ejs', {tamanho: num})
// })
// app.post('/login', function (requisicao,resposta){
//   let email = requisicao.body.Email;
//   let senha = requisicao.body.Senha;
//   console.log (Email,Senha);
//   let data = {db_email: Email , db_senha : Senha}
//   usuarios.find(data).toArray(function(erro,items){
//     console.log(items)
//       if (items.length == 0) {
//         resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
//       }else if (erro) {
//         resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
//       }else {
//         resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
//       };
//     });

//   });

let usuarioValido = {};

app.post('/Cadastrar', function(requisicao, resposta) {
  let Nome = requisicao.body.Nome;
  let Email = requisicao.body.Email;
  let Senha = requisicao.body.Senha;
  let Data = requisicao.body.Data;

  usuarioValido = {
    nome: Nome,
    email: Email,
    senha: Senha,
    data: Data
  };

  console.log(Nome, Email, Senha, Data);

  resposta.render('resposta.ejs', {
    mensagem: "Usuário cadastrado com sucesso!",
    usuario: Nome,
    login: Email
  });
});

app.post('/login', function(requisicao, resposta) {
  let Email = requisicao.body.Email;
  let Senha = requisicao.body.Senha;

  console.log(Email, Senha);

  if (Email === usuarioValido.email && Senha === usuarioValido.senha) {
    resposta.render('resposta.ejs', {
      mensagem: "Usuário logado com sucesso!",
      login: Email,
      senha: Senha
    });
  } else {
    resposta.render('resposta.ejs', {
      mensagem: "Erro: usuário ou senha incorretos.",
      login: Email,
      senha: '********'
    });
  }
});
