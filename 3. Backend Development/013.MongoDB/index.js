import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MongoDB URI is missing!");
}

console.log("MongoDB URI loaded:", uri.startsWith("mongodb+srv://"));

async function runGetStarted() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log("MongoDB Connected Successfully!");

    const database = client.db("Sample");
    const users = database.collection("User");

    // const findresult = await users.find({}).toArray();
    // console.log('Found Document=>', findresult);
    // in above case all data come together
    const findresult = users.find({});
    for await (const doc of findresult) {
      console.log(doc);
      // in this method data come one by one
    }

    // insert
    // const insert = await users.insertOne({"name":"Elon Musk"})
    // insert many
    const insert = await users.insertMany([
      { name: "Metropolitan Cafe", borough: "Queens" },
      { name: "Yankee Bistro", borough: "Bronx" },
    ]);
    console.log("Inserted Document ID:", insert.insertedId);

    const result = await users.insertOne({
      title: "Back to the Future",
      year: 1985,
      genre: "Science Fiction",
    });

    console.log("Inserted Document ID:", result.insertedId);

    console.log("Query Result:", result);
  } catch (error) {
    console.error("MongoDB Error:", error.message);
  } finally {
    await client.close();
  }
}

runGetStarted();
