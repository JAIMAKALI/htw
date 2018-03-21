var express=require('express');
var hbs=require('hbs');
var bodyParser=require('body-parser');
var multer=require('multer');
var path =require('path');
var {mongoose}=require('./db/connect');
var imageUploderRoutes=require('./../routes/imageUploderRoute');
var app=express();
var port=process.env.PORT || 3000;

//engine set
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/../views/partials');
//middleware

//app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, '../public')))

//middleware for Router

app.use('/',imageUploderRoutes);

//listen

app.listen(port,()=>{
  console.log('server is running on the port 3000');
});
