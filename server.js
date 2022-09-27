const express = require('express');

const path = require('path');

const author = express();


author.get('',(req,res)=>{
    res.send('<h1>Myanmar Author<h1>')
})

author.get('/ShweUDaung', function(req,res){
    res.sendFile(path.join(__dirname,'/ShweUDaung.html'))
})

author.get('/PiMoeHnin', function(req,res){
    res.sendFile(path.join(__dirname,'/PiMoeHnin.html'))
})

author.get('/MyaThanTint', function(req,res){
    res.sendFile(path.join(__dirname,'/MyaThanTint.html'))
})

author.get('/NayWinMyint', function(req,res){
    res.sendFile(path.join(__dirname,'/NayWinMyint.html'))
})

author.listen(3000,()=>{
    console.log('Server is starting........')
})