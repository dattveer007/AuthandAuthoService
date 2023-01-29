const app=require('express')();
const {PORT}=require('./config/serverConfig');
const {v1}=require('./routes/index');
const bodyparser=require('body-parser');
async function startServer(){
    app.use(bodyparser.urlencoded({extended:false}));
    app.use(bodyparser.json());
    app.use('/v1',v1);
    app.listen(PORT,(error)=>{
        if(error){
            throw(error);
        }
        console.log(`Server is running on port No:${[PORT]}`);
    })
}   
startServer();