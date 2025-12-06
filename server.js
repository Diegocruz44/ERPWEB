const express = require('express');
const app = express();

app.use(express.json());

let user = []

//Rota que o Front End Vai Acessar
app.post('/usuarios', (resquest, response) => {

    const { id, name, email, telefone } = resquest.body;
    

     console.log( id, name, email, telefone);
     
     const user = {
     
        id: id,
        name: name,
        email: email,
        telefone: telefone,
        criadoEM: new Date(),
        
        };

        usuarios.push(user);
        // push -> colocar algo dentro do array 

     response.status(200).send('user criado com sucesso');
 });

 app.listen(4000, () => {
    console.log('servidor rodando 4000');    
    
}); 

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Exemplo simples (apenas para demonstração)
    const userCorreto = "admin";
    const passCorreto = "1234";

    if (user === userCorreto && pass === passCorreto) {
        document.getElementById("login-status").innerText = "Login bem-sucedido!";
        document.getElementById("login-status").style.color = "lightgreen";
    } else {
        document.getElementById("login-status").innerText = "Usuário ou senha incorretos!";
        document.getElementById("login-status").style.color = "red";
    }
}
