const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@libappvers0.op9lt.mongodb.net/LibAppVers0?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});
const Schema=mongoose.Schema;

const bookSchema=new Schema({
    id:Number,
    title:String,
    author:String,
    genre:String,
    image:String
});

var bookData=mongoose.model("BookData",bookSchema);

module.exports=bookData;                