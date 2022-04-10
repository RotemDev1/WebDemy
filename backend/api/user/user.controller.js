const userService = require('./user.service')
const logger = require('../../services/logger.service');
const bcrypt = require('bcrypt')


async function getUser(req, res) {
    try {
        const user = await userService.getById(req.params.id)
        res.send(user)
    } catch (err) {
        logger.error('Failed to get user', err)
        res.status(500).send({ err: 'Failed to get user' })
    }
}

async function getUsers(req, res) {
    try {
        const users = await userService.query()
        console.log(users);
        res.send(users)
    } catch (err) {
        // logger.error('Failed to get users', err)
        console.log(err);
        res.status(500).send({ err: 'Failed to get users' })
    }
}

async function deleteUser(req, res) {
    try {
        await userService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete user', err)
        res.status(500).send({ err: 'Failed to delete user' })
    }
}

async function updateUser(req, res) {
    try {
        //get password and update user
        if (req.body._id === req.params.id || req.user.isAdmin) {
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            const user = req.body;
            const savedUser = await userService.update(user);
            res.send(savedUser)
            // socketService.broadcast({type: 'user-updated', data: review, to:savedUser._id})
        } else {
            return res.status(403).json("you can update only your account!")
        }
    } catch (err) {
        logger.error('Failed to update user', err)
        res.status(500).send({ err: 'Failed to update user' })
    }
}





module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser,

}