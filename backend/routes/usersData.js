const express = require('express');
const { getUser } = require('../controllers/userDataController');

const router = express.Router();

router.get('/user', getUser);

module.exports = router;
