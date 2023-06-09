const  Express  = require("express");
const { connection } = require("./database/db");
const { postControoler } = require("./Routes/routes");

const cors = require("cors")



const app = Express();

const PORT = 8000

app.use(Express.json())

app.use(cors())

app.use("/", postControoler);


app.listen(PORT, async() => {
    try{
        await connection;
        console.log("connected To DB successfully")

    }
    catch(err){
        console.log("Error connect to DB")
        console.log(err)

    }
    console.log(`Listen Port On ${PORT}`)
    
})