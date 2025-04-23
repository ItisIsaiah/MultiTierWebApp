const { MongoClient } = require("mongodb");  
const connectionString = process.env.COSMOS_DB_CONNECTION_STRING;  

module.exports = async function (context, req) {  
  const client = new MongoClient(connectionString);  
  await client.connect();  
  const database = client.db("testdb");  
  const data = await database.collection("testcoll").findOne();  
  return { body: data };  
};  
