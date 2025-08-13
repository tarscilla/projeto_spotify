import { MongoClient } from "mongodb";

const URI =
    "mongodb+srv://tarscilla:Eliene10@cluster0.vfsus5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("projeto-spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);