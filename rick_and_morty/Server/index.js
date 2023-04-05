const http=require('http');
const data=require('./utils/data');

const PORT=3001;
http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const{url}=req;
        if(url.includes('/rickandmorty/character')){
            const id=url.split('/').pop();
            const character=data.find((char)=>char.id===Number(id))
            if(character){
                res.writeHead(200,{"Content-Type":"applicatioin/json"})
                res.end(JSON.stringify(character))
            }else{
                res.writeHead(404,{"Content-Type":"application/json"})
                res.end(JSON.stringify({error:`Character not found with id: ${id}`}));
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}).listen(PORT,'localhost');