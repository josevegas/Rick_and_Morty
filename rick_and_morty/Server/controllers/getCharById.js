const axios=require('axios');

const getCharById=(res,id)=>{
    try{
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response)=>console.log(response.data))
        .then(data=>{
            const char={id:data.id,name:data.name,gender:data.gender,species:data.species,origin:data.origin,image:data.image,status:data.status}
            if(char){
                res.writeHead(200,{"Content-Type":"applicatioin/json"})
                res.end(JSON.stringify(char))
            }else{
                res.writeHead(500,{"Content-Type":"text/plain"})
                res.end(JSON.stringify({error:`Character not found with id: ${id}`}))
            }
        })
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

module.exports={getCharById};