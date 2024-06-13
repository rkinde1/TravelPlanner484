const {MongoClient} = require('mongodb');
const dotenv = require('dotenv').config();
const passkey = process.env.MONGO_PASSWORD;
const dbname = process.env.MONGO_DBNAME;

async function main () {

    /*
        This is the uri to connect to the database that I have set up for the project. 
    */
    const uri = `mongodb+srv://Akihi:PASSAkihi@akihi.gh0jn29.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(uri);

    try {
        //Connect to MongoDB cluster
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    }

    finally {
        /*
        When we are done using the database 
        it should be closed so that we don't
        have too many oopen connections
        */ 
        await client.close();
    }
};

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};