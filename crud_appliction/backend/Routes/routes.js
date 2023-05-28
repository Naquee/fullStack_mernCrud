const {Router} = require("express");
const { addUser, getUsers, getUser,editUser, deleteUser} = require("../controllers/addduser");

const postControoler= Router();

postControoler.post("/add", addUser)
postControoler.get("/all",getUsers)
postControoler.get("/:id", getUser)
postControoler.put("/:id", editUser)
postControoler.delete("/:id",deleteUser)

module.exports={postControoler}