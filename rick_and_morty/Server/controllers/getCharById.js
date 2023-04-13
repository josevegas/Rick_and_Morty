const axios=require('axios');
const URL="https://rickandmortyapi.com/api/character/"

const getCharById=(req,res)=>{
    try {
        const{url}=req;
        if(url.includes('/rickandmorty/character')){
            const id=url.split('/').pop();
            axios.get(URL+id)
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
    }catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

getCharById({url:'/rickandmorty/character/1'})
module.exports=getCharById;