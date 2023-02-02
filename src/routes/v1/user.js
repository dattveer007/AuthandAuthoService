const router=require('express').Router();
const {UserController}=require('../../controllers/index');
const user=new UserController();
router.post('/signup',user.create);
router.delete('/delete',user.destroy);
router.get('/signIn',user.logIn);
router.get('/validate',user.validate);
module.exports=router;