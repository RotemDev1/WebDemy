const MongoClient = require('mongodb').MongoClient
const logger = require('../services/logger.service');

const config = require('../config')

module.exports = {
    getCollection
}

var dbConn = null

async function getCollection(collectionName) {
    try {
        const db = await connect()
        const collection = await db.collection(collectionName)
        return collection
    } catch (err) {
        logger.error('Failed to get Mongo collection', err)
        throw err
    }
}

async function connect() {
    if (dbConn) return dbConn
    try {
        console.log(dbConn);
        const client = await MongoClient.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(client);
        const db = client.db(config.dbName)
        dbConn = db
        return db
    } catch (err) {
        logger.error('Cannot Connect to DB', err)
        console.log(err);
        throw err
    }
}