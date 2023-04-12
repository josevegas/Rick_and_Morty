const axios=require('axios');

function getCharById(res,id){
    // console.log("llegó")
    // try{
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response=>{
                const {id,name,gender,species,origin,image,status}=response.data;
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify({id,name,gender,species,origin,image,status}))
            })
        .catch(reason=>{
            res.writeHead(500,{'Content-Type':'text/plain'})
            res.end(reason.message)
        })
}

module.exports=getCharById;