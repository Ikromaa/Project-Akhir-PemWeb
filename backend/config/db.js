import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ikroma_hataf:yeamplow9090@cluster0.0e6a4kb.mongodb.net/PemWeb')
    .then(() => console.log('DataBase connected'))
}