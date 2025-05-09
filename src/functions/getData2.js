const { MongoClient } = require("mongodb");  
const connectionString = process.env.COSMOS_DB_CONNECTION_STRING;  


app.http('getData2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});




module.exports = async function (context, req) {  
  const client = new MongoClient(connectionString);  
  await client.connect();  
  const database = client.db("testdb");  
  const data = await database.collection("testcoll").findOne();  
  return { body: data };  
}; 