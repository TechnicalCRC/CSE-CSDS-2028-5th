const { MongoClient } = require("mongodb");
console.log(MongoClient);

const client = new MongoClient(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.7.0",
);

//console.log(client);
let con =async ()=>{
try {
  await client.connect();
 console.log("MongoDB connected successfully...");
//const db1 = client.db().admin().listDatabases();

 //console.log(await db1);
 // console.table((await db1).databases);
 //(await db1).databases.forEach((db) => console.log(` - ${db.name}`));

 const db = client.db("AI&IT");
// const result = await db.listCollections().toArray(); 
// console.log(result);
    // Get list of all collections
    const collections = await db.listCollections().toArray();

    // console.table( (await collections))
    // (await collections).forEach((col)=> console.log(col.name))
    // Extract and log just the names
    // const collectionNames = collections.map(col => col.name);
    // console.log('Collections in database:', collectionNames);
    
const result = await db.collection('student').find(); 
console.log(result);

} catch (err) {
  console.log(err);
} finally {
 await client.close();
  console.log('Connection closed...')
}
}
con();