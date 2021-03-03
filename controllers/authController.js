var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var authModel = require("../models/usersWebModel");
const jwt = require('jsonwebtoken');
module.exports = {
    
    save: async function (req, res, next) {
        var data = await authModel.create({name: req.body.name,
            user: req.body.user,
            password: req.body.password,})
        res.json({status:"success", message:"user added", data:data});
    },
    login: async function (req, res, next) {
        var user = await authModel.findOne({user:req.body.user});
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const token = jwt.sign({id: user._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                    console.log(token.user);
                    res.json({status:"success", message:"user found", data:{user: user, token:token}});
                } else {
                    res.json({status:"error", message:"user invalid", data:null});
                }
            } else {
                res.json({status:"not_found", message:"user not found", data:null});
            }


    }
    
}

/* 
    create: async function (req, res, next) {
        try{
            const categories = await authModel.find({});
            console.log(req.body,categories);
            const user = new authModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            const document = await user.save(); 
            res.json(document);
        }catch(e){
            res.json({message:e.message})
        }
        
    },
    login: async (req, res, next) => {
        try{
            const userWeb = await authModel.findOne({email:req.body.email})
            if(!userWeb){
                res.json({error:true,message:"Email incorrecto"})
                return
            }
            if(bcrypt.compareSync(req.body.password,userWeb.password)){
                const token = jwt.sign({userId:userWeb._id},req.app.get("secretKey"),{expiresIn:"1h"})
                res.json({error:false,message:"Login ok",token:token})
                return
            }else{
                res.json({error:true,message:"Contraseña incorrecta"})
                return
            }
        }catch(e){
            res.json({message:e.message})
        }

    }
} */