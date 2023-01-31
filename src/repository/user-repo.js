const {User}=require('../models/index');
class UserRepository{

    async createUser(data){
       
        try {
            const user=await User.create(data);
            return user;
        } catch (error) {
            console.log('repo');
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
            console.log(repo);
            throw(error);
        }
    }
}
module.exports=UserRepository;