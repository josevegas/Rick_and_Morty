let myFavorites=[];
const postFav=(req,res)=>{
    myFavorites=req.body;
    res.status(200).json(myFavorites);
};
const deleteFav=(req,res)=>{
    const {id}=req.params;
    myFavorites=req.body.filter(char=>char.id!=id);
    res.status(200).json(myFavorites);
}

module.exports={postFav,deleteFav};