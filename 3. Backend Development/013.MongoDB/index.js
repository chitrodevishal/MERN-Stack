const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
// Connection URL
const url =
  "mongodb+srv://chitrodevishal_db_user:gHdgfgrU283Oqczk@mern.qociyl3.mongodb.net/";
// mongodb+srv://chitrodevishal_db_user:gHdgfgrU283Oqczk@mern.qociyl3.mongodb.net/
const client = new MongoClient(url);

// Database Name
const dbName = "Lecture";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...
  // Here we are inserting multiple documents into the "User" collection and then retrieving them.
  const insertResult = await collection.insertMany([
    { a: 1 },
    { a: 2 },
    { a: 3 },
  ]);
  console.log("Inserted documents =>", insertResult);
  const insertresult2 = await collection.insertOne({"name":"Vishal","age":22,"gender":"male"});
  // Now we will find all the documents in the "User" collection and print them to the console.
  // const findResult = await collection.find({}).toArray();
  // const findResult = await collection.find({})
  // Here we are using the find() method to retrieve all documents from the "User" collection. The find() method returns a cursor, which we can then convert into an array of documents using the toArray() method.
  let balance = 0;
  // const findResult = collection.find({});
  // Here we are using the toArray() method to convert the cursor returned by the find() method into an array of documents.
  // const ans = await findResult.toArray();
  // console.log("Found documents =>", ans);
  
  
  // Here we get data one by one using for...of loop and incrementing the balance variable for each document found.
  // for (const doc of await findResult.toArray()) {
    //   console.log(doc);
    //   balance++;
    // }
    // console.log("Total documents =>", balance);
    const findResult =await collection.find({}).toArray();
    console.log("Found documents =>", findResult);

  
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
