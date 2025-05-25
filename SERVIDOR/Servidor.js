require("colors");
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongodb = require("mongodb");

const app = express();
const MongoClient = mongodb.MongoClient;

const uri = 'mongodb+srv://dantasmilan23:L05ang3l35@enrico.pvyxi2g.mongodb.net/?retryWrites=true&w=majority&appName=Enrico';
const client = new MongoClient(uri, { useNewUrlParser: true });

const dbo = client.db("exemplo_bd");
const usuarios = dbo.collection("usuarios");

const dboo = client.db("exemplo_bd2");
const posts = dboo.collection("posts");

const dbbo = client.db("LAB10");
const user = dbbo.collection("usuarios");
const carros = dbbo.collection("carros");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

const server = http.createServer(app);
server.listen(80);
console.log("Servidor rodando na porta 80");


// Rotas principais
app.get('/', (req, res) => {
  res.redirect('Lab1/projects.html');
});

app.get('/cadastra', (req, res) => {
  res.redirect('public/LAB08/Cadastro.html');
});

app.get('/login', (req, res) => {
  res.redirect('public/LAB08/login.html');
});

app.get('/blog', (req, res) => {
  posts.find().toArray((err, resultados) => {
    if (err) res.send('Erro ao buscar os posts');
    else res.render('blog.ejs', { posts: resultados });
  });
});

app.post('/cad_blog', (req, res) => {
  res.redirect('lab1/lab_09/cadastrar_post.html');
});

app.post('/inicio', (req, res) => {
  res.redirect('aula_04/index.html');
});

// Cadastro via query
app.get('/cadastrar', (req, res) => {
  const { nome, email, senha, nascimento } = req.query;
  res.render('resposta.ejs', {
    mensagem: "Cadastro finalizado com sucesso!",
    usuario: nome,
    login: email,
    idade: nascimento
  });
});

// Cadastro via body
app.post('/cadast', (req, res) => {
  const { nome, email, senha, nascimento } = req.body;
  const data = { db_nome: nome, db_email: email, db_senha: senha, db_nascimento: nascimento };
  usuarios.insertOne(data, err => {
    if (err) res.render('respost.ejs', { mensagem: "Erro ao cadastrar usuário!", usuario: nome, login: email });
    else res.render('respost.ejs', { mensagem: "Cadastro finalizado com sucesso!", usuario: nome, login: email, idade: nascimento });
  });
});

app.post('/log', (req, res) => {
  const { email, senha } = req.body;
  const data = { db_email: email, db_senha: senha };
  usuarios.find(data).toArray((err, items) => {
    if (err) res.render('respost_log.ejs', { mensagem: "Erro ao logar usuário!", login: email });
    else if (items.length == 0) res.render('respost_log.ejs', { mensagem: "Usuário/senha não encontrado!", login: email });
    else res.render('respost_log.ejs', { mensagem: "Login realizado com sucesso!", login: email });
  });
});
//CRUD
app.post("/cadastrar_usuario", (req, res) => {
  const data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };
  usuarios.insertOne(data, err => {
    if (err) res.render('resposta_usuario', { resposta: "Erro ao cadastrar usuário!" });
    else res.render('resposta_usuario', { resposta: "Usuário cadastrado com sucesso!" });
  });
});

app.post("/logar_usuario", (req, res) => {
  const data = { db_login: req.body.login, db_senha: req.body.senha };
  usuarios.find(data).toArray((err, items) => {
    if (err) res.render('resposta_usuario', { resposta: "Erro ao logar usuário!" });
    else if (items.length == 0) res.render('resposta_usuario', { resposta: "Usuário/senha não encontrado!" });
    else res.render('resposta_usuario', { resposta: "Usuário logado com sucesso!" });
  });
});

app.post("/atualizar_usuario", (req, res) => {
  const data = { db_login: req.body.login, db_senha: req.body.senha };
  const newData = { $set: { db_senha: req.body.novasenha } };
  usuarios.updateOne(data, newData, (err, result) => {
    if (err) res.render('resposta_usuario', { resposta: "Erro ao atualizar usuário!" });
    else if (result.modifiedCount == 0) res.render('resposta_usuario', { resposta: "Usuário/senha não encontrado!" });
    else res.render('resposta_usuario', { resposta: "Usuário atualizado com sucesso!" });
  });
});

