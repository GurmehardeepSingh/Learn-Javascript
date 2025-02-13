import express from 'express'
import cors from 'cors'
const app = express();
const corsoption = {
    origin : "*",
    Credentials:true
}
app.use(cors(corsoption))
 //Routing in Express
app.get('/',(req,res)=>{
    res.send("Your are requested for Home Route")
})
app.post('/CU',(req,res)=>{
    res.send("This CU project Learning")
})
const prot = 2000;
app.listen(prot, ()=> console.log(`server is Running ${prot}`))  
