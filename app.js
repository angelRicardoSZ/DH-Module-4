const express =require("express");

const app = express();

const path =require("path");

const port = 3030;
app.listen(port, ()=> console.log("Servidor"));

app.use(express.static("public"));

app.get("/", function(req, res){
    let htmlpath = path.resolve("./views/index.html")
    res.sendFile(htmlpath);

});


app.get("/babbage", function(req, res){
    let htmlpath = path.resolve("./views/babbage.html")
    res.sendFile(htmlpath);

});


app.get("/berners-lee", function(req, res){
    let htmlpath = path.resolve( "./views/berners-lee.html")
    res.sendFile(htmlpath);

});



app.get("/clarke", function(req, res){
    let htmlpath = path.resolve("./views/clarke.html")
    res.sendFile(htmlpath);

});


app.get("/hamilton", function(req, res){
    let htmlpath = path.resolve("./views/hamilton.html")
    res.sendFile(htmlpath);

});


app.get("/hopper", function(req, res){
    let htmlpath = path.resolve("./views/hopper.html")
    res.sendFile(htmlpath);

});


app.get("/lovelace", function(req, res){
    let htmlpath = path.resolve( "./views/lovelace.html")
    res.sendFile(htmlpath);

});


app.get("/turing", function(req, res){
    let htmlpath = path.resolve( "./views/turing.html")
    res.sendFile(htmlpath);

});



