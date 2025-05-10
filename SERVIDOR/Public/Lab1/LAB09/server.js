const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = 80;


const db = new sqlite3.Database('./blog.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, resumo TEXT, conteudo TEXT)");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});


app.get('/blog', (req, res) => {
  db.all("SELECT * FROM posts", [], (err, rows) => {
    if (err) {
      console.error(err);
      res.send("Erro ao acessar o banco de dados.");
    } else {
      res.render('blog', { posts: rows });
    }
  });
});


app.get('/cadastrar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cadastrar_post.html'));
});

app.post('/cadastrar', (req, res) => {
  const { titulo, resumo, conteudo } = req.body;
  db.run("INSERT INTO posts (titulo, resumo, conteudo) VALUES (?, ?, ?)",
    [titulo, resumo, conteudo],
    function(err) {
      if (err) {
        console.error(err.message);
        res.send("Erro ao cadastrar post.");
      } else {
        res.send(`<div class="confirm"><h2>Post Cadastrado</h2><a href="/">Home</a></div>`);
      }
    });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
