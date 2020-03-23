const User = require('./../models/Users.js');

module.exports.postUser = async (req, res, next) => {
    try {

        const user = new User(req.body);
        const newUser = await user.save();
        res.status(201).send(newUser);

    } catch (e) {
        next(e);
    }
};