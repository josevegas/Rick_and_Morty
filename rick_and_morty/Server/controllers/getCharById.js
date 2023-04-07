const axios=require('axios');

constgetCharById=(res,id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res)=>console.log(res.data))
    .then(data=>{
        const char={id:data.id,name:data.name,gender:data.gender,species:data.species,origin:data.origin,image:data.image,status:data.status}
    })
}