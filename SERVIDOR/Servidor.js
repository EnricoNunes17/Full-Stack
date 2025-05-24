const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = 'mongodb+srv://dantasmilan23:L05ang3l35@enrico.pvyxi2g.mongodb.net/?retryWrites=true&w=majority&appName=Enrico';
const client = new MongoClient(uri, {useNewUrlParser: true});

var dbo = client.db("Lab10");
var usuarios = dbo.collection("usuarios");
var carros = dbo.collection("carros")

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

// Rotas principais
app.get('/', (req, res) => {
    res.redirect('Lab1/projects.html');
});


app.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'LAB08/Cadastro.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'LAB08/login.html'));
});

// Rota para processar o cadastro de usuário
app.post('/cadastra', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.send('Usuário já cadastrado!');
    }
    users.push({ username, password });
    res.send('Cadastro realizado com sucesso! <a href="/login">Ir para Login</a>');
});

// Rota para processar o login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    const status = user ? 'Sucesso' : 'Falha';
    res.render('resposta', { username, status });
});

// Página de blog renderizada dinamicamente com posts do MongoDB
app.get('/blog', async (req, res) => {
    try {
        const collection = db.collection('posts');
        const posts = await collection.find().toArray();
        res.render('blog', { posts });
    } catch (err) {
        console.error('Erro ao buscar posts:', err);
        res.status(500).send('Erro ao carregar posts.');
    }
});

// Serve a página cadastrar_post.html
app.get('/cadastrar_post', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'LAB09/cadastrar_post.html'));
});

// Rota para cadastrar um novo post no banco de dados
app.post('/cadastrar', async (req, res) => {
    const { titulo, resumo, conteudo } = req.body;

    try {
        const collection = db.collection('posts');
        await collection.insertOne({ titulo, resumo, conteudo });
        res.redirect('/blog'); // Corrigido
    } catch (err) {
        console.error('Erro ao cadastrar post:', err);
        res.status(500).send('Erro ao cadastrar post.');
    }
});

// Inicia o servidor na porta 80 (recomendada para ambiente local)
app.listen(80, () => {
    console.log('Servidor rodando na porta 80');
    console.log('Acesse pelo navegador: http://localhost:80/');
});
