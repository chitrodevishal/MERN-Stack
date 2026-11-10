const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Database Name
const dbName = "Backend";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("Day1");

  // the following code examples can be pasted here...
  // Here we are inserting multiple documents into the collection
  const insertResult = await collection.insertMany([
    { name: "Vishal Chitrode" },
    { name: "Lara Croft" },
  ]);
  console.log("Inserted documents =>", insertResult);

  // Here we are finding all the documents in the collection

  // const findResult = collection.find({})
  // let balance = 0
  // // const result = await findResult.toArray();
  // for await (const doc of findResult) {
  //   console.log(doc);
  //   balance++
  // }
  // console.log("Total documents =>", balance);

  const findResult = collection.find({});
  const result = await findResult.toArray();
  console.log("Found documents =>", result);

  const filteredDocs = await collection.find({ name:"Lara Croft" }).toArray();
  console.log("Found documents filtered by { name: 'Lara Croft' } =>", filteredDocs);

  return true;
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
