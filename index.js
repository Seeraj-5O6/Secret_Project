//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";

import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import  bodyParser from "body-parser";

const app=express();
const port=3000;
var userIsAuthorised = false;
app.use(bodyParser.urlencoded({extended:true}))


function PasswordChecker(req,res,next){
                                           // own middleware
const passwordS=req.body["Password"];
if(passwordS==="ILoveProgramming"){

    userIsAuthorised=true;
}
next();
}

app.use(PasswordChecker);

app.get("/",(req,res)=>{


    res.sendFile(__dirname + "/public/index.html");


});

app.post("/check",(req,res)=>{

    if(userIsAuthorised){

    res.sendFile(__dirname+"/public/secret.html")}
    else{

        res.redirect("/");
    }

})

app.listen(port,()=>{

console.log("sever is started at 3000");

});

