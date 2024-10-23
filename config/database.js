import mongoose from "mongoose";
 let url = process.env.URI_MONGOOSE

async function conectionDatabase(){
    try {
       await mongoose.connect(url)
        console.log("Database conect")
    } catch (error) {
        console.log(error);
        
    }
}

conectionDatabase()     