const router=require('express').Router();
const {UserController}=require('../../controllers/index');
const user=new UserController();
router.post('/signup',user.create);
router.delete('/delete',user.destroy);
module.exports=router;