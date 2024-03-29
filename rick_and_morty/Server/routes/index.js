const express=require('express');
const {login,getCharById,postFav,deleteFav}=require('../controllers/index.js')

const router=express.Router();
router.get('/character/:id',getCharById);
router.get('/login',login);
router.post('/fav',postFav);
router.delete('/fav/:id',deleteFav);

module.exports=router;