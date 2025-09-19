const mongoose=require("mongoose");

const CricSchema=new mongoose.Schema({
    Title:{
        type:String,
    },
    Content:{
        type:String,
    },
    Image:{
        url:String,
        filename:String,
    },
    Image1:{
        url:String,
        filename:String,
    },
  
    Contents:{
        type:String,
    },
    Content1:{
        type:String,
    },
    Content2:{
        type:String,
    },
    Author:{
        type:String,
    }
})

const CRIC=mongoose.model("CRIC",CricSchema);
module.exports=CRIC;