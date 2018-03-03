var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = require('../database/index.js');

app.use(bodyParser.json());
 app.use(express.static(__dirname + '/../client/dist'));

app.get('/paisa', function(req,res){
  data.getComment((err,results)=>{
if(err){
  console.log('error')
  res.sendStatus(500);
}else{
  res.status(200).json(results)
}
})
} )

app.post('/paisa', function(req,res){
  let comment =req.body.comment
  if(!comment){
    res.sendStatus(400);

  }else{
    data.postComment(comment,(err,results)=>{
      if(err){
        res.sendStatus(500);

      }else{
        res.status(200).json(results);
      }
    })
  }
})


app.listen(3000, ()=>{
  console.log('listening on 3000')
})
