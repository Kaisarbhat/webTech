const connectToMongo=require('./db');
const express = require('express')
const app = express()
const port = 7000
const User =require('./user')
const { body, validationResult } = require('express-validator');
app.use(express.json())
connectToMongo()


//ROUTE 1: Creating user with POST "api/auth/createuser" //No Login required
app.post('/login' ,[
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 6 characters long').isLength({ min: 6 })
],async(req,res) =>{
  //if ther are errors
  const result = validationResult(req);
  if (!result.isEmpty()) {
      return res.status(400).json({errors :result.array()})
    }
    try{
        let user= await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({errors :"A user with this email  address already exists"})
        }
        
        user=await User.create({ 
            email:req.body.email,
            password:req.body.password,
        }) 
        res.json(user);
    }
    catch(error){
        console.log(error.message)
        res.status(500).send('Some error occurred')
    }
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    })