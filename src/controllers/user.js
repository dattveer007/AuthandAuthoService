const {UserService}=require('../services/index');
const user=new UserService();
class UserController{
   
    async  create(req,res){
        try {
            // const data={
            //     Email:req.body.Email,
            //     Password:req.body.Password
            // }
            const User=await user.createUsers(req.body);

            return res.status(202).json({
                success:true,
                error:{}
            });


        } catch (error) {
        
            console.log("dutta");
            return res.status(401).json({
                success:false,
                err:{error}
            })
        }
    }
    async destroy(req,res){
        try {

            const response=await user.destroyUser(req.query.id);
             
            return res.status(200).json({
                success:true,
                error:{}
            })
        } catch (error) {
            return res.status(401).json({
                success:false,
                err:{error}
            })
        }
    }
}
module.exports=UserController;