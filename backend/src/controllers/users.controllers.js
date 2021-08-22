const userctrl = {};
import users from '../users.json';

userctrl.getUser = (req,res)=>{
    res.json(users.map(e=>e));
} 
userctrl.createUser = (req,res)=>{
    const {username} = req.body;
    const {number} = req.body;
    users.push({"name": username,"number": number});
    res.json('user create');  
} 
userctrl.updateUser = (req,res)=>{
    res.json(users.map(e=>e));
};
userctrl.deleteUser = (req,res)=>{
    const {name} = req.body;
    let index = 0;
    for(let i = 0; i<users.length; i++){
        if(users[i].name == name){
            index = i;
        }
    }
    users.splice(index,1);
    res.json('delete user');
}
module.exports = userctrl;