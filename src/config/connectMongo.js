import mongoose from "mongoose";

export const connectMongo = () => {
    const url = process.env.MONGODB_URL;

    mongoose
        .connect(url)
        .then(() => console.log("DB connected"))
        .catch((error) => console.log(error));
};
