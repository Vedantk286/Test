const express=require('express');
const Router=require('router');
const app= express();
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');
const saltRounds=10;
const router= express.Router();
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
router.use(cookieParser());

const User=require('../model/login');
const cors=require('cors');

app.use(cors({
    origin: ['https://localhost:4000'],
    methods: ['GET', 'POST'],
    credentials: true

}));
const auth=(req,res,next)=>{
    console.log(req.cookies);
   const tokenn=req.cookies.token;
    console.log(tokenn);
    if(tokenn){
        jwt.verify(tokenn,"shhhh",(err,decode)=>{
            if(err){
                res.json(err);
                console.log(err);
                res.json({Status:"fail"});
                next();
            }else{
                console.log(decode);
                res.json({Status:"success"});
                next();
            }
        });
    }else{
        res.json({Status:"fail"});
        next();
    }
   
}
router.get('/Search',auth,function(req,res){
    console.log(req.cookies.token);
});
router.get('/Cart',auth,(req,res)=>{
    
});
router.get('/',cors(),function(req,res){

});

router.post('/Login',async function(req,res){
    const namel=req.body.name;
    const passwordl=req.body.pass;
    console.log(namel);
    console.log(passwordl);
    
        const UserCheck=await User.findOne({name:namel});
        if(UserCheck){
            bcrypt.compare(passwordl, UserCheck.pass, function(err, result) {
                // result == true
                if(err){
                    console.log(err);
                }else{
                    if(result==true){
                        const token=jwt.sign({id:UserCheck.id},"shhhh",{expiresIn:"3h"});
                        res.cookie('token', token);
                        res.json({Status:"success"});
                         
                        console.log("User Found");
                    }else{
                        res.json({Status:"notFound"});
                        console.log("Not found");
                    }
                    }
            
            });
        }else{
            res.json({Status:"notFound"});
            console.log("Not found");   
        }
       

        console.log(UserCheck);
    
})
router.post('/Register',async function(req,res){
    const namel=req.body.name;
    const passl=req.body.pass;
    try{
        const UserCheck=await User.findOne({name:namel});
        if(UserCheck){
            res.json("User exists");
        }else{
            await bcrypt.hash(passl,saltRounds,async (err,hash)=>{
                if(err){
                    console.log(err);
                }
            const user=new User({name:namel,pass:hash});
            await user.save();
            console.log("Sucessfull");
            res.json({Status:"success"});
            });
            
        }
    }catch(err){
        console.log(err);
    }
    
})
module.exports = router;