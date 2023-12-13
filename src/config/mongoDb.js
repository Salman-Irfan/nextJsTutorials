import mongoose from "mongoose";

const MONGOURI = "mongodb://127.0.0.1:27017/nextApi";

const connectToMongodb = () => {
    mongoose
        .connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log(`Connected to MongoDB at ${MONGOURI}`);
        })
        .catch((error) => {
            console.error(`Error connecting to MongoDB at ${MONGOURI}:`, error);
        });
};

export default connectToMongodb