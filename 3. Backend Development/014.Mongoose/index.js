const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

// getting-started.js
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect( 
    'mongodb+srv://chitrodevishal_db_user:gHdgfgrU283Oqczk@mern.qociyl3.mongodb.net/Mongoose',
  );
  const userSchema = new mongoose.Schema({
    name: String,
  });

  const User = mongoose.model("user", userSchema);
  const user = new User({
    name: "John Doe",
  });

  await user.save();
  await User.create({
    name: "Vishal Chitrode",
  });
  await User.insertMany([
    {
      name: "Alice Smith",
    },
    {
      name: "Bob Johnson",
    },
  ]);

//   const answer = await User.find();
//   console.log(answer);
  const answer = await User.find({name: "John Doe"});
  console.log(answer);
}
main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
