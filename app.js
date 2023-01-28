const Express=require("express")
const Bodyparser=require("body-parser")

const Cors=require("cors")

const Mongoose=require("mongoose")
const fModel=require("./models/friendModel")

 Mongoose.connect("mongodb+srv://college:college12345@cluster0.sonwgpf.mongodb.net/frienddb?retryWrites=true&w=majority",{useNewUrlParser:true})

var app=Express()
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("welcome")
})


app.post("/add",async(req,res)=>{
    let data=new fModel(req.body)
    console.log(data)
    await data.save()
    res.send("data")
})




app.get("/viewall",async(req,res)=>{
let data=await fModel.find()
    res.send(data)
})



app.listen(2000)



