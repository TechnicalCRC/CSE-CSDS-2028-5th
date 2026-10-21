let mCon = require("./mongoCon");

let InsertOne = async (document) => {
  try {
    await mCon.client.connect();
    console.log("Connect success..");

    let db = await mCon.client.db(mCon.dbName); // use dbname
    let users = await db.collection("users");
    let resultAck = await users.insertOne(document);
    console.log(resultAck);
  } catch (err) {
    console.log(err);
  } finally {
    await mCon.client.close();
    console.log("connect close..");
  }
};

let FindData = async () => {
  try {
    await mCon.client.connect();
    let db = await mCon.client.db(mCon.dbName);
    let users = await db.collection('users');
   let result = await users.find().toArray(); 
 
   return await result;
} catch (err) {
    console.log(err);
  } finally {
    await mCon.client.close();
  }
};

module.exports.InsertOne = InsertOne;
module.exports.Find = FindData;
