import mongoose  from "mongoose";

 async function dbConnect() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Database connented successfully ", conn.connection.host);
    } catch (error) {
        console.log("Database connection ERROR ", error.message);
        process.exit(1);
    }
}

export default dbConnect;