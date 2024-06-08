import { MongoClient, Db } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://lutfikhoir:CGpdp6PyhsGD0BXN@cluster0.4l543qs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

let db: Db;

export const mongoConnect = (callback: () => void) => {
  client
    .connect()
    .then(() => {
      console.log("Successfully connected");
      db = client.db("belajar_node");
      callback();
    })
    .catch((err) => console.log(err));
};

export const getDb = () => {
  if (db) {
    return db;
  }

  throw new Error("No database found!");
  
};
