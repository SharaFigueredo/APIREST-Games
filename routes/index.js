const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send( 'API funcionando!' );
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});


// LOGIN
pp.post('/users/login/:userId', (req, res) => {
  const { userId } = req.body;
  const { password } = req.body;
  
});
//SAIR
app.post('/logout/:userId', (req, res) => {
  const { userId } = req.body;
});
//Criar usuário
app.post('/create-user', (req, res)=> {
  const { username, email, password, name } = req.body;

  if(!username || !email || !password || !name){
    return res.status(400).json({error:`Ainda falta dados`})
  }
})
const newUser = {
  id: id,
  username,
  email,
  password,
  name,
  isLogged: false,
  lostLogin: null
}
users.push(newUser)
res.status(200)
.json(newUser)

//Criar jogo
app.post('/games', (req, res) => {
  const { titulo, descricao, preco, genero, stock } = req.query;
})