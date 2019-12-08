const express=require("express")
const path=require("path")
const hbs=require("hbs")
const cli=require("./utils/climate")
const geocode=require("./utils/location")

const publicdir=path.join(__dirname,"../public")

const app=express()
app.set("view engine","hbs")
app.set("views",publicdir)
app.use(express.static(publicdir))

hbs.registerPartials(path.join(__dirname,"../public/partials"))

app.get('/',(req,res)=>{
  res.render("index",{
    title:"Weather"
  })
})

app.get('/about',(req,res)=>{
  res.render("about",{
    title:"About"
  })
})

app.get('/weather',(req,res)=>{
  if(!req.query.address){
    return res.send({
      error:"must provide an address"
    })
  }
  const add=req.query.address;
  geocode(add,(err,data=[])=>{
    if(err) return res.send({error:err})
    cli(data,(err,fdata)=>{
      if(err) return res.send({error:err})
      res.send({
        data:fdata,
        address:add
      })
    })
  })
})

app.get('*',(req,res)=>{
  res.render("404",{
    title:"404"
  })
})

app.listen(3000)