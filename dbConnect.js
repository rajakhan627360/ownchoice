const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/mongodb_server")
// .then(()=>{
//     console.log("Data Is Connected");
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })

async function getConnect(){
    try {
        await mongoose.connect(process.env.DB_KEY)
        console.log("Data Is Connect");
        
    } catch (error) {
        console.log(error);
        
    }
}
getConnect()