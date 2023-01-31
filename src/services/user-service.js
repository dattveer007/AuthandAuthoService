const {UserRepository}=require('../repository/index');

class UserService{
    constructor(){
        this.userService=new UserRepository();
    }
    async createUsers(data){
        try {
            const user=await this.userService.createUser(data);
            return user;
        } catch (error) {
            console.log('service');
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