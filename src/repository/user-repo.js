const {User}=require('../models/index');
class UserRepository{

    async create(data){
        try {
            const user=await User.create(data);
            return user;
        } catch (error) {
            throw(error);
        }
    }
    async destroy(uid){
        try {
            const response=await User.destroy({
                where:{
                    id:uid
                }
            })
        } catch (error) {
            throw(error);
        }
    }
}
module.exports=UserRepository;