let { MongoClient } = require("mongodb");

console.log(MongoClient);

let client = new MongoClient(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.9.2",
);

//console.log(client);

let connectDB = async ()=>{
try {
await client.connect();
  console.log("MongoDB Client connected Successfully...");

// let db = client.db().admin().listDatabases();
// console.log(await db); 

// console.table((await db).databases);
// (await db).databases.forEach(data=> console.log(data.name));

// let db1 = client.db('CSE&DS'); // use CSE&DS;
// let collectionList = await db1.listCollections().toArray();
// console.log(collectionList);
// console.table(collectionList);
// collectionList.forEach(coll => console.log(coll.name));

let db2 = client.db('CSE&DS'); 
let result = await db2.collection('employees').findOne();
console.log(result.name);
console.log(result.hobby);


} 
catch (err) {
  console.log(err);
} 
finally {
await client.close();
  console.log("Connection closed successfully...");
}
}
connectDB();
