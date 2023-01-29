const router=require('express').Router();
const {UserController}=require('../../controllers/index');
const user=new UserController();
router.post('/create',user.create);
module.exports=router;