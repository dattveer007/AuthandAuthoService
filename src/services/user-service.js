const {UserRepository}=require('../repository/index');
class UserService{
    constructor(){
        this.userService=new UserRepository();
    }
    async createUser(data){
        try {
            const user=await this.userService.create(data);
            return user;
        } catch (error) {
            throw(error);
        }
    }
    async destroyUser(id){
        try {
            const response=await this.userService.destroy(id);
            return response;
        } catch (error) {
            throw(error);
        }
    }
}
module.exports=UserService;