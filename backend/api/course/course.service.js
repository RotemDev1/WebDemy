const { ObjectId } = require('mongodb')
const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service');


module.exports = {
    query,
    // queryCarts,
    getById,
    remove,
    add,
    update,
}

// const gCourses = Courses;

async function query() {
    try {
        const collection = await dbService.getCollection('course')
        const courses = await collection.find().toArray()
        return courses
    } catch {
        console.log(err);
    }
}

// async function queryCarts() {
//     try {
//         const collection = await dbService.getCollection('cart')
//         const  carts = await collection.find().toArray()
//         return carts
//     } catch {
//         console.log('err');
//     }
// }

async function add(course) {
    try {
        const collection = await dbService.getCollection('course')
        collection.insertOne(course)
        return course
    } catch (err) {
        logger.error(`${err}`)
        console.log('err');
    }
    // const addedCourse = await storageService.post('courses', course);
}

async function remove(courseId) {
    try {
        const collection = await dbService.getCollection('course')
        await collection.deleteOne({ '_id': ObjectId(courseId) })
    } catch (err) {
        throw err
    }
}

function update() {

}
// function getPostByUser(userId) {
//     return storageService.query('posts').then(posts =>
//         posts.filter(post => post.userId === userId))
// }

async function getById(courseId) {
    try {
        const collection = await dbService.getCollection('course')
        const course = await collection.findOne({ '_id': ObjectId(courseId) })
        return course
    } catch {
        console.log('err');
        throw err
    }
    // return Courses.find(course => course._id === _id)
}