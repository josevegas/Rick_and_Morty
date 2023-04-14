const express=require('express');

const server=express();
const PORT=3001;
server.listen(PORT,()=>{
    console.log('Server raised in port: ' + PORT);
})
// const http=require('http');
// const getCharById=require('./controllers/getCharById');
// const axios=require('axios')

// const PORT=3001;
// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     try {
//         const{url}=req;
//         if(url.includes('/rickandmorty/character')){
//             const id=Number(url.split('/').pop());
//             getCharById(res,id);
//         }
//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// }).listen(PORT,'localhost');