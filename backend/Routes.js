const express = require("express");
const router = express.Router();
const User = require("./Schemas");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/",(req,res)=>{
    res.send("Hello");
})
router.post("/register",async(req,res)=>{
    try{
        const { firstName, lastName, email, password, cpassword } = req.body;
        if(!firstName || !lastName || !email || !password || !cpassword){
            res.json({"message":"Please fill up your form"})
        } else {
            const userExist = await User.findOne({email: email});
            if(userExist){
                res.json({"message":"User already exists"})
            } else if(!userExist && password===cpassword){
                const newUser = new User({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    cpassword: password
                });
                newUser.password = await bcrypt.hash(newUser.password,12);
                newUser.cpassword = await bcrypt.hash(newUser.cpassword,12);
                newUser.save();
                res.json({"message":"registration successful"});
            } else {
                res.json({"message":"Registration error"})
            }
        }
    }catch(error){
        console.log(error);
    }
});

router.post("/login",async(req,res)=>{
    try{
       const { email, password } = req.body;
       if(!email || !password){
        res.json({"message":"Please fill up your form"})
       } else {
        const userEmailExist = await User.findOne({email: email});
        if(!userEmailExist){
            res.json({"message":"Invalid Credentials"})
        } else {
            const verifyUserpassword = await bcrypt.compare(password,userEmailExist.password);
            if(!verifyUserpassword){
                res.json({"message":"Invalid Credentials"})
            } else {
                const token = jwt.sign({_id:userEmailExist._id},process.env.SECRETKEY);
                userEmailExist.tokens.push({token:token});
                userEmailExist.save();
                res.json({"message":"Login successful"});
            }
        } 
       }
    }catch(error){
        console.log(error);
    }
})

module.exports = router;