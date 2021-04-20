const express = require('express');
const app = express();

let usuarios = [
    {nome: "Breno", sobrenome: "Amaral"}
];

// http://localhost:3000/inicio
app.get("/inicio", (request, response) => {
    return response.send ('Alô Alô, Graças a Deus!');
})

app.get("/usuario", (request, response) => {
    return response.json(usuarios);
})

app.listen(3000, () => {
    console.log('Servidor rodando!')
})
