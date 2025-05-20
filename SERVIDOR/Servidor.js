const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express();
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://dantasmilan23:L05ang3l35@enrico.pvyxi2g.mongodb.net/?retryWrites=true&w=majority&appName=Enrico';
const client = new MongoClient(uri);

let db;

// Conecta ao banco de dados
client.connect()
    .then(() => {
        db = client.db('blogDB'); // Nome do banco de dados
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });

// Middleware para servir arquivos estáticos e processar requisições POST
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: true }));

// Configuração do EJS para renderizar páginas dinâmicas
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Rotas principais
server.get('/', (req, res) => {
    res.redirect('Lab1/projects.html');
});

server.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

server.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Lab1/projects.html'));
});

server.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'LAB08/Cadastro.html'));
});

server.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'LAB08/login.html'));
});

// Simula um banco de dados em memória para usuários
const users = [];

// Rota para processar o cadastro de usuário
server.post('/cadastra', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.send('Usuário já cadastrado!');
    }
    users.push({ username, password });
    res.send('Cadastro realizado com sucesso! <a href="/login">Ir para Login</a>');
});

// Rota para processar o login
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    const status = user ? 'Sucesso' : 'Falha';
    res.render('resposta', { username, status });
});

// Página de blog renderizada dinamicamente com posts do MongoDB
server.get('/blog', async (req, res) => {
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
// server.get('/cadastrar_post', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'LAB09/cadastrar_post.html'));
// });

// Rota para cadastrar um novo post no banco de dados
server.post('/cadastrar', async (req, res) => {
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
server.listen(80, () => {
    console.log('Servidor rodando na porta 80');
    console.log('Acesse pelo navegador: http://localhost:80/');
});
