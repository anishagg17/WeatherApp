const loc=require("./location");
const cli=require("./climate");

loc("hamirpur",(err,res)=>{
  if(err) return console.log(err);
  cli(res,(err,res)=>{
    if(err) console.log(err)
    else console.log(res)
  })
})