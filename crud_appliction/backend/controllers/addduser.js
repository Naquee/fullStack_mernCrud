const { User } = require("../model/user_schema");

const addUser = async(req,res) => {
    const user = req.body;
    // console.log(user)
    const newUser = new User(user)
    try{
        await newUser.save()
        console.log("data post successfully")

    }
    catch(err){
        console.log("data cnat get from controler")
        console.log(err)
    }

}

const getUsers = async(req,res) => {
    try{
        const users = await User.find({})
        res.send(users)
        // console.log("get data successfully")

    }
    catch(err){
        console.log("get error from getrequst")
        console.log(err)

    }
}

const getUser = async(req,res) => {
    // console.log(req.params.id)
    try{
        const user = await User.findById(req.params.id)
        res.send(user)
        // console.log("get data successfully")
    }
    catch(err){
        console.log("get error from getrequst")
        console.log(err)

    }
}

const editUser = async(req,res) => {
    let user = req.body;
    const editUser = new User(user)
    console.log(editUser)
    try{
        await User.updateOne({ _id: req.params.id}, user)
        res.send(editUser)

    }
    catch(err){
        console.log("err",err)
    }
}

const deleteUser = async(req,res) => {
    try{
        await User.deleteOne({_id:req.params.id})
        res.status(200).send("deleteting successfully")

    }
    catch(err){
        res.send("err deleting", err)
    }


}

module.exports={addUser,getUsers, getUser,editUser, deleteUser}