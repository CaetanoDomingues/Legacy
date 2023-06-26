process.env.AMBIENTE_PROCESSO = "desenvolvimento";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080

var app = express();

var usuarioRouter = require("./src/routes/usuario");
var inicialRouter = require("./src/routes/inicial");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuario", usuarioRouter); 
app.use("/", inicialRouter);
 

app.listen(PORTA, ()  => {
    console.log(`Abrindo o servidor do site individual, clique aqui para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} do Legacy \n
`);
});
