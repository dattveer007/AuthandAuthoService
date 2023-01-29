const {UserService}=require('../services/index');
class UserController{
    constructor(){
        this.user=new UserService();
    }
    async create(req,res){
        try {
            const data={
                Email:req.body.Email,
                Password:req.body.Password
            }
            const User=await this.user.createUser(data);
            return res.staus(201).json({
                success:true,
                user:User,
                error:{}
            })


        } catch (error) {
            return res.status(401).json({
                success:false,
                err:{error}
            })
        }
    }
    async destroy(req,res){
        try {
            const response=await this.user.destroyUser(req.params.id);
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