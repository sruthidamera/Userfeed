const express=require("express");
const bodyParser =require('body-parser');
const cors=require('cors');
const app=express();


const mysql=require('mysql2');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
  database:'userfeeddatabase',
  });
  

  app.get('/api/get',(req,res)=>{
    const sqlSelect="SELECT * FROM userfeed;";
    db.query(sqlSelect,(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
      console.log(result);
      res.send(result);
      }
  });
  });

  app.put("/api/updatelikes", (req, res) => {
    db.query(
      "UPDATE userfeed SET likes = likes+1 WHERE id = 1;",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.put("/api/updatecomments", (req, res) => {
    db.query(
      "UPDATE userfeed SET comments = comments+1 WHERE id = 1;",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.put("/api/updateviews", (req, res) => {
    db.query(
      "UPDATE userfeed SET views = views+1 WHERE id = 1;",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.put("/api/updateshares", (req, res) => {
    db.query(
      "UPDATE userfeed SET shares = shares+1 WHERE id = 1;",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });


  app.listen(3001,()=>{
    console.log('running on port 3001');

});

app.post('/api/postcomment',(req,res)=>{
  const comment=req.body.comment;
  const sqlInsert="INSERT INTO comments (comment) VALUES (?);"
  db.query(sqlInsert,[comment],(err,result)=>{
    console.log(result);
    res.send({comment});
  })
});
