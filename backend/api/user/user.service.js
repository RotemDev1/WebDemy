
const dbService = require('../../services/db.service')
// const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByMail,
    remove,
    update,
    add,
    _buildCriteria,
}

async function query(filterBy = {}) {
    // const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('user')
        console.log(collection);
        var users = await collection.find().toArray()
        return users
    } catch (err) {
        // logger.error('cannot find users', err)
        throw err
    }
}

async function getById(userId) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ '_id': ObjectId(userId) })
        delete user.password
        return user
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
    }
}
async function getByMail(mail) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ mail })
        return user
    } catch (err) {
        logger.error(`while finding user ${mail}`, err)
        throw err
    }
}

async function remove(userId) {
    try {
        const collection = await dbService.getCollection('user')
        await collection.deleteOne({ '_id': ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove user ${userId}`, err)
        throw err
    }
}

async function update(user) {
    try {
        // peek only updatable fields!
        const userToSave = {
            id: user._id,
            username: user.username,
            password: user.password,
            mail: user.mail,
            profilePicture: user.profilePicture,
            coverPicture: user.coverPicture,
            followers: user.followers,
            followings: user.followings,
            isAdmin: user.isAdmin,
            desc: user.desc,
            city: user.city,
            from: user.from,
            relationship: 'signal',
            timestamp: new Date(),
            isActive: true
        }
        const collection = await dbService.getCollection('user')
        await collection.updateOne({ '_id': userToSave._id }, { $set: userToSave })
        return userToSave;
    } catch (err) {
        logger.error(`cannot update user ${user._id}`, err)
        throw err
    }
}

async function add(user) {
    try {
        // peek only updatable fields!
        const userToAdd = {
            username: user.username,
            password: user.password,
            mail: user.mail,
            profilePicture: '',
            coverPicture: '',
            followers: [],
            followings: [],
            isAdmin: false,
            desc: '',
            city: '',
            from: '',
            relationship: 'signal',
            timestamp: new Date(),
            isActive: true
        }
        const collection = await dbService.getCollection('user')
        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {
        logger.error('cannot insert user', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [
            {
                username: txtCriteria
            },
            {
                fullname: txtCriteria
            }
        ]
    }
    if (filterBy.minBalance) {
        criteria.score = { $gte: filterBy.minBalance }
    }
    return criteria
}


