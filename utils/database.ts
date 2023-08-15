import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "thread",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};