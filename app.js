const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*');
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    app.use(cors());
    next ();
})



app.listen(8080,function() {
    console.log('Servidor aguardando requisicoes');
})