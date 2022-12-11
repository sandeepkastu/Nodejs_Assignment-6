const express = require('express');
const app = express();

const bodyparser=require('body-parser');





// Import routes
const getRoute = require('./routes/blogget');
const postRoute=require('./routes/blogpost');
const putRoute=require('./routes/blogput');
const deleteRoute=require('./routes/blogdelete');


//Router MIddlewares
app.use(express.json());
app.use(bodyparser.json());

app.use('/', getRoute);
app.use('/',postRoute);
app.use('/',putRoute);
app.use('/',deleteRoute);

app.get('*',(req,res)=>{
    res.status(404).send('ENTER THE CORRECT URL');
});


module.exports = app;
