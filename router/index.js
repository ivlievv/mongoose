const express = require('express');
const {postUser} = require('../controllers/user.controller.js');

const router = express.Router();

router.post('/user', postUser);

module.exports = router;