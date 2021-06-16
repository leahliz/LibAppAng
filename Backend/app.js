const express=require("express");
const cors=require("cors");
var bodyparser=require("body-parser");
var app=new express();
var jwt=require("jsonwebtoken");

app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));

const bookData=require("./model/bookData");
const authorData=require("./model/authorData");
const userData=require("./model/usersData");

app.get("/books",function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    bookData.find()
    .then(function(BookData){
        res.send(BookData);
    });
});



app.get("/authors",function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    authorData.find()
    .then(function(AuthorData){
        res.send(AuthorData);
    });
});


app.post("/login",(req,res)=>{
    let user=req.body;
userData.findOne({$and:[{email:user.uname},{password:user.password}]})
.then((obj)=>{
    if(!obj){
    res.status(401).send("Invalid username or password");
    }
    else{
        console.log("succes");
        let payload={subject:user.email+user.password};
        let token=jwt.sign(payload,"secretKey");
        res.status(200).send({token});
    }
})
});

app.post("/signup",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var User={
        FirstName:req.body.user.fname,
        LastName:req.body.user.lname,
        email:req.body.user.uname,
        password:req.body.user.password
    };
    var nuse=new userData(User);
    nuse.save();
    let payload={subject:User.email+User.password};
        let token=jwt.sign(payload,"secretKey");
        res.status(200).send({token});
});

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("Unauthorized request");
    }
    let token = req.headers.authorization.split(' ')[1];
    
    if(token ==='null'){
        return res.status(401).send("Unauthorized request");
    }
    let payload=jwt.verify(token, 'secretKey' );
    console.log(payload);
    if(!payload){
        return res.status(401).send("Unauthorized request");
    }
   req.userId=payload.subject;
    next();
    }


app.post("/addbook",verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var books={
        title:req.body.book.title,
        author:req.body.book.author,
        genre:req.body.book.genre,
        image:req.body.book.image
    };
    var book=new bookData(books);
    book.save();
}); 

app.post("/addauthor",verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var authors={
        author:req.body.author.author,
        work:req.body.author.work,
        image:req.body.author.image
    };
    var author=new authorData(authors);
    author.save();
});





app.listen(3000,function(){
    console.log("listening at 3000");
});