app.post("/remover_usuario", (req, res) => {
  const data = { db_login: req.body.login, db_senha: req.body.senha };
  usuarios.deleteOne(data, (err, result) => {
    if (err) res.render('resposta_usuario', { resposta: "Erro ao remover usuário!" });
    else if (result.deletedCount == 0) res.render('resposta_usuario', { resposta: "Usuário/senha não encontrado!" });
    else res.render('resposta_usuario', { resposta: "Usuário removido com sucesso!" });
  });
});
// Lab 09
app.post('/cadpost', function(requisicao, resposta){
    let titulo = requisicao.body.titulo;
    let resumo = requisicao.body.resumo;
    let conteudo = requisicao.body.conteudo;

    let data = {db_titulo: titulo, db_resumo: resumo,db_conteudo: conteudo}
    
    posts.insertOne(data, function (err) {
          if (err) {
            resposta.render('resposta.ejs', 
                {mensagem: "Não Cadastrato!"})
          }else {
            resposta.render('resposta.ejs', 
                {mensagem: "Cadastro"})       
          };
        });
       
      });

app.get('/listarsposts.ejs', function(requisicao, resposta) {
    posts.find().toArray(function(err, resultados) {
        if (err) {
            resposta.send('Erro ao buscar os posts');
        } else {
            resposta.render('listarsposts.ejs', { posts: resultados });
        }
    });
});

// lab10
app.get('/Cadastrar', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/lab1/LAB10/usuarios/cadastro.html'));
});

app.get('/logar', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/lab1/LAB10/usuarios/login.html'));
});

app.post('/Cadastrar', (req, res) => {
  const { nome, email, senha, nascimento } = req.body;
  const data = { db_nome: nome, db_email: email, db_senha: senha, db_nascimento: nascimento };

  user.insertOne(data, (err) => {
    if (err) {
      res.render('resposta_cadastro.ejs', { mensagem: "Erro ao cadastrar usuário!", login: email });
    } else {
      res.render('resposta_cadastro.ejs', { mensagem: "Cadastro realizado com sucesso!", login: email });
    }
  });
});

app.post('/logar', (req, res) => {
  const { email, senha } = req.body;
  const data = { db_email: email, db_senha: senha };

  user.find(data).toArray((err, items) => {
    if (err) res.render('resposta_cadastro.ejs', { mensagem: "Erro ao logar usuário!", login: email });
    else if (items.length === 0) res.render('resposta_cadastro.ejs', { mensagem: "Usuário/senha não encontrado!", login: email });
    else res.redirect('/pg_principal');
  });
});

app.get('/pg_principal', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/lab1/LAB10/pg_principal.html'));
});

// Cadastro de carro
app.get('/cadast_carro', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/lab1/LAB10/carros/cadast_carro.html'));
});

app.post('/cadast_carro', (req, res) => {
  const { marca, modelo, ano, qtd } = req.body;
  const data = { db_marca: marca, db_modelo: modelo, db_ano: ano, db_qtd: parseInt(qtd) };

  carros.insertOne(data, (err) => {
    if (err) res.render('resposta_cadast_carro.ejs', { mensagem: "Erro ao cadastrar carro!", marca_c: marca, modelo_c: modelo });
    else res.render('resposta_cadast_carro.ejs', { mensagem: "Cadastro realizado com sucesso!", marca_c: marca, modelo_c: modelo, ano_c: ano, qtd_c: qtd });
  });
});

// Listar carros
app.get('/listar_carros', (req, res) => {
  carros.find().toArray((err, lista) => {
    if (err) res.send("Erro ao listar carros.");
    else res.render('listar_carros.ejs', { carros: lista });
  });
});

// Vender carro 
app.post('/vender_carro', (req, res) => {
  const id = new mongodb.ObjectId(req.body.id);
  carros.findOne({ _id: id }, (err, carro) => {
    if (err || !carro) return res.send("Carro não encontrado.");

    if (carro.db_qtd <= 0) {
      res.send("Esgotado");
    } else {
      carros.updateOne({ _id: id }, { $inc: { db_qtd: -1 } }, () => {
        res.redirect('/listar_carros');
      });
    }
  });
});

// Remover carro
app.post('/remover_carro', (req, res) => {
  const id = new mongodb.ObjectId(req.body.id);
  carros.deleteOne({ _id: id }, () => res.redirect('/listar_carros'));
});

// Atualizar carro (exemplo com qtd)
app.post('/atualizar_carro', (req, res) => {
  const id = new mongodb.ObjectId(req.body.id);
  const novaQtd = parseInt(req.body.nova_qtd);

  carros.updateOne({ _id: id }, { $set: { db_qtd: novaQtd } }, () => res.redirect('/listar_carros'));
});

