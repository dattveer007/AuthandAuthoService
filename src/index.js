const app=require('express')();
const {PORT}=require('./config/serverConfig');
async function startServer(){
    app.listen(PORT,(error)=>{
        if(error){
            throw(error);
        }
        console.log(`Server is running on port No:${[PORT]}`);
    })
}   
startServer();