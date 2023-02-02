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
   async sigin(data){

    try {
        console.log(data);
        const user=await User.findOne({
            where:{
                Email:data.email
            }
        },{
            attributes:['Email','Password','id']
        });

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
    async check(user){
        try {
            const response=await User.findOne({
                where:{
                    Email:user.Email,
                }

            });
            return response;
        } catch (error) {
            throw({error:"User not found"})
        }
    }
}
module.exports=UserRepository;