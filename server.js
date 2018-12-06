var http=require('http');
var express=require('express');

var app=express();
var path=require('path');

app.use(express.static('public'));

app.get('/numtowords1',function(req,res){
    res.sendFile(path.join(__dirname+'/public/numtowords1.html'));
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/numtowords.html'));
})

var server=app.listen(2000,function(){
    console.log('Server started at port 2000')
})