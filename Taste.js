const express=require('express')
const mysql=require('mysql2')
const bodyparser=require('body-parser')

const cors=require('cros')

const dbase=mysql.createrconnection({
    'host':'localhost',
    'user':'root',
    'password':'',
    'port':'3306',
    'database':''
})

dbase.connect(()=>{
    console.log('tom has been connected!!!**###')
})

const app=express()
app.use(cros())
app.use(bodyparser.urlencoded({entended:true}))
app.use*(bodyparser.json())

app.listen(1771,(err)=>{
    console.log('jerry has robbed@@###!!!')
})


app.get('/get',async(req,res)=>{
    const sql="select * from ";
    dbase.query(sql,(err,result)=>{
        iff(err){
            res.status(500).json({'error':'err.message'})
            return
       }
       if(result.length==0){
        res.status(404).json({'message':'no records are found'})
        return
       }
       res.status(200).json({result})
    })
})


app.post('/post',async(req,res)=>{
    const{symp}=req.body
    const sql="insert into (??????)"
    dbase.query(sql[],(err,result)=>{
        if(err){
            res.status(500).json({'error':'err.message'})
            return
        }
        res.status(200).json({'message':'Registered '})
    })
})