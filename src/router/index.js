const express = require('express');
const {getChat} = require('../controllers/chat.controller.js');
const {findChatById} = require('../middleware');
const {joinToChat} = require('../controllers/chat.controller.js');
const {createChat} = require('../controllers/chat.controller.js');
const {postUser, getUser, deleteUser, updateUser} = require(
    '../controllers/user.controller.js');

const router = express.Router();

router.route('/user(/:id)?').
post(postUser).
get(getUser).
put(updateUser).
delete(deleteUser);

/*
*
* READ MESSAGES
* */
router.route('/chat(/:chatId)?').
get(getChat).
post(createChat);

router.route('/chat/:chatId/participants').post(
    findChatById,
    joinToChat);


/*
* CREATE MESSAGE
* */
router.route('/chat/:chatId/message(/:messageId)').post();

module.exports = router;