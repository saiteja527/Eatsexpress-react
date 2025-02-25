import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DataBase Connected Successfully");
    })
    .catch((err) => console.log(err.message));
};
