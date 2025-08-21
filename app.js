const express = require("express")
const {details ,collection,orders} = require("./mongo.js")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.post("/",async(req,res)=>{
    const{email,password}=req.body
    global.em=email
    try{
        const check = await collection.findOne({email:email,password:password})
        if(check){
            res.json(check)
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/signup",async(req,res)=>{
    const{email,password,name,mno}=req.body
    global.em=email
    const data={
        email:email,
        password:password,
        name:name,
        mno:mno
    }
    try{
        const check = await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/home/account/update",async(req,res)=>{
    const{password,name,mno}=req.body
    try{
    await collection.updateOne({ email:em}, { $set: {password:password,name:name,mno:mno }})
    const check = await collection.findOne({email:em})
       res.json(check)
    }
catch (e) {
    res.status(500).json({ error:"Server error while updating account"});
  }
})

app.post("/home/getproduct", async (req, res) => {
  try {
      const { p } = req.body;
      const check = await details.findOne({ product: p });
      res.json(check);
  } catch (e) {
    res.status(500).json({ error: "Product not found" });
  }
});

app.get("/home/getallproducts", async (req, res) => {
  try {
      const allProducts = await details.find();
      res.json(allProducts);
  } 
catch (e) {
    res.status(500).json({error: "Server error while fetching product"  });
  }
});

app.post("/home/product/donecheckout",async(req,res)=>{
    const{p,addr}=req.body
    const data={
        email:em,
        product:p,
        address:addr     
    }
    orders.insertMany([data])
    const check = await collection.findOne({email:em})
    try{
       res.json(check)
    }
catch (e) {
    res.status(500).json({ error: "Server error while completing checkout"});
  }
})

app.listen(8000,()=>{
    console.log("port connected")
